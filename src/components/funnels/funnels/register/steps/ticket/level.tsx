import styled from '@emotion/styled'
import { Localized } from '@fluent/react'
import { RadioGroup } from '@eurofurence/reg-component-library'
import config from '~/config'
import TicketLevelCard from './level/card'
import TicketLevelAddon, { AugmentedAddon } from './level/addons/addon'
import FullWidthRegisterFunnelLayout from '~/components/funnels/funnels/register/layout/form/full-width'
import { useFunnelForm } from '~/hooks/funnels/form'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import { useAppSelector } from '~/hooks/redux'
import { getTicketType } from '~/state/selectors/register'
import { createLuxonFluentDateTime } from '~/util/fluent-values'
import TicketLevelFootnote from '~/components/funnels/funnels/register/steps/ticket/level/footnote'

const TicketLevelGrid = styled.section`
	display: grid;
	gap: 20px;
	margin-top: 2em;

	@media not all and (min-width: 950px) {
		grid: auto-flow auto / 1fr;
	}

	@media (min-width: 950px) {
		grid: auto-flow 1fr / repeat(3, 1fr);
	}
`

const ModifiersSection = styled.section`
	margin-top: 1em;
`

const AddonsSection = styled.section`
	margin-top: 4.5em;
`

const AddonsContainer = styled.section`
	margin-top: 3em;
`

const TicketLevel = (_: ReadonlyRouteComponentProps) => {
	const ticketType = useAppSelector(getTicketType())!
	const formContext = useFunnelForm('register-ticket-level')
	const { register, handleSubmit } = formContext

	return <FullWidthRegisterFunnelLayout onNext={handleSubmit} currentStep={1}>
		<form onSubmit={handleSubmit}>
			<section>
				<Localized id="register-ticket-level-title"><h3>Select your ticket</h3></Localized>
				<TicketLevelGrid>
					<RadioGroup name="level">
						{Object.entries(config.ticketLevels).map(([id, { prices }]) =>
							<Localized
								key={id}
								id={`register-ticket-level-card-${id}`}
								attrs={{ label: true, priceLabel: true }}
								vars={{
									type: ticketType.type,
									...ticketType.type !== 'day' ? {} : {
										day: createLuxonFluentDateTime(ticketType.day),
										dow: ticketType.day.weekday,
									},
								}}
							>
								<TicketLevelCard
									id={id}
									price={prices[ticketType.type]}
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
			</section>
			<ModifiersSection>
				<Localized id="register-ticket-level-modifiers-early-bird" attrs={{ label: true, description: true, price: true }}>
					<TicketLevelFootnote
						marker="*"
						label="Early Bird Discount"
						price="-15" ></TicketLevelFootnote>
				</Localized>
				<Localized id="register-ticket-level-modifiers-late-fee" attrs={{ label: true, description: true, price: true }}>
					<TicketLevelFootnote
						marker=""
						label="Late Fee"
						price="+15" ></TicketLevelFootnote>
				</Localized>
			</ModifiersSection>
			<AddonsSection>
				<Localized id="register-ticket-level-addons-title"><h3>Select add-ons</h3></Localized>
				<AddonsContainer>
					{Object.entries(config.addons)
						.filter(([, addon]) => !addon.hidden)
						.filter(([, addon]) => !(addon.unavailableFor?.type?.includes(ticketType.type) ?? false))
						.map(([id, addon]) =>
							// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
							<TicketLevelAddon key={id} addon={{ id, ...addon } as AugmentedAddon} formContext={formContext}/>,
						)}
				</AddonsContainer>
			</AddonsSection>
		</form>
	</FullWidthRegisterFunnelLayout>
}

export default TicketLevel
