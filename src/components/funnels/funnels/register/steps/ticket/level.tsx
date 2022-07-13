import styled from '@emotion/styled'
import { useMemo } from 'react'
import { Localized } from '@fluent/react'
import { Controller } from 'react-hook-form'
import { DateTime } from 'luxon'
import { RadioGroup, Select } from '@eurofurence/reg-component-library'
import { useSiteMetadata } from '~/hooks/queries/site-metadata'
import TicketLevelCard from './level/card'
import TicketLevelAddon from './level/addon'
import FullWidthRegisterFunnelLayout from '~/components/funnels/funnels/register/layout/form/full-width'
import { ChangeTicketLevel, SubmitTicketLevel } from '~/state/actions/register'
import { TicketLevel as TicketLevelModel } from '~/state/models/register'
import { useFunnelForm } from '~/hooks/funnels/form'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'

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
	margin-top: 4.5em;
`

const TicketLevel = (_: ReadonlyRouteComponentProps) => {
	const { register, control, handleSubmit } = useFunnelForm<TicketLevelModel>(ChangeTicketLevel, SubmitTicketLevel)
	const { ticketLevels, tshirtSizes, registrationExpirationDate } = useSiteMetadata()

	const { sizes, sizesByValue } = useMemo(() => {
		const sizes = tshirtSizes.map(size => ({ value: size, label: size }))

		return { sizes, sizesByValue: new Map(sizes.map(size => [size.value, size])) }
	}, [])

	const expirationDate = DateTime.fromISO(registrationExpirationDate)

	return <FullWidthRegisterFunnelLayout onNext={handleSubmit} currentStep={1}>
		<form onSubmit={handleSubmit}>
			<TicketLevelSection>
				<Localized id="register-ticket-level-title"><h3>Select your ticket</h3></Localized>
				<TicketLevelGrid>
					<RadioGroup name="level">
						{ticketLevels.map(({ id, price }) =>
							<Localized key={id} id={`register-ticket-level-card-${id}`} attrs={{ label: true, priceLabel: true }}>
								<TicketLevelCard id={id} price={price} expirationDate={expirationDate} label="Ticket level" priceLabel="A ticket" {...register('level')}>
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
					<Localized id="register-ticket-level-addons-item-stage-pass" attrs={{ label: true, description: true, price: true }}>
						<TicketLevelAddon label="Stage pass" description="A stage pass" price={5} {...register('addons.stagePass.selected')}/>
					</Localized>
					<Localized id="register-ticket-level-addons-item-tshirt" attrs={{ label: true, description: true, price: true }}>
						<TicketLevelAddon label="T-Shirt" description="A t-shirt" price={20} {...register('addons.tshirt.selected')}>
							<Controller name="addons.tshirt.size" control={control} render={({ field: { onChange, value, ref, ...field } }) =>
								<Localized id="register-ticket-level-addons-item-tshirt-option-size" attrs={{ label: true }}>
									<Select
										label="T-shirt size"
										isSearchable={false}
										options={sizes}
										onChange={size => size?.value}
										value={sizesByValue.get(value)}
										{...field}
									/>
								</Localized>
							}/>
						</TicketLevelAddon>
					</Localized>
				</AddonsContainer>
			</AddonsSection>
		</form>
	</FullWidthRegisterFunnelLayout>
}

export default TicketLevel
