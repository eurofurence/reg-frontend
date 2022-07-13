import { combineReducers } from 'redux'

import autosave from './autosave'
import register from './register'
import hotelBooking from './hotel-booking'

export default combineReducers<{
	readonly autosave: typeof autosave
	readonly register: typeof register
	readonly hotelBooking: typeof hotelBooking
}>({
	autosave,
	register,
	hotelBooking,
})
