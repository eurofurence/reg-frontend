import { Locale } from '~/localization'
import { createAction } from './create-action'
import { RegisterState } from '~/state/reducers/register'

export const CheckCountdown = createAction<undefined, '[Register] Check countdown'>('[Register] Check countdown')
export const LoadRegistrationState = createAction<RegisterState, '[Register] Load registration state'>('[Register] Load registration state')
export const InitiatePayment = createAction<undefined, '[Register] Initiate payment'>('[Register] Initiate payment')
export const InitiateSepaPayment = createAction<undefined, '[Register] Initiate SEPA payment'>('[Register] Initiate SEPA payment')
export const SetLocale = createAction<Locale, '[Register] Set locale'>('[Register] Set locale')

export type RegisterAction
	= typeof CheckCountdown
	| typeof LoadRegistrationState
	| typeof InitiatePayment
	| typeof InitiateSepaPayment
	| typeof SetLocale
