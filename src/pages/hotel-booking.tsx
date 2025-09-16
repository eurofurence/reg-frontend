import config from "~/config"
import { HotelBookingRouter } from "~/navigation/router"

import type { ReadonlyRouteComponentProps } from "~/util/readonly-types"

import Layout from "~/components/layout"
import SEO from "~/components/seo"

export const Head = () => <SEO title="Hotel Booking" />

const HotelBookingPage = (_: ReadonlyRouteComponentProps) => (
	<Layout deadline={config.hotelBookingLaunch}>{HotelBookingRouter()}</Layout>
)

export default HotelBookingPage
