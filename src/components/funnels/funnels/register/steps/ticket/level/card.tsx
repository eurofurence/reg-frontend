import styled from '@emotion/styled'
import { forwardRef, ForwardedRef } from 'react'
import { RadioCard, RadioCardProps } from '@eurofurence/reg-component-library'
import ReactMarkdown from 'react-markdown'
import Price from '~/components/funnels/price'
import listItemCheckmark from '~/images/list-item-checkmark.svg'
import listItemCheckmarkHighlighted from '~/images/list-item-checkmark-highlighted.svg'

export interface TicketLevelCardProps extends Omit<RadioCardProps, 'value'> {
	readonly id: string
	readonly price: number
	readonly priceLabel: string
	readonly children: string
}

const Description = styled.div`
	ul {
		margin-left: 1.5em;
	}

	li {
		list-style-image: url("${listItemCheckmark}");

		:not(:first-child) {
			margin-top: 1em;
		}

		:not(:last-child) {
			margin-bottom: 1em;
		}
	}

	label[data-checked] & li {
		list-style-image: url("${listItemCheckmarkHighlighted}");
	}
`

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

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const TicketLevelCard = forwardRef(({ id, price, priceLabel, children, ...rest }: TicketLevelCardProps, ref: ForwardedRef<HTMLInputElement>) =>
	<RadioCard value={id} ref={ref} aria-describedby={`ticket-level-${id}-description`} aria-details={`ticket-level-${id}-details`} {...rest}>
		<Description id={`ticket-level-${id}-details`}>
			<ReactMarkdown>{children}</ReactMarkdown>
		</Description>
		<Footer id={`ticket-level-${id}-description`}>
			<PriceLabelContainer>
				<PriceLabel>{priceLabel}</PriceLabel>
			</PriceLabelContainer>
			<Price price={price}/>
		</Footer>
	</RadioCard>,
)

export default TicketLevelCard
