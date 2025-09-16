import { combineReducers } from "redux"

import auth from "./auth"
import autosave from "./autosave"
import errors from "./errors"
import hotelBooking from "./hotel-booking"
import register from "./register"

export default combineReducers<{
	readonly autosave: typeof autosave
	readonly auth: typeof auth
	readonly errors: typeof errors
	readonly register: typeof register
	readonly hotelBooking: typeof hotelBooking
}>({
	autosave,
	auth,
	errors,
	register,
	hotelBooking,
})
