import { tap, concatMap, withLatestFrom, catchError, ignoreElements } from 'rxjs/operators'
import { combineEpics, ofType } from 'redux-observable'
import { AnyAppAction, GetAction } from '~/state/actions'
import { always } from 'ramda'
import { AppState } from '~/state'
import { nextPage } from './generators/next-page'
import { SubmitForm } from '../actions/forms'
import { RegistrationSubmissionFailed, SubmitRegistration } from '../actions/register'
import { submitRegistration } from '~/apis/attsrv'
import { navigate } from 'gatsby'
import { getRegistrationInfo } from '../selectors/register'
import { RegistrationInfo } from '../models/register'
import { of } from 'rxjs'
import config from '~/config'
import { AjaxError } from 'rxjs/ajax'
import { StatusCodes } from 'http-status-codes'

export default combineEpics<GetAction<AnyAppAction>, GetAction<AnyAppAction>, AppState>(
	nextPage(SubmitForm('register-ticket-type'), ({ payload }) => `/register/ticket/${payload.type === 'full' ? 'level' : 'day'}`),
	nextPage(SubmitForm('register-ticket-day'), always('/register/ticket/level')),
	nextPage(SubmitForm('register-ticket-level'), always('/register/personal-info')),
	nextPage(SubmitForm('register-personal-info'), always('/register/contact-info')),
	nextPage(SubmitForm('register-contact-info'), always('/register/optional-info')),
	nextPage(SubmitForm('register-optional-info'), always('/register/summary')),
	(action$, state$) => action$.pipe(
		ofType(SubmitRegistration.type),
		withLatestFrom(state$),
		concatMap(([, state]) => submitRegistration(getRegistrationInfo()(state) as RegistrationInfo).pipe(
			tap(() => navigate('/register/thank-you')),
			ignoreElements(),
			catchError(err => {
				if (err instanceof AjaxError) {
					if (err.status === StatusCodes.UNAUTHORIZED) {
						location.href = `${config.apis.authsrv.url}/auth?app_name=${config.apis.authsrv.appName}`//&dropoff_url=${location.href}`
					}
				}

				return of(RegistrationSubmissionFailed.create(err))
			}),
		)),
	),
)
