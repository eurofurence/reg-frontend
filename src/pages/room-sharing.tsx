import { RoomShareRouter } from '~/navigation/router'

import SEO from '~/components/seo'
import { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import Layout from '~/components/layout'
import config from '~/config'

export const Head = () => <SEO title="Room Sharing" />

const RoomSharingPage = (_: ReadonlyRouteComponentProps) => <Layout deadline={config.hotelBookingLaunch}>
	{RoomShareRouter()}
</Layout>

export default RoomSharingPage
