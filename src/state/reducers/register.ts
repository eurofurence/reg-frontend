import { Registration, RegistrationInfo, TicketLevel, TicketType } from '~/state/models/register'
import { AnyAppAction, GetAction } from '~/state/actions'
import type { DeepNonNullable } from 'ts-essentials'
import { SubmitForm, SubmitFormActionBundle } from '~/state/actions/forms'
import { LoadRegistrationState, SetLocale } from '~/state/actions/register'
import config from '~/config'
import { DateTime } from 'luxon'
import { determineDefaultAddons } from '~/state/selectors/forms'
import { sanitizeFormCache } from '~/hooks/funnels/form'

export interface ClosedRegisterState {
	readonly isOpen: false | null
}

export interface OpenRegisterState {
	readonly isOpen: true
	readonly registration: Registration
}

export type RegisterState = ClosedRegisterState | OpenRegisterState

export const isOpen = (s: RegisterState): s is OpenRegisterState => s.isOpen ?? false

const defaultState: RegisterState = {
	isOpen: null,
}

const transformTicketLevel = (ticketType: TicketType, payload: GetAction<SubmitFormActionBundle<'register-ticket-level'>>['payload']): TicketLevel => {
	const { addons, ...payloadRest } = payload as DeepNonNullable<typeof payload>

	const unselectedAddonIds = Object.entries(addons).filter(([, { selected }]) => !selected).map(([id]) => id)

	return {
		addons: Object.fromEntries(Object.entries(addons).map(([id, { selected, ...rest }]) => [id, {
			selected: !(config.addons[id].unavailableFor?.type?.includes(ticketType.type) ?? false)
				&& !(config.addons[id].unavailableFor?.level?.includes(payload.level) ?? false)
				&& !(unselectedAddonIds.filter(id => config.addons[id].requires?.includes(id) ?? false).length > 0)
				&& selected,
			...rest,
		}])),
		...payloadRest,
	}
}

const transformPersonalInfo = (payload: GetAction<SubmitFormActionBundle<'register-personal-info'>>['payload']) => {
	const { pronounsSelection, pronounsOther, dateOfBirth, nickname, firstName, lastName, ...rest } = payload as DeepNonNullable<typeof payload>

	const sanitize = (s: string) => s.replace(/[\r\n]+/gu, '').trim()

	return {
		nickname: sanitize(nickname),
		firstName: sanitize(firstName),
		lastName: sanitize(lastName),
		pronouns: pronounsSelection === 'prefer-not-to-say'
			? null
			: pronounsSelection === 'other'
				? pronounsOther
				: pronounsSelection,
		dateOfBirth: DateTime.fromISO(dateOfBirth),
		...rest,
	}
}

const transformContactInfo = (payload: GetAction<SubmitFormActionBundle<'register-contact-info'>>['payload']) => {
	const { email, phoneNumber, telegramUsername, street, city, postalCode, stateOrProvince, ...rest } = payload as DeepNonNullable<typeof payload>
	const sanitize = (s: string | null | undefined) => typeof s === 'string' ? s.replace(/[\r\n]+/gu, '').trim() : ''

	return {
		email: sanitize(email),
		phoneNumber: sanitize(phoneNumber),
		telegramUsername: typeof telegramUsername === 'string' ? sanitize(telegramUsername) : null,
		street: sanitize(street),
		city: sanitize(city),
		postalCode: sanitize(postalCode),
		stateOrProvince: typeof stateOrProvince === 'string' ? sanitize(stateOrProvince) : null,
		...rest,
	}
}

const transformOptionalInfo = (payload: GetAction<SubmitFormActionBundle<'register-optional-info'>>['payload']) => {
	const { comments, ...rest } = payload as DeepNonNullable<typeof payload>

	return {
		comments: typeof comments === 'string' ? comments.trim() : comments,
		...rest,
	}
}

const resetAddonsAndLevelInState = (state: Partial<RegistrationInfo>, ticketType: 'day' | 'full'): Partial<RegistrationInfo> => {
	if (state.ticketLevel) {
		return {
			...state,
			ticketLevel: {
				level: null,
				addons: determineDefaultAddons(ticketType),
			},
		}
	} else {
		return state
	}
}

const registrationInfoReducer = (state: Partial<RegistrationInfo>, action: GetAction<AnyAppAction>): Partial<RegistrationInfo> => {
	switch (action.type) {
		case SubmitForm('register-ticket-type').type: {
			// sanitize the form cache - not an ideal solution, but it works
			sanitizeFormCache()

			// here we can force reset ticket addons to defaults (different hidden packages, different defaults)
			if (action.payload.type === 'day') {
				// not setting ticketType - it is set when choosing a day
				return resetAddonsAndLevelInState(state, 'day')
			}

			const stateWithAddonsReset = resetAddonsAndLevelInState(state, 'full')

			return { ...stateWithAddonsReset, ticketType: { type: action.payload.type! } }
		}

		case SubmitForm('register-ticket-day').type:
			return { ...state, ticketType: { type: 'day', day: DateTime.fromISO(action.payload.day!, { zone: 'Europe/Berlin' }) } }
		case SubmitForm('register-ticket-level').type:
			return { ...state, ticketLevel: transformTicketLevel(state.ticketType!, action.payload) }
		case SubmitForm('register-contact-info').type:
			return { ...state, contactInfo: transformContactInfo(action.payload) }
		case SubmitForm('register-optional-info').type:
			return { ...state, optionalInfo: transformOptionalInfo(action.payload) }
		case SubmitForm('register-personal-info').type:
			return { ...state, personalInfo: transformPersonalInfo(action.payload) }
		case SetLocale.type:
			return { ...state, preferredLocale: action.payload }
		default:
			return state
	}
}

const registrationReducer = (state: Registration, action: GetAction<AnyAppAction>): Registration => {
	switch (action.type) {
		default:
			return { ...state, registrationInfo: registrationInfoReducer(state.registrationInfo, action) as RegistrationInfo }
	}
}

export default (state: RegisterState = defaultState, action: GetAction<AnyAppAction>): RegisterState => {
	switch (action.type) {
		case LoadRegistrationState.type:
			return { ...state, ...action.payload }
		default:
			return isOpen(state) ? { ...state, registration: registrationReducer(state.registration, action) } : state
	}
}
