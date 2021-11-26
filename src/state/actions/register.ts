import { TicketType, TicketLevel, ContactInfo, OptionalInfo, PersonalInfo } from '~/state/models/register'
import { createAction } from './create-action'

export const ChangeTicketType = createAction<TicketType['type'], '[Register] Change ticket type'>('[Register] Change ticket type')
export const ChangeTicketDay = createAction<string, '[Register] Change ticket day'>('[Register] Change ticket day')
export const ChangeTicketLevel = createAction<TicketLevel, '[Register] Change ticket level'>('[Register] Change ticket level')
export const ChangeContactInfo = createAction<ContactInfo, '[Register] Change contact info'>('[Register] Change contact info')
export const ChangeOptionalInfo = createAction<OptionalInfo, '[Register] Change optional info'>('[Register] Change optional info')
export const ChangePersonalInfo = createAction<PersonalInfo, '[Register] Change personal info'>('[Register] Change personal info')
export const SubmitTicketType = createAction<TicketType['type'], '[Register] Submit ticket type'>('[Register] Submit ticket type')
export const SubmitTicketDay = createAction<string, '[Register] Submit ticket day'>('[Register] Submit ticket day')
export const SubmitTicketLevel = createAction<TicketLevel, '[Register] Submit ticket level'>('[Register] Submit ticket level')
export const SubmitContactInfo = createAction<ContactInfo, '[Register] Submit contact info'>('[Register] Submit contact info')
export const SubmitOptionalInfo = createAction<OptionalInfo, '[Register] Submit optional info'>('[Register] Submit optional info')
export const SubmitPersonalInfo = createAction<PersonalInfo, '[Register] Submit personal info'>('[Register] Submit personal info')

export type RegisterAction
	= typeof ChangeTicketType
	| typeof ChangeTicketDay
	| typeof ChangeTicketLevel
	| typeof ChangeContactInfo
	| typeof ChangeOptionalInfo
	| typeof ChangePersonalInfo
	| typeof SubmitTicketType
	| typeof SubmitTicketDay
	| typeof SubmitTicketLevel
	| typeof SubmitContactInfo
	| typeof SubmitOptionalInfo
	| typeof SubmitPersonalInfo
