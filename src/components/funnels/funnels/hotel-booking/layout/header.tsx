import { Localized } from '@fluent/react'

interface HotelBookingHeaderProps {
	readonly isFirstPage?: boolean
}

const HotelBookingHeader = ({ isFirstPage = false }: HotelBookingHeaderProps) =>
	!isFirstPage ? null : <>
		<Localized id="hotel-booking-header-title"><h1>Welcome to Eurofurence 2022!</h1></Localized>
		<Localized id="hotel-booking-header-description">
			<>
				<p>
					In order to speed up hotel booking and increase your chances of securing a room, you can enter your preferred dates,
					hotel room, contact and guest information on the following pages. We will then generate an email template for you,
					which you can copy and paste into your email client.
				</p>
				<p>
					Once booking starts, the secret code in the message below will be revealed.
					<span className="important">You need this code for the hotel to accept your booking.</span>
				</p>
				<p>The secret code will also be sent out on our <a>Twitter</a> and <a>Telegram</a> accounts.</p>
			</>
		</Localized>
	</>

export default HotelBookingHeader
