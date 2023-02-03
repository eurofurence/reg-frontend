/*
 * Implements the blue invoice on the right side of most funnel pages.
 * Automatically calculates total price figure.
 */

import styled from '@emotion/styled'
import { Card } from '@eurofurence/reg-component-library'
import InvoiceItemComponent from './item'
import Footer from './footer'
import { Localized } from '@fluent/react'
import { Invoice as InvoiceModel } from '~/state/models/invoice'
import { Link } from 'gatsby'

const InvoiceCard = styled(Card)`
	grid-column: 10 / span 3;
	align-self: start;
`

const EditLink = styled(Link)`
	color: var(--color-brand-2-100);
	font-size: 1.4rem;
`

export interface InvoiceProps {
	readonly title: string
	readonly invoice: InvoiceModel
	readonly editLink?: string
}

const Invoice = ({ title, invoice, editLink }: InvoiceProps) =>
	<InvoiceCard inverted={true}>
		<header>
			<h1>{title}</h1>
			{editLink === undefined ? undefined : <Localized id="invoice-edit-selection">
				<EditLink to={editLink}>Edit selection</EditLink>
			</Localized>}
		</header>
		<div>
			<ul>
				{invoice.items.map(({ id, options, amount, totalPrice }) =>
					<Localized key={id} id={`invoice-item-definition-${id}`} attrs={{ name: true, extra: true }} vars={options}>
						<InvoiceItemComponent amount={amount} name={id} price={totalPrice}/>
					</Localized>,
				)}
			</ul>
		</div>
		<Footer totalPrice={invoice.totalPrice}/>
	</InvoiceCard>

export default Invoice
