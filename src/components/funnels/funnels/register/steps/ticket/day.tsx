import styled from '@emotion/styled'
import { Localized } from '@fluent/react'
import { navigate } from '@reach/router'
import { DateTime } from 'luxon'
import { until, last } from 'ramda'
import { RadioGroup, RadioCard } from '@eurofurence/reg-component-library'
import { useSiteMetadata } from '~/hooks/queries/site-metadata'
import { ChangeTicketDay, SubmitTicketDay } from '~/state/actions/register'
import { useFunnelForm } from '~/hooks/funnels/form'
import FullWidthRegisterFunnelLayout from '~/components/funnels/funnels/register/layout/form/full-width'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import type { DeepReadonly } from 'ts-essentials'

const datesBetween = (start: DeepReadonly<DateTime>, end: DeepReadonly<DateTime>) =>
	until<DateTime[], DateTime[]>(days => last(days)!.equals(end), days => [...days, last(days)!.plus({ day: 1 })], [start])

const Grid = styled.div`
	display: grid;
	gap: 20px;
	grid: auto-flow 1fr / repeat(3, 1fr);
`

const TicketDay = (_: ReadonlyRouteComponentProps) => {
	const { eventStartDate, eventEndDate } = useSiteMetadata()
	const { register, handleSubmit } = useFunnelForm<{ day: string }>(ChangeTicketDay, SubmitTicketDay)

	return <FullWidthRegisterFunnelLayout onNext={handleSubmit} currentStep={0}>
		<form onSubmit={handleSubmit}>
			<RadioGroup name="day">
				<Grid>
					{datesBetween(DateTime.fromISO(eventStartDate), DateTime.fromISO(eventEndDate)).map(date =>
						<Localized id="register-ticket-day-card" key={date.toISODate()} attrs={{ label: true }} vars={{ date: date.toJSDate() }}>
							<RadioCard label={date.toString()} value={date.toISODate()} {...register('day')}/>
						</Localized>,
					)}
				</Grid>
			</RadioGroup>
			<br/>
			<Localized id="register-change-ticket-type"><a onClick={() => navigate(-1)}>Change ticket type</a></Localized>
		</form>
	</FullWidthRegisterFunnelLayout>
}

export default TicketDay
