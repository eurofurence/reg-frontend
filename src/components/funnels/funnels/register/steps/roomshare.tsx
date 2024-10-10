import { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import { Router } from '@reach/router'
import { withPrefix } from 'gatsby'
import * as ROUTES from '~/navigation/routes'
import RoomShareJoin from '~/components/funnels/funnels/register/steps/roomshare/join'
import RoomShareHome from '~/components/funnels/funnels/register/steps/roomshare/home'
import RoomShareCreate from '~/components/funnels/funnels/register/steps/roomshare/create'

const RoomShare = (_: ReadonlyRouteComponentProps) =>
	<Router basepath={withPrefix('/register/room-share')}>
		<RoomShareHome path={`/${ROUTES.REGISTER_ROOM_SHARE_HOME}`} />
		<RoomShareCreate path={`/${ROUTES.REGISTER_ROOM_SHARE_CREATE}`} />`
		<RoomShareJoin path={`/${ROUTES.REGISTER_ROOM_SHARE_JOIN}`} />
	</Router>

export default RoomShare
