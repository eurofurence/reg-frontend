/*
 * Layout for funnel pages that has a blue invoice on the right side.
 */

import styled from "@emotion/styled"
import { MediaQueries } from "@eurofurence/reg-component-library"
import { Invoice } from "~/state/models/invoice"

import type { ReadonlyReactNode } from "~/util/readonly-types"

import InvoiceComponent from "~/components/funnels/invoice/invoice"
import StepFunnelLayout from "./step"

export interface WithInvoiceFunnelLayoutProps {
	readonly header?: ReadonlyReactNode
	readonly children: ReadonlyReactNode
	readonly isFirstPage?: boolean
	readonly isLastPage?: boolean
	readonly hideInvoice?: boolean
	readonly invoiceTitle: string
	readonly invoiceEditLink?: string
	readonly invoice: Invoice
	readonly unprocessedPayments?: boolean
	readonly onNext: () => void
	readonly onPay?: () => void
	readonly onSepa?: () => void
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

const WithInvoiceFunnelLayout = ({
	children,
	isLastPage,
	hideInvoice = false,
	invoiceTitle,
	invoiceEditLink,
	invoice,
	unprocessedPayments,
	onNext,
	onPay,
	onSepa,
	...passthroughProps
}: WithInvoiceFunnelLayoutProps) => (
	<StepFunnelLayout
		{...passthroughProps}
		onNext={onNext}
		isLastPage={isLastPage}
	>
		<Grid>
			<div>{children}</div>
			{hideInvoice ? undefined : (
				<InvoiceComponent
					title={invoiceTitle}
					editLink={invoiceEditLink}
					invoice={invoice}
					showOnMobile={isLastPage}
					onPay={onPay}
					onSepa={onSepa}
					unprocessedPayments={unprocessedPayments}
				/>
			)}
		</Grid>
	</StepFunnelLayout>
)

export default WithInvoiceFunnelLayout
