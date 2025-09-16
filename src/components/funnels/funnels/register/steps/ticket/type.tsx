import styled from "@emotion/styled"
import { RadioCard, RadioGroup } from "@eurofurence/reg-component-library"
import { Localized } from "@fluent/react"
import { StaticImage } from "gatsby-plugin-image"

import type { ReadonlyRouteComponentProps } from "~/util/readonly-types"

import { useFunnelForm } from "~/hooks/funnels/form"
import FullWidthRegisterFunnelLayout from "~/components/funnels/funnels/register/layout/form/full-width"

const TicketTypeGrid = styled.div`
	display: grid;
	gap: 20px;

	@media not all and (min-width: 600px) {
		grid: auto-flow auto / 1fr;
	}

	@media (min-width: 600px) {
		grid: auto-flow 1fr / 1fr 1fr;
	}
`

const ConCat = styled.figure`
	position: relative;
`

const TicketType = (_: ReadonlyRouteComponentProps) => {
	const { register, handleSubmit } = useFunnelForm("register-ticket-type")

	return (
		<FullWidthRegisterFunnelLayout onNext={handleSubmit} currentStep={0}>
			<Localized id="register-ticket-type-title">
				<h3>Select your ticket</h3>
			</Localized>

			<form onSubmit={handleSubmit}>
				<RadioGroup name="type">
					<TicketTypeGrid>
						<Localized id="register-ticket-type-full" attrs={{ label: true }}>
							<RadioCard
								label="Full convention"
								value="full"
								{...register("type", { required: true })}
							>
								<ConCat>
									<StaticImage
										src="../../../../../../images/con-cats/ticket-types/full.png"
										alt=""
									/>
								</ConCat>
							</RadioCard>
						</Localized>
						<Localized id="register-ticket-type-day" attrs={{ label: true }}>
							<RadioCard
								label="Day ticket"
								value="day"
								{...register("type", { required: true })}
							>
								<ConCat>
									<StaticImage
										src="../../../../../../images/con-cats/ticket-types/day.png"
										alt=""
									/>
								</ConCat>
							</RadioCard>
						</Localized>
					</TicketTypeGrid>
				</RadioGroup>
			</form>
		</FullWidthRegisterFunnelLayout>
	)
}

export default TicketType
