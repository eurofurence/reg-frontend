import { Router } from "@reach/router"
import { withPrefix } from "gatsby"
import * as ROUTES from "~/navigation/routes"

import type { ReadonlyRouteComponentProps } from "~/util/readonly-types"

import TicketDay from "./ticket/day"
import TicketLevel from "./ticket/level"
import TicketType from "./ticket/type"

const Ticket = (_: ReadonlyRouteComponentProps) => (
	<Router basepath={withPrefix("/register/ticket")}>
		<TicketType default path={`/${ROUTES.REGISTER_TICKET_TYPE}`} />
		<TicketDay path={`/${ROUTES.REGISTER_TICKET_DAY}`} />
		<TicketLevel path={`/${ROUTES.REGISTER_TICKET_LEVEL}`} />
	</Router>
)

export default Ticket
