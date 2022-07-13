import styled from '@emotion/styled'
import { Localized } from '@fluent/react'
import { RadioGroup, RadioCard } from '@eurofurence/reg-component-library'
import FullWidthRegisterFunnelLayout from '~/components/funnels/funnels/register/layout/form/full-width'
import { TicketType as TicketTypeModel } from '~/state/models/register'
import { ChangeTicketType, SubmitTicketType } from '~/state/actions/register'
import { useFunnelForm } from '~/hooks/funnels/form'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'

const TicketTypeGrid = styled.div`
	display: flex;
	gap: 20px;

	> * {
		flex: 1;
	}
`

const TicketType = (_: ReadonlyRouteComponentProps) => {
	const { register, handleSubmit } = useFunnelForm<{ type: TicketTypeModel['type'] }>(ChangeTicketType, SubmitTicketType)

	return <FullWidthRegisterFunnelLayout onNext={handleSubmit} currentStep={0}>
		<form onSubmit={handleSubmit}>
			<RadioGroup name="type">
				<TicketTypeGrid>
					<Localized id="register-ticket-type-day-label" attrs={{ label: true }}>
						<RadioCard label="Day ticket" value="day" height="346px" {...register('type')}/>
					</Localized>
					<Localized id="register-ticket-type-full-label" attrs={{ label: true }}>
						<RadioCard label="Full convention" value="full" height="346px" {...register('type')}/>
					</Localized>
				</TicketTypeGrid>
			</RadioGroup>
		</form>
	</FullWidthRegisterFunnelLayout>
}

export default TicketType
