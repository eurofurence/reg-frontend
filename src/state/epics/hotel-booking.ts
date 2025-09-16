import { combineEpics } from 'redux-observable'
import { AnyAppAction, GetAction } from '~/state/actions'
import { always } from 'ramda'
import { AppState } from '~/state'
import { nextPage } from './generators/next-page'
import { SubmitForm } from '../actions/forms'

export default combineEpics<GetAction<AnyAppAction>, GetAction<AnyAppAction>, AppState>(
	nextPage(SubmitForm('hotel-booking-room'), always('/hotel-booking/guests')),
	nextPage(SubmitForm('hotel-booking-guests'), always('/hotel-booking/additional-info')),
	nextPage(SubmitForm('hotel-booking-additional-info'), always('/hotel-booking/email')),
)
