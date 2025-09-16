import styled from '@emotion/styled'
import { FluentNumber } from '@fluent/bundle'
import { Localized } from '@fluent/react'

const Container = styled.section`
	color: var(--color-brand-2-900);

	font-family: Roboto;
	font-weight: 700;
	font-size: 2.4rem;

	label[data-checked] & {
		color: var(--color-semantic-info);
	}
`

interface PriceProps {
	readonly price: number
}

const Price = ({ price }: PriceProps) => <Localized id="price" vars={{ value: new FluentNumber(price, { style: 'currency', currency: 'EUR' }) }}>
	<Container>{price} €</Container>
</Localized>

export default Price
