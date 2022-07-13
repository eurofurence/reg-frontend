/*
 * Layout for registration funnel pages that spans the full width of the page.
 */

import FullWidthFunnelLayout from '~/components/funnels/layout/full-width'
import type { ReadonlyReactNode } from '~/util/readonly-types'
import RegisterHeader from '../header'

export interface FullWidthRegisterFunnelLayoutProps {
	readonly children: ReadonlyReactNode
	readonly currentStep: number
	readonly onNext: () => void
}

const FullWidthRegisterFunnelLayout = ({ children, currentStep, onNext }: FullWidthRegisterFunnelLayoutProps) =>
	<FullWidthFunnelLayout
		header={<RegisterHeader currentStep={currentStep}/>}
		isFirstPage={currentStep === 0}
		onNext={onNext}
	>
		{children}
	</FullWidthFunnelLayout>

export default FullWidthRegisterFunnelLayout
