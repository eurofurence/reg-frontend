import styled from '@emotion/styled'
import { Localized } from '@fluent/react'
import { RadioGroup, RadioCard, MediaQueries } from '@eurofurence/reg-component-library'
import config from '~/config'
import { useFunnelForm } from '~/hooks/funnels/form'
import FullWidthRegisterFunnelLayout from '~/components/funnels/funnels/register/layout/form/full-width'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import { StaticImage } from 'gatsby-plugin-image'
import { eachDayOfInterval } from '~/util/dates'
import { Interval } from 'luxon'
import { createLuxonFluentDateTime } from '~/util/fluent-values'

const Grid = styled.div`
	display: grid;
	gap: 20px;

	@media (max-width: 649.99px) {
		grid: auto-flow 1fr / 1fr;
	}

	@media (min-width: 650px) and (max-width: 799.99px) {
		grid: auto-flow 1fr / repeat(2, 1fr);
	}

	@media ${MediaQueries.laptop}, ${MediaQueries.desktop} {
		grid: auto-flow 1fr / repeat(3, 1fr);
	}
`

const ConCat = styled.figure`
	position: relative;
`

const TicketDay = (_: ReadonlyRouteComponentProps) => {
	const { register, handleSubmit } = useFunnelForm('register-ticket-day')

	/* eslint-disable react/jsx-key */
	const conCats = [
		null,
		<StaticImage src="../../../../../../images/con-cats/days/monday.png" alt=""/>,
		<StaticImage src="../../../../../../images/con-cats/days/tuesday.png" alt=""/>,
		<StaticImage src="../../../../../../images/con-cats/days/wednesday.png" alt=""/>,
		<StaticImage src="../../../../../../images/con-cats/days/thursday.png" alt=""/>,
		<StaticImage src="../../../../../../images/con-cats/days/friday.png" alt=""/>,
		<StaticImage src="../../../../../../images/con-cats/days/saturday.png" alt=""/>,
		<StaticImage src="../../../../../../images/con-cats/days/sunday.png" alt=""/>,
	]
	/* eslint-enable react/jsx-key */

	return <FullWidthRegisterFunnelLayout onNext={handleSubmit} currentStep={0} showBack={true}>
		<Localized id="register-ticket-day-title"><h3>Select your ticket</h3></Localized>

		<form onSubmit={handleSubmit}>
			<RadioGroup name="day">
				<Grid>
					{eachDayOfInterval(Interval.fromDateTimes(config.dayTicketStartDate, config.dayTicketEndDate)).map(date =>
						<Localized id="register-ticket-day-card" key={date.toISODate()} attrs={{ label: true }} vars={{ date: createLuxonFluentDateTime(date) }}>
							<RadioCard label={date.toString()} value={date.toISODate()} {...register('day', { required: true })}>
								<ConCat>{conCats[date.weekday]!}</ConCat>
							</RadioCard>
						</Localized>,
					)}
				</Grid>
			</RadioGroup>
		</form>
	</FullWidthRegisterFunnelLayout>
}

export default TicketDay
