import styled from '@emotion/styled'
import { Localized } from '@fluent/react'
import { RadioGroup } from '@eurofurence/reg-component-library'
import config from '~/config'
import TicketLevelCard from './level/card'
import TicketLevelAddon, { AugmentedAddon } from './level/addons/addon'
import FullWidthRegisterFunnelLayout from '~/components/funnels/funnels/register/layout/form/full-width'
import { useFunnelForm } from '~/hooks/funnels/form'
import { useAppSelector } from '~/hooks/redux'
import { getTicketType } from '~/state/selectors/register'
import { funnelStep } from '~/components/funnels/funnels/register/funnel-step'

const TicketLevelSection = styled.section`
	margin-top: 1.5em;
`

const TicketLevelGrid = styled.section`
	display: grid;
	gap: 20px;
	grid: auto-flow 1fr / repeat(3, 1fr);
	margin-top: 2em;
`

const AddonsSection = styled.section`
	margin-top: 4.5em;
`

const AddonsContainer = styled.section`
	margin-top: 3em;
`

const TicketLevel = () => {
	const ticketType = useAppSelector(getTicketType())!
	const formContext = useFunnelForm('register-ticket-level')
	const { register, handleSubmit } = formContext

	const expirationDate = config.registrationExpirationDate

	return <FullWidthRegisterFunnelLayout onNext={handleSubmit}>
		<form onSubmit={handleSubmit}>
			<TicketLevelSection>
				<Localized id="register-ticket-level-title"><h3>Select your ticket</h3></Localized>
				<TicketLevelGrid>
					<RadioGroup name="level">
						{Object.entries(config.ticketLevels).map(([id, { prices }]) =>
							<Localized key={id} id={`register-ticket-level-card-${id}`} attrs={{ label: true, priceLabel: true }}>
								<TicketLevelCard
									id={id}
									price={prices[ticketType.type]}
									expirationDate={expirationDate}
									label="Ticket level"
									priceLabel="A ticket"
									{...register('level', { required: true })}
								>
									A ticket level
								</TicketLevelCard>
							</Localized>,
						)}
					</RadioGroup>
				</TicketLevelGrid>
			</TicketLevelSection>
			<AddonsSection>
				<Localized id="register-ticket-level-addons-title"><h3>Select add-ons</h3></Localized>
				<AddonsContainer>
					{Object.entries(config.addons).filter(([, addon]) => !(addon.unavailableFor?.type?.includes(ticketType.type) ?? false)).map(([id, addon]) =>
						// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
						<TicketLevelAddon key={id} addon={{ id, ...addon } as AugmentedAddon} formContext={formContext}/>,
					)}
				</AddonsContainer>
			</AddonsSection>
		</form>
	</FullWidthRegisterFunnelLayout>
}

export default funnelStep(1)(TicketLevel)
