import { Router } from '@reach/router'
import IndexPage from '~/pages/home'
import Ticket from '~/components/funnels/funnels/register/steps/ticket'
import Personal from '~/components/funnels/funnels/register/steps/personal'
import Contact from '~/components/funnels/funnels/register/steps/contact'
import Optional from '~/components/funnels/funnels/register/steps/optional'
import Summary from '~/components/funnels/funnels/register/steps/summary'
import ThankYou from '~/components/funnels/funnels/register/steps/thank-you'
import Room from '~/components/funnels/funnels/hotel-booking/steps/room'
import Guests from '~/components/funnels/funnels/hotel-booking/steps/guests'
import AdditionalInfo from '~/components/funnels/funnels/hotel-booking/steps/additional-info'
import Email from '~/components/funnels/funnels/hotel-booking/steps/email'
import RoomShare from '~/components/funnels/funnels/register/steps/roomshare'

import * as ROUTES from './routes'
import { withPrefix } from 'gatsby'
import { useAppSelector } from '~/hooks/redux'
import { isEditMode } from '~/state/selectors/register'
import config from '~/config'
import RoomShareHome from '~/components/funnels/funnels/register/steps/roomshare/home'
import RoomShareCreate from '~/components/funnels/funnels/register/steps/roomshare/create'
import RoomShareJoin from '~/components/funnels/funnels/register/steps/roomshare/join'

export const EFRouter = () =>
	<IndexPage />

export const RegisterRouter = () => {
	const isEdit = useAppSelector(isEditMode())

	return <Router basepath={withPrefix('/register')}>
		<Ticket default={!isEdit} path={`/${ROUTES.REGISTER_TICKET}/*`} />
		<Personal path={`/${ROUTES.REGISTER_PERSONAL}`} />
		<Contact path={`/${ROUTES.REGISTER_CONTACT}`} />
		<Optional path={`/${ROUTES.REGISTER_OPTIONAL}`} />
		<Summary default={isEdit} path={`/${ROUTES.REGISTER_SUMMARY}`} />
		<ThankYou path={`/${ROUTES.REGISTER_THANK_YOU}`} />
	</Router>
}

export const HotelBookingRouter = () =>
	<Router basepath={withPrefix('/hotel-booking')}>
		<Room path={ROUTES.HOTEL_BOOKING_ROOM} />
		<Guests path={ROUTES.HOTEL_BOOKING_GUESTS} />
		<AdditionalInfo path={ROUTES.HOTEL_BOOKING_ADDITIONAL_INFO} />
		<Email path={ROUTES.HOTEL_BOOKING_EMAIL} />
	</Router>

export const RoomShareRouter = () => {
	return <Router basepath={withPrefix('/room-share')}>
		<RoomShareHome default path={`/${ROUTES.REGISTER_ROOM_SHARE_HOME}`} />
		<RoomShareCreate path={`/${ROUTES.REGISTER_ROOM_SHARE_CREATE}`} />`
		<RoomShareJoin path={`/${ROUTES.REGISTER_ROOM_SHARE_JOIN}`} />
	</Router>
}
