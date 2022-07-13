import styled from '@emotion/styled'
import { forwardRef, ForwardedRef } from 'react'
import { Localized } from '@fluent/react'
import { RadioCard, RadioCardProps } from '@eurofurence/reg-component-library'
import { DateTime } from 'luxon'
import ReactMarkdown from 'react-markdown'
import Price from '~/components/funnels/price'
import type { DeepReadonly } from 'ts-essentials'

export interface TicketLevelCardProps extends Omit<RadioCardProps, 'value'> {
	readonly id: string
	readonly price: number
	readonly priceLabel: string
	readonly expirationDate: DeepReadonly<DateTime>
	readonly children: string
}

const Footer = styled.footer`
	display: flex;
	align-items: center;
`

const PriceLabelContainer = styled.section`
	flex: 1;
`

const PriceLabel = styled.p`
	margin-bottom: 0px !important;
`

const ExpirationNotice = styled.aside`
	font-size: 1.2rem;
	color: var(--color-grays-400);
`

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const TicketLevelCard = forwardRef(({ id, price, priceLabel, expirationDate, children, ...rest }: TicketLevelCardProps, ref: ForwardedRef<HTMLInputElement>) =>
	<RadioCard value={id} ref={ref} {...rest}>
		<div><ReactMarkdown>{children}</ReactMarkdown></div>
		<Footer>
			<PriceLabelContainer>
				<PriceLabel>{priceLabel}</PriceLabel>
				<Localized id="register-ticket-level-expiration-notice" vars={{ expirationDate: expirationDate.toJSDate() }}>
					<ExpirationNotice>Register before {expirationDate.toString()}</ExpirationNotice>
				</Localized>
			</PriceLabelContainer>
			<Price price={price}/>
		</Footer>
	</RadioCard>,
)

export default TicketLevelCard
