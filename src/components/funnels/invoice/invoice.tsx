/*
 * Implements the blue invoice on the right side of most funnel pages.
 * Automatically calculates total price figure.
 */

import styled from '@emotion/styled'
import { Button, Card, MediaQueries } from '@eurofurence/reg-component-library'
import InvoiceItem from './item'
import InvoiceTotalItem from './total-item'
import { Localized } from '@fluent/react'
import { Invoice as InvoiceModel } from '~/state/models/invoice'
import { Link } from 'gatsby'

const InvoiceCard = styled(Card)<{ readonly showOnMobile?: boolean }>`
	@media ${MediaQueries.laptop}, ${MediaQueries.desktop} {
		align-self: start;
	}

	@media ${MediaQueries.phone}, ${MediaQueries.tablet} {
		display: ${({ showOnMobile = false }) => showOnMobile ? 'unset' : 'none'};
	}
`

const EditLink = styled.p`
	color: var(--color-brand-2-100);
	font-size: 1.4rem;

	:not(:first-child) {
		margin-top: 0em;
	}
`

const PayButton = styled(Button)`
	margin-top: 1.5em;
	width: 100%;
`

const UnprocessedPayments = styled.p`
	text-align: center;
`

export interface InvoiceProps {
	readonly title: string
	readonly invoice: InvoiceModel
	readonly showOnMobile?: boolean
	readonly editLink?: string
	readonly onPay?: () => void
	readonly unprocessedPayments?: boolean
}

// eslint-disable-next-line complexity
const Invoice = ({ title, invoice, showOnMobile, editLink, onPay, unprocessedPayments = false }: InvoiceProps) =>
	<InvoiceCard inverted={true} showOnMobile={showOnMobile}>
		<header>
			<h1>{title}</h1>
			{editLink === undefined ? undefined : <EditLink>
				<Localized id="invoice-edit-selection">
					<Link to={editLink}>Edit selection</Link>
				</Localized>
			</EditLink>}
		</header>
		<section>
			<ul>
				{invoice.items.map(({ id, options, amount, totalPrice }) =>
					<Localized key={id} id={`invoice-item-definition-${id}`} attrs={{ name: true, extra: true }} vars={options}>
						<InvoiceItem amount={amount} name={id} price={totalPrice}/>
					</Localized>,
				)}
			</ul>
		</section>
		<section>
			<ul>
				<Localized id="invoice-total" attrs={{ name: true, extra: true }}>
					<InvoiceTotalItem type="price" name="Total" value={invoice.totalPrice}/>
				</Localized>
				{invoice.paid === undefined || invoice.paid === 0 || invoice.due === undefined || invoice.due === 0 ? undefined : <Localized id="invoice-paid" attrs={{ name: true, extra: true }}>
					<InvoiceTotalItem type="due" name="Paid" value={invoice.paid}/>
				</Localized>}
				{invoice.due === undefined || invoice.due === 0 ? undefined : <Localized id="invoice-due" attrs={{ name: true, extra: true }}>
					<InvoiceTotalItem type="due" name="Due" warn={true} value={invoice.due}/>
				</Localized>}
			</ul>
			{invoice.due === undefined || invoice.due === 0 ? undefined : unprocessedPayments
				? <Localized id="invoice-unprocessed-payments">
					<UnprocessedPayments>Your payment is being processed.</UnprocessedPayments>
				</Localized>
				: <Localized id="invoice-pay-button-credit-card">
					<PayButton variant="inverted-card" onClick={onPay}>Pay with CC</PayButton>
				</Localized>}
		</section>
	</InvoiceCard>

export default Invoice
