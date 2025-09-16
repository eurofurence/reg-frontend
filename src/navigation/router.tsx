import { Router } from "@reach/router"
import { withPrefix } from "gatsby"
import IndexPage from "~/pages/home"
import { isEditMode } from "~/state/selectors/register"

import { useAppSelector } from "~/hooks/redux"
import AdditionalInfo from "~/components/funnels/funnels/hotel-booking/steps/additional-info"
import Email from "~/components/funnels/funnels/hotel-booking/steps/email"
import Guests from "~/components/funnels/funnels/hotel-booking/steps/guests"
import Room from "~/components/funnels/funnels/hotel-booking/steps/room"
import Contact from "~/components/funnels/funnels/register/steps/contact"
import Optional from "~/components/funnels/funnels/register/steps/optional"
import Personal from "~/components/funnels/funnels/register/steps/personal"
import Summary from "~/components/funnels/funnels/register/steps/summary"
import ThankYou from "~/components/funnels/funnels/register/steps/thank-you"
import Ticket from "~/components/funnels/funnels/register/steps/ticket"
import * as ROUTES from "./routes"

export const EFRouter = () => <IndexPage />

export const RegisterRouter = () => {
	const isEdit = useAppSelector(isEditMode())

	return (
		<Router basepath={withPrefix("/register")}>
			<Ticket default={!isEdit} path={`/${ROUTES.REGISTER_TICKET}/*`} />
			<Personal path={`/${ROUTES.REGISTER_PERSONAL}`} />
			<Contact path={`/${ROUTES.REGISTER_CONTACT}`} />
			<Optional path={`/${ROUTES.REGISTER_OPTIONAL}`} />
			<Summary default={isEdit} path={`/${ROUTES.REGISTER_SUMMARY}`} />
			<ThankYou path={`/${ROUTES.REGISTER_THANK_YOU}`} />
		</Router>
	)
}

export const HotelBookingRouter = () => (
	<Router basepath={withPrefix("/hotel-booking")}>
		<Room path={ROUTES.HOTEL_BOOKING_ROOM} />
		<Guests path={ROUTES.HOTEL_BOOKING_GUESTS} />
		<AdditionalInfo path={ROUTES.HOTEL_BOOKING_ADDITIONAL_INFO} />
		<Email path={ROUTES.HOTEL_BOOKING_EMAIL} />
	</Router>
)
