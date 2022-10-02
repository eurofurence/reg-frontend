/*
 * Layout for registration funnel pages that spans the full width of the page.
 */

import FullWidthFunnelLayout from '~/components/funnels/layout/full-width'
import type { ReadonlyReactNode } from '~/util/readonly-types'
import { TOTAL_STEPS } from '../constants'
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
		isLastPage={currentStep === TOTAL_STEPS - 1}
		onNext={onNext}
	>
		{children}
	</FullWidthFunnelLayout>

export default FullWidthRegisterFunnelLayout
