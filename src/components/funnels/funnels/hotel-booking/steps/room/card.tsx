import styled from '@emotion/styled'
import { forwardRef, ForwardedRef } from 'react'
import { Localized } from '@fluent/react'
import { RadioCard, RadioCardProps } from '@eurofurence/reg-component-library'
import Price from '~/components/funnels/price'
import ReactMarkdown from 'react-markdown'

export interface RoomCardProps extends Omit<RadioCardProps, 'value'> {
	readonly id: string
	readonly price: number
	readonly children: string
}

const Description = styled.div`
	grid-column: 1 / 9;
	grid-row: 2;
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

const BreakfastAndTaxesNotice = styled.aside`
	font-size: 1.2rem;
	color: var(--color-grays-400);
`

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const RoomCard = forwardRef(({ id, price, children, ...rest }: RoomCardProps, ref: ForwardedRef<HTMLInputElement>) =>
	<RadioCard layout="side-by-side" value={id} ref={ref} {...rest}>
		<Description><ReactMarkdown>{children}</ReactMarkdown></Description>
		<Footer>
			<PriceLabelContainer>
				<Localized id="hotel-booking-room-card-price-scope">
					<PriceLabel>Price per room per night</PriceLabel>
				</Localized>
				<Localized id="hotel-booking-room-card-breakfast-and-taxes-notice">
					<BreakfastAndTaxesNotice>Breakfast and taxes included</BreakfastAndTaxesNotice>
				</Localized>
			</PriceLabelContainer>
			<Price price={price}/>
		</Footer>
	</RadioCard>,
)

export default RoomCard
