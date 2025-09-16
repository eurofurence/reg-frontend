import { combineEpics } from "redux-observable"

import auth from "./auth"
import autosave from "./autosave"
import hotelBooking from "./hotel-booking"
import navigation from "./navigation"
import register from "./register"

export default combineEpics(auth, autosave, register, hotelBooking, navigation)
