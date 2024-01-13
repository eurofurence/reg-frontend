import { includes } from '~/util/includes'
import { AppState } from '..'
import { FormIds, FormValuesType } from '../forms'
import config from '~/config'
import { map } from 'ramda'
import { getContactInfo, getOptionalInfo, getPersonalInfo, getTicketLevel, getTicketType, isEditMode } from './register'
import { TicketLevelAddons } from '~/state/models/register'

type GetDefaultFormValuesFn = <F extends FormIds>(id: F) => (s: AppState) => FormValuesType<F>

export const determineDefaultAddons = (ticketType: 'day' | 'full' | undefined): TicketLevelAddons => {
	if (ticketType === undefined) {
		return map(addon => ({
			selected: addon.default,
			options: map(option => option.default as never, addon.options),
		}), config.addons)
	} else {
		return map(addon => ({
			selected: addon.default && !(addon.unavailableFor?.type?.includes(ticketType) ?? false),
			options: map(option => option.default as never, addon.options),
		}), config.addons)
	}
}

// eslint-disable-next-line complexity
export const getDefaultFormValues = ((id: FormIds) => (s: AppState): FormValuesType<FormIds> => {
	switch (id) {
		case 'register-ticket-type':
			return {
				type: 'full',
			}
		case 'register-ticket-day':
			return {
				day: null,
			}

		case 'register-ticket-level': {
			const ticketType = getTicketType()(s)

			return {
				level: null,
				addons: determineDefaultAddons(ticketType?.type),
			}
		}

		case 'register-personal-info':
			return {
				nickname: null,
				firstName: null,
				lastName: null,
				fullNamePermission: false,
				dateOfBirth: null,
				spokenLanguages: [],
				pronounsSelection: 'prefer-not-to-say',
				pronounsOther: null,
				wheelchair: false,
			}
		case 'register-contact-info':
			return {
				email: s.auth.userInfo!.email,
				phoneNumber: null,
				telegramUsername: null,
				street: null,
				city: null,
				postalCode: null,
				stateOrProvince: null,
				country: null,
			}
		case 'register-optional-info':
			return {
				notifications: {
					art: false,
					animation: false,
					music: false,
					fursuiting: false,
				},
				digitalConbook: false,
				comments: null,
			}
		case 'register-summary':
			return {
				rulesAndConditionsAccepted: false,
			}

		case 'hotel-booking-room':
			return {
				type: null,
			}
		case 'hotel-booking-guests':
			return {
				guests: [],
			}
		case 'hotel-booking-additional-info':
			return {
				comments: null,
			}
	}
}) as GetDefaultFormValuesFn

type GetSubmittedFormValuesFn = <F extends FormIds>(id: F) => (s: AppState) => FormValuesType<F> | undefined

// eslint-disable-next-line complexity
export const getSubmittedFormValues = ((id: FormIds) => (s: AppState): FormValuesType<FormIds> | undefined => {
	switch (id) {
		case 'register-ticket-type': {
			const ticketType = getTicketType()(s)

			return ticketType === undefined ? undefined : { type: ticketType.type }
		}

		case 'register-ticket-day': {
			const ticketType = getTicketType()(s)

			return ticketType === undefined || ticketType.type !== 'day' ? undefined : { day: ticketType.day.toISODate() }
		}

		case 'register-ticket-level':
			return getTicketLevel()(s)

		case 'register-personal-info': {
			const pInfo = getPersonalInfo()(s)

			if (pInfo === undefined) {
				return undefined
			}

			const { pronouns, dateOfBirth, ...personalInfo } = pInfo

			return {
				...personalInfo,
				dateOfBirth: dateOfBirth.toISODate(),
				...pronouns === null
					? { pronounsSelection: 'prefer-not-to-say', pronounsOther: null }
					: includes(['He/Him', 'She/Her', 'They/Them'] as const, pronouns)
						? { pronounsSelection: pronouns, pronounsOther: null }
						: { pronounsSelection: 'other', pronounsOther: pronouns },
			}
		}

		case 'register-contact-info':
			return getContactInfo()(s)
		case 'register-optional-info':
			return getOptionalInfo()(s)
		case 'register-summary':
			return isEditMode()(s) ? { rulesAndConditionsAccepted: true } : undefined

		case 'hotel-booking-room':
		case 'hotel-booking-guests':
		case 'hotel-booking-additional-info':
			return undefined
	}
}) as GetSubmittedFormValuesFn
