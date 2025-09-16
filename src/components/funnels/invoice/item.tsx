/*
 * An item on the invoice.
 * The `extra` property can be used to add additional information below the item's name.
 */

import styled from '@emotion/styled'
import { FluentNumber } from '@fluent/bundle'
import { Localized } from '@fluent/react'

const Container = styled.li`
	display: grid;
	grid-template: "label price" auto
	               "extra extra"  auto / auto auto;
	align-items: center;

	:not(:first-child) {
		margin-top: 1.5em;
	}

	:not(:last-child) {
		margin-bottom: 1.5em;
	}
`

const Label = styled.div`
	grid-area: label;
`

const Price = styled.div`
	grid-area: price;
	text-align: right;
`

const Extra = styled.div`
	grid-area: extra;

	color: var(--color-brand-2-100);

	font-size: 1.4rem;
`

export interface InvoiceItemProps {
	readonly amount: number
	readonly name: string
	readonly price: number
	readonly extra?: string
}

const InvoiceItem = ({ amount, name, price, extra }: InvoiceItemProps) => <Container>
	<Localized id="invoice-item-label" vars={{ amount, name }}><Label>{amount} x {name}</Label></Localized>
	<Localized id="price" vars={{ value: new FluentNumber(price, { style: 'currency', currency: 'EUR' }) }}><Price>{price} €</Price></Localized>
	{extra === undefined ? undefined : <Extra>{extra}</Extra>}
</Container>

export default InvoiceItem
