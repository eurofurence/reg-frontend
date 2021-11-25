/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled'
import { Localized } from '@fluent/react'
import { RouteComponentProps } from '@reach/router'
import { useForm } from 'react-hook-form'
import { DateTime } from 'luxon'
import { until, last } from 'ramda'
import { RadioGroup, RadioCard } from '@eurofurence/reg-component-library'
import { useSiteMetadata } from '../../../../hooks/queries/site-metadata'
import FullWidthRegisterLayout from '../../layout/full-width'
import { SubmitTicketDay } from '../../../../state/actions/register'
import { useAppDispatch } from '../../../../hooks/redux'

const datesBetween = (start: DateTime, end: DateTime) =>
	until<DateTime[], DateTime[]>(days => last(days)!.equals(end), days => [...days, last(days)!.plus({ day: 1 })], [start])

const Grid = styled.div`
	display: grid;
	gap: 20px;
	grid: auto-flow 1fr / repeat(3, 1fr);
`

const TicketDay = (_: RouteComponentProps) => {
	const { eventStartDate, eventEndDate } = useSiteMetadata()
	const { register, handleSubmit } = useForm<{ day: string }>()
	const dispatch = useAppDispatch()

	return <FullWidthRegisterLayout onSubmit={handleSubmit(data => dispatch(SubmitTicketDay.create(data.day)))}>
		<RadioGroup name="day">
			<Grid>
				{datesBetween(DateTime.fromISO(eventStartDate), DateTime.fromISO(eventEndDate)).map(date =>
					<Localized id="register-ticket-day-card" attrs={{ label: true }} vars={{ date: date.toJSDate() }}>
						<RadioCard key={date.toISODate()} label={date.toString()} value={date.toISODate()} {...register('day')}/>
					</Localized>
				)}
			</Grid>
		</RadioGroup>
	</FullWidthRegisterLayout>
}

export default TicketDay