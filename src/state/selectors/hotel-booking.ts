import { createSelector } from "reselect"

import { AppState } from ".."
import { buildInvoice } from "../models/invoice"

export const getHotelBookingInfo = () => (s: AppState) => s.hotelBooking
export const getRoomInfo = () => (s: AppState) => s.hotelBooking.roomInfo
export const getGuestsInfo = () => (s: AppState) => s.hotelBooking.guestsInfo
export const getAdditionalInfo = () => (s: AppState) =>
	s.hotelBooking.additionalInfo

export const getInvoice = createSelector(getRoomInfo(), (roomInfo) => {
	if (roomInfo === undefined) {
		return undefined
	}

	return buildInvoice([
		{ amount: 5, id: "hotel-booking-room-type-standard", unitPrice: 140 },
	])
})
