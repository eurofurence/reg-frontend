import { Registration, RegistrationInfo, TicketLevel, TicketType } from '~/state/models/register'
import { AnyAppAction, GetAction } from '~/state/actions'
import type { DeepNonNullable } from 'ts-essentials'
import { SubmitForm, SubmitFormActionBundle } from '~/state/actions/forms'
import { LoadRegistrationState, SetLocale } from '~/state/actions/register'
import config from '~/config'
import { DateTime } from 'luxon'
import { map } from 'ramda'

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

	return {
		addons: Object.fromEntries(Object.entries(addons).map(([id, { selected, ...rest }]) => [id, {
			selected: !(config.addons[id].unavailableFor?.type?.includes(ticketType.type) ?? false) && selected,
			...rest,
		}])),
		...payloadRest,
	}
}

const transformPersonalInfo = (payload: GetAction<SubmitFormActionBundle<'register-personal-info'>>['payload']) => {
	const { pronounsSelection, pronounsOther, dateOfBirth, ...rest } = payload as DeepNonNullable<typeof payload>

	return {
		pronouns: pronounsSelection === 'prefer-not-to-say'
			? null
			: pronounsSelection === 'other'
				? pronounsOther
				: pronounsSelection,
		dateOfBirth: DateTime.fromISO(dateOfBirth),
		...rest,
	}
}

const registrationInfoReducer = (state: Partial<RegistrationInfo>, action: GetAction<AnyAppAction>): Partial<RegistrationInfo> => {
	switch (action.type) {
		case SubmitForm('register-ticket-type').type: {
			// here we can force reset ticket level to defaults (different hidden packages, different defaults)
			if (action.payload.type === 'day') {
				// not setting ticketType - it is set when choosing a day
				if (state.ticketLevel?.level) {
					return { ...state,
						ticketLevel: {
							level: state.ticketLevel.level,
							// reset addons
							addons: map(addon => ({
								selected: addon.default && !(addon.unavailableFor?.type?.includes('day') ?? false),
								options: map(option => option.default as never, addon.options),
							}), config.addons),
						} }
				} else {
					return state
				}
			}

			if (state.ticketLevel?.level) {
				return { ...state,
					ticketLevel: {
						level: state.ticketLevel.level,
						// reset addons
						addons: map(addon => ({
							selected: addon.default && !(addon.unavailableFor?.type?.includes('full') ?? false),
							options: map(option => option.default as never, addon.options),
						}), config.addons),
					},
					ticketType: { type: action.payload.type! } }
			} else {
				return { ...state, ticketType: { type: action.payload.type! } }
			}
		}

		case SubmitForm('register-ticket-day').type:
			return { ...state, ticketType: { type: 'day', day: DateTime.fromISO(action.payload.day!, { zone: 'Europe/Berlin' }) } }
		case SubmitForm('register-ticket-level').type:
			return { ...state, ticketLevel: transformTicketLevel(state.ticketType!, action.payload) }
		case SubmitForm('register-contact-info').type:
			return { ...state, contactInfo: action.payload as DeepNonNullable<typeof action.payload> }
		case SubmitForm('register-optional-info').type:
			return { ...state, optionalInfo: action.payload as DeepNonNullable<typeof action.payload> }
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
