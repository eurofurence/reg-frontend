import { Localized } from '@fluent/react'
import type { ReadonlyReactNode } from '~/util/readonly-types'
import WithInvoiceFunnelLayout from '~/components/funnels/layout/with-invoice'
import HotelBookingHeader from '../header'
import { buildInvoice } from '~/state/models/invoice'
import { useAppSelector } from '~/hooks/redux'
import { getInvoice } from '~/state/selectors/hotel-booking'

export interface WithInvoiceHotelBookingFunnelLayoutProps {
	readonly children: ReadonlyReactNode
	readonly isFirstPage?: boolean
	readonly onNext: () => void
}

const WithInvoiceHotelBookingFunnelLayout = ({ children, isFirstPage, onNext }: WithInvoiceHotelBookingFunnelLayoutProps) => {
	const invoice = useAppSelector(getInvoice)

	return <Localized id="hotel-booking-invoice-layout" attrs={{ invoiceTitle: true }}>
		<WithInvoiceFunnelLayout
			header={<HotelBookingHeader isFirstPage={isFirstPage}/>}
			isFirstPage={isFirstPage}
			onNext={onNext}
			invoiceTitle="Your hotel room"
			invoice={invoice ?? buildInvoice([])}
		>
			{children}
		</WithInvoiceFunnelLayout>
	</Localized>
}

export default WithInvoiceHotelBookingFunnelLayout
