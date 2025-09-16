import { Router } from '@reach/router'
import TicketType from './ticket/type'
import TicketDay from './ticket/day'
import TicketLevel from './ticket/level'
import * as ROUTES from '~/navigation/routes'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import { withPrefix } from 'gatsby'

const Ticket = (_: ReadonlyRouteComponentProps) =>
	<Router basepath={withPrefix('/register/ticket')}>
		<TicketType default path={`/${ROUTES.REGISTER_TICKET_TYPE}`} />
		<TicketDay path={`/${ROUTES.REGISTER_TICKET_DAY}`} />
		<TicketLevel path={`/${ROUTES.REGISTER_TICKET_LEVEL}`} />
	</Router>

export default Ticket
