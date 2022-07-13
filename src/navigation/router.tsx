import { Router } from '@reach/router'
import IndexPage from '~/pages/home'
import Ticket from '~/components/funnels/funnels/register/steps/ticket'
import Personal from '~/components/funnels/funnels/register/steps/personal'
import Contact from '~/components/funnels/funnels/register/steps/contact'
import Optional from '~/components/funnels/funnels/register/steps/optional'
import Room from '~/components/funnels/funnels/hotel-booking/steps/room'
import Guests from '~/components/funnels/funnels/hotel-booking/steps/guests'
import AdditionalInfo from '~/components/funnels/funnels/hotel-booking/steps/additional-info'
import Email from '~/components/funnels/funnels/hotel-booking/steps/email'

import * as ROUTES from './routes'

export const EFRouter = () =>
	<IndexPage />

export const RegisterRouter = () =>
	<Router basepath="/register">
		<Ticket default path={`/${ROUTES.REGISTER_TICKET}/*`} />
		<Personal path={`/${ROUTES.REGISTER_PERSONAL}`} />
		<Contact path={`/${ROUTES.REGISTER_CONTACT}`} />
		<Optional path={`/${ROUTES.REGISTER_OPTIONAL}`} />
	</Router>

export const HotelBookingRouter = () =>
	<Router basepath="/hotel-booking">
		<Room path={ROUTES.HOTEL_BOOKING_ROOM} />
		<Guests path={ROUTES.HOTEL_BOOKING_GUESTS} />
		<AdditionalInfo path={ROUTES.HOTEL_BOOKING_ADDITIONAL_INFO} />
		<Email path={ROUTES.HOTEL_BOOKING_EMAIL} />
	</Router>
