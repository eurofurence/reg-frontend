import { RoomInfo, GuestsInfo, AdditionalInfo } from '~/state/models/hotel-booking'
import { AnyAppAction, GetAction } from '~/state/actions'
import { ChangeRoomInfo, ChangeGuestsInfo, ChangeAdditionalInfo } from '~/state/actions/hotel-booking'
import { LoadAutosaveData } from '~/state/actions/autosave'
import type { DeepPartial } from 'ts-essentials'

export interface HotelBookingState {
	readonly roomInfo?: DeepPartial<RoomInfo>
	readonly guestsInfo?: DeepPartial<GuestsInfo>
	readonly additionalInfo?: DeepPartial<AdditionalInfo>
}

export default (state: HotelBookingState = {}, action: GetAction<AnyAppAction>): HotelBookingState => {
	switch (action.type) {
		case ChangeRoomInfo.type:
			return { ...state, roomInfo: action.payload }
		case ChangeGuestsInfo.type:
			return { ...state, guestsInfo: action.payload }
		case ChangeAdditionalInfo.type:
			return { ...state, additionalInfo: action.payload }
		case LoadAutosaveData.type:
			return action.payload.hotelBooking
		default:
			return state
	}
}
