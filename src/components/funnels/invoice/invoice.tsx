/*
 * Implements the blue invoice on the right side of most funnel pages.
 * Automatically calculates total price figure.
 */

import styled from '@emotion/styled'
import { Card } from '@eurofurence/reg-component-library'
import InvoiceItemComponent from './item'
import Footer from './footer'
import { sum } from 'ramda'

const InvoiceCard = styled(Card)`
	grid-column: 10 / span 3;
	align-self: start;
`

export interface InvoiceItem {
	readonly name: string
	readonly amount: number
	readonly unitPrice: number
	readonly extra?: string
}

export interface InvoiceProps {
	readonly title: string
	readonly items: readonly InvoiceItem[]
}

const Invoice = ({ title, items }: InvoiceProps) =>
	<InvoiceCard inverted={true}>
		<header>
			<h1>{title}</h1>
		</header>
		<div>
			<ul>
				{items.map(({ amount, unitPrice, name, extra }) =>
					<InvoiceItemComponent key={`${name}__${String(extra)}`} label={`${amount} x ${name}`} price={amount * unitPrice} extra={extra}/>,
				)}
			</ul>
		</div>
		<Footer totalPrice={sum(items.map(({ amount, unitPrice }) => amount * unitPrice))}/>
	</InvoiceCard>

export default Invoice
