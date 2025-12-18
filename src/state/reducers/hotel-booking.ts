import type { HotelBookingInfo } from '~/state/models/hotel-booking'
import type { AnyAppAction, GetAction } from '~/state/actions'
import type { DeepNonNullable } from 'ts-essentials'
import { SubmitForm } from '../actions/forms'

export type HotelBookingState = Partial<HotelBookingInfo>

const defaultState: HotelBookingState = {}

export default (
  state: HotelBookingState = defaultState,
  action: GetAction<AnyAppAction>
): HotelBookingState => {
  switch (action.type) {
    case SubmitForm('hotel-booking-room').type:
      return {
        ...state,
        roomInfo: action.payload as DeepNonNullable<typeof action.payload>,
      }
    case SubmitForm('hotel-booking-guests').type:
      return {
        ...state,
        guestsInfo: action.payload as DeepNonNullable<typeof action.payload>,
      }
    case SubmitForm('hotel-booking-additional-info').type:
      return {
        ...state,
        additionalInfo: action.payload as DeepNonNullable<
          typeof action.payload
        >,
      }
    default:
      return state
  }
}
