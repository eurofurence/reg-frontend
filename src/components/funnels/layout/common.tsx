/*
 * A layout that's common to all funnel pages.
 * Features a header that can be passed as the `headerContent` prop and a footer showing navigation buttons,
 * of which the "back" button will be invisible if `isFirstPage` is true.
 */

import type { ReadonlyReactNode } from '~/util/readonly-types'
import Footer from './footer'

export interface CommonFunnelLayoutProps {
	readonly children: ReadonlyReactNode
	readonly header?: ReadonlyReactNode
	readonly isFirstPage?: boolean
	readonly onNext: () => void
}

const CommonFunnelLayout = ({ children, header: headerContent, isFirstPage = false, onNext }: CommonFunnelLayoutProps) => <>
	<header>
		{headerContent}
	</header>
	{children}
	<Footer canBack={!isFirstPage} onNext={onNext}/>
</>

export default CommonFunnelLayout
