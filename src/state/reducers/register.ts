import { ContactInfo, OptionalInfo, PersonalInfo, TicketLevel, TicketType } from '~/state/models/register'
import { AnyAppAction, GetAction } from '~/state/actions'
import { SubmitTicketType, SubmitTicketDay, ChangeTicketLevel, ChangeContactInfo, ChangeOptionalInfo, ChangePersonalInfo } from '~/state/actions/register'
import { LoadAutosaveData } from '~/state/actions/autosave'
import type { DeepPartial } from 'ts-essentials'

export interface RegisterState {
	readonly ticketType?: DeepPartial<TicketType>
	readonly ticketLevel?: DeepPartial<TicketLevel>
	readonly contactInfo?: DeepPartial<ContactInfo>
	readonly optionalInfo?: DeepPartial<OptionalInfo>
	readonly personalInfo?: DeepPartial<PersonalInfo>
}

export default (state: RegisterState = {}, action: GetAction<AnyAppAction>): RegisterState => {
	switch (action.type) {
		case SubmitTicketType.type:
			return action.payload.type === 'day' ? state : { ...state, ticketType: action.payload }
		case SubmitTicketDay.type:
			return { ...state, ticketType: { type: 'day', day: action.payload.day } }
		case ChangeTicketLevel.type:
			return { ...state, ticketLevel: action.payload }
		case ChangeContactInfo.type:
			return { ...state, contactInfo: action.payload }
		case ChangeOptionalInfo.type:
			return { ...state, optionalInfo: action.payload }
		case ChangePersonalInfo.type:
			return { ...state, personalInfo: action.payload }
		case LoadAutosaveData.type:
			return action.payload.register
		default:
			return state
	}
}
