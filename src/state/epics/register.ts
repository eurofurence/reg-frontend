import { concatMap, withLatestFrom, map, filter, ignoreElements } from 'rxjs/operators'
import { combineEpics, Epic, ofType } from 'redux-observable'
import { AnyAppAction, GetAction } from '~/state/actions'
import { always } from 'ramda'
import { AppState } from '~/state'
import { nextPage } from './generators/next-page'
import { SubmitForm } from '~/state/actions/forms'
import { CheckCountdown, InitiatePayment, LoadRegistrationState, SetLocale, ReloadRegistrationState } from '~/state/actions/register'
import { findExistingRegistration, registrationCountdownCheck, submitRegistration, updateRegistration } from '~/apis/attsrv'
import { navigate } from 'gatsby'
import { getRegistrationId, getRegistrationInfo, isEditMode } from '~/state/selectors/register'
import { RegistrationInfo } from '~/state/models/register'
import { justDo } from '~/state/epics/operators/just-do'
import { EMPTY, of } from 'rxjs'
import { addHours, isBefore } from 'date-fns'
import config from '~/config'
import { calculateOutstandingDues, calculateTotalPaid, findTransactionsForBadgeNumber, hasUnprocessedPayments, initiateCreditCardPaymentOrUseExisting } from '~/apis/paysrv'
import { catchAppError } from './operators/catch-app-error'
import { includes } from '~/util/includes'
import { loadAutosave } from '../models/autosave'
import { getDefaultLocale } from '~/localization'

const nextPageOrSave = <T extends AnyAppAction>(actionBundle: T, pathProvider: (action: GetAction<T>) => string): Epic<GetAction<AnyAppAction>, GetAction<AnyAppAction>, AppState> =>
	(action$, state$) => action$.pipe(
		ofType<GetAction<AnyAppAction>, T['type'], GetAction<T>>(actionBundle.type),
		withLatestFrom(state$),
		concatMap(([action, state]) => {
			if (isEditMode()(state)) {
				return updateRegistration(getRegistrationId()(state)!, getRegistrationInfo()(state)! as RegistrationInfo).pipe(
					justDo(() => navigate('/register/summary')),
					catchAppError('registration-update'),
				)
			} else {
				// eslint-disable-next-line @typescript-eslint/no-floating-promises
				navigate(pathProvider(action))

				return EMPTY
			}
		}),
	)

export default combineEpics<GetAction<AnyAppAction>, GetAction<AnyAppAction>, AppState>(
	// Navigation in the funnel
	nextPage(SubmitForm('register-ticket-type'), ({ payload }) => `/register/ticket/${payload.type === 'full' ? 'level' : 'day'}`),
	nextPageOrSave(SubmitForm('register-ticket-day'), always('/register/ticket/level')),
	nextPageOrSave(SubmitForm('register-ticket-level'), always('/register/personal-info')),
	nextPageOrSave(SubmitForm('register-personal-info'), always('/register/contact-info')),
	nextPageOrSave(SubmitForm('register-contact-info'), always('/register/optional-info')),
	nextPageOrSave(SubmitForm('register-optional-info'), always('/register/summary')),

	// Submit registration
	(action$, state$) => action$.pipe(
		ofType(SubmitForm('register-summary').type),
		withLatestFrom(state$),
		concatMap(([, state]) => {
			const registrationInfo = getRegistrationInfo()(state)!

			// I'm loading the default locale here instead of in the getPreferredLocale selector because if I were to put it there
			// then I can't selectively enable/disable browser negotiation for SSR...
			// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
			return submitRegistration({ ...registrationInfo, preferredLocale: registrationInfo.preferredLocale ?? getDefaultLocale() } as RegistrationInfo).pipe(
				justDo(() => navigate('/register/thank-you')),
				catchAppError('registration-submission'),
			)
		}),
	),

	// Check if registrations are open and if and existing registration exists
	action$ => action$.pipe(
		ofType(CheckCountdown.type),
		concatMap(() => registrationCountdownCheck().pipe(
			concatMap(result => {
				const saveData = loadAutosave()

				if (result.response.countdown > 0) {
					return of(LoadRegistrationState.create({ isOpen: false }))
				} else if (isBefore(new Date(result.response.currentTime), addHours(new Date(result.response.targetTime), config.hoursBeforeEditAvailable))) {
					return of(LoadRegistrationState.create({ isOpen: true, registration: { status: 'unsubmitted', registrationInfo: saveData?.registrationInfo ?? { } } }))
				} else {
					return findExistingRegistration().pipe(
						concatMap(reg => {
							if (reg === undefined) {
								return of(LoadRegistrationState.create({ isOpen: true, registration: { status: 'unsubmitted', registrationInfo: saveData?.registrationInfo ?? { } } }))
							} else if (includes(['new', 'waiting'] as const, reg.status)) {
								return of(LoadRegistrationState.create({ isOpen: true, registration: { id: reg.id, status: reg.status, registrationInfo: reg.registrationInfo } }))
							} else {
								return findTransactionsForBadgeNumber(reg.id).pipe(
									map(transactions => LoadRegistrationState.create({
										isOpen: true,
										registration: {
											id: reg.id,
											status: reg.status,
											registrationInfo: reg.registrationInfo,
											paymentInfo: {
												paid: calculateTotalPaid(transactions) / 100,
												due: calculateOutstandingDues(transactions) / 100, // TODO: Use big.js
												unprocessedPayments: hasUnprocessedPayments(transactions),
											},
										},
									})),
								)
							}
						}),
					)
				}
			}),
			catchAppError('registration-open-check'),
		)),
	),

	// Reload registration and payment info because it may have changed
	action$ => action$.pipe(
		ofType(ReloadRegistrationState.type),
		concatMap(() => findExistingRegistration().pipe(
			concatMap(reg => {
				if (reg === undefined) {
					return EMPTY
				} else if (includes(['new', 'waiting'] as const, reg.status)) {
					return EMPTY
				} else {
					return findTransactionsForBadgeNumber(reg.id).pipe(
						map(transactions => LoadRegistrationState.create({
							isOpen: true,
							registration: {
								id: reg.id,
								status: reg.status,
								registrationInfo: reg.registrationInfo,
								paymentInfo: {
									paid: calculateTotalPaid(transactions) / 100,
									due: calculateOutstandingDues(transactions) / 100, // TODO: Use big.js
									unprocessedPayments: hasUnprocessedPayments(transactions),
								},
							},
						})),
					)
				}
			}),
		)),
	),

	(action$, state$) => action$.pipe(
		ofType(InitiatePayment.type),
		withLatestFrom(state$),
		concatMap(([, state]) => initiateCreditCardPaymentOrUseExisting(getRegistrationId()(state)!).pipe(
			justDo(transaction => {
				location.href = transaction.payment_start_url
			}),
			catchAppError('registration-initiate-payment'),
		)),
	),

	(action$, state$) => action$.pipe(
		ofType(SetLocale.type),
		withLatestFrom(state$),
		filter(([, state]) => isEditMode()(state)),
		concatMap(([, state]) => updateRegistration(getRegistrationId()(state)!, getRegistrationInfo()(state)! as RegistrationInfo).pipe(
			ignoreElements(),
			catchAppError('registration-set-locale'),
		)),
	),
)
