import FullWidthFunnelLayout from '~/components/funnels/layout/full-width'
import type { ReadonlyReactNode } from '~/util/readonly-types'
import HotelBookingHeader from '../header'

export interface FullWidthHotelBookingFunnelLayoutProps {
	readonly children: ReadonlyReactNode
	readonly isFirstPage?: boolean
	readonly onNext: () => void
}

const FullWidthHotelBookingFunnelLayout = ({ children, isFirstPage, onNext }: FullWidthHotelBookingFunnelLayoutProps) =>
	<FullWidthFunnelLayout
		header={<HotelBookingHeader isFirstPage={isFirstPage}/>}
		isFirstPage={isFirstPage}
		onNext={onNext}
	>
		{children}
	</FullWidthFunnelLayout>

export default FullWidthHotelBookingFunnelLayout
