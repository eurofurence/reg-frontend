import { RegisterState } from '~/state/reducers/register'
import { HotelBookingState } from '~/state/reducers/hotel-booking'

export interface AutosaveData {
	readonly register: RegisterState
	readonly hotelBooking: HotelBookingState
}

