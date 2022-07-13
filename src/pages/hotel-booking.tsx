import { HotelBookingRouter } from '~/navigation/router'
import Layout from '~/components/layout'
import SEO from '~/components/seo'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'

const HotelBookingPage = (_: ReadonlyRouteComponentProps) => <Layout>
	<SEO title="Hotel Booking" />
	{HotelBookingRouter()}
</Layout>

export default HotelBookingPage
