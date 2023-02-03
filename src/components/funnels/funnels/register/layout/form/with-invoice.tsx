/*
 * Layout for registration funnel pages that has a blue invoice on the right side.
 */

import { Localized } from '@fluent/react'
import WithInvoiceFunnelLayout from '~/components/funnels/layout/with-invoice'
import { useAppSelector } from '~/hooks/redux'
import { buildInvoice } from '~/state/models/invoice'
import { getInvoice } from '~/state/selectors/register'
import type { ReadonlyReactNode } from '~/util/readonly-types'
import { TOTAL_STEPS } from '../constants'
import RegisterHeader from '../header'

export interface WithInvoiceRegisterFunnelLayoutProps {
	readonly children: ReadonlyReactNode
	readonly currentStep: number
	readonly onNext: () => void
}

const WithInvoiceRegisterFunnelLayout = ({ children, currentStep, onNext }: WithInvoiceRegisterFunnelLayoutProps) => {
	const invoice = useAppSelector(getInvoice)

	return <Localized id="register-invoice-layout" attrs={{ invoiceTitle: true }}>
		<WithInvoiceFunnelLayout
			header={<RegisterHeader currentStep={currentStep}/>}
			isFirstPage={currentStep === 0}
			isLastPage={currentStep === TOTAL_STEPS - 1}
			onNext={onNext}
			invoiceTitle="Your registration"
			invoiceEditLink="/register/ticket/level"
			invoice={invoice ?? buildInvoice([])}
		>
			{children}
		</WithInvoiceFunnelLayout>
	</Localized>
}

export default WithInvoiceRegisterFunnelLayout
