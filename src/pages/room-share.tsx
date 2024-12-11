import { RoomShareRouter } from '~/navigation/router'

import SEO from '~/components/seo'
import { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import Layout from '~/components/layout'

export const Head = () => <SEO title="Room Sharing" />

const RoomSharingPage = (_: ReadonlyRouteComponentProps) => {
	return (
		<Layout>
			<RoomShareRouter />
		</Layout>
	)
}

export default RoomSharingPage
