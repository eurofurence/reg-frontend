import { HotelBookingRouter } from '~/navigation/router'
import Layout from '~/components/layout'
import SEO from '~/components/seo'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import config from '~/config'

export const Head = () => <SEO title="Hotel Booking" />

const HotelBookingPage = (_: ReadonlyRouteComponentProps) => (
  <Layout deadline={config.hotelBookingLaunch}>{HotelBookingRouter()}</Layout>
)

export default HotelBookingPage
