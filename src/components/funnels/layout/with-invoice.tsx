/*
 * Layout for funnel pages that has a blue invoice on the right side.
 */

import styled from '@emotion/styled'
import { MediaQueries } from '@eurofurence/reg-component-library'
import InvoiceComponent from '~/components/funnels/invoice/invoice'
import { Invoice } from '~/state/models/invoice'
import type { ReadonlyReactNode } from '~/util/readonly-types'
import StepFunnelLayout from './step'

export interface WithInvoiceFunnelLayoutProps {
	readonly header?: ReadonlyReactNode
	readonly children: ReadonlyReactNode
	readonly isFirstPage?: boolean
	readonly isLastPage?: boolean
	readonly invoiceTitle: string
	readonly invoiceEditLink?: string
	readonly invoice: Invoice
	readonly unprocessedPayments?: boolean
	readonly onNext: () => void
	readonly onPay?: () => void
}

const Grid = styled.div`
	display: grid;

	@media ${MediaQueries.phone}, ${MediaQueries.tablet} {
		grid-template-columns: 1fr;
		gap: 5em;
	}

	@media ${MediaQueries.laptop}, ${MediaQueries.desktop} {
		grid-template-columns: auto 254px;
		gap: 111px;
	}
`

const WithInvoiceFunnelLayout = ({ children, onNext, invoiceTitle, invoiceEditLink, invoice, onPay, unprocessedPayments, isLastPage, ...passthroughProps }: WithInvoiceFunnelLayoutProps) =>
	<StepFunnelLayout {...passthroughProps} onNext={onNext} isLastPage={isLastPage}>
		<Grid>
			<div>
				{children}
			</div>
			<InvoiceComponent title={invoiceTitle} editLink={invoiceEditLink} invoice={invoice} showOnMobile={isLastPage} onPay={onPay} unprocessedPayments={unprocessedPayments}/>
		</Grid>
	</StepFunnelLayout>

export default WithInvoiceFunnelLayout
