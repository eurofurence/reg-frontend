import { Splash } from "@eurofurence/reg-component-library"
import { ReadonlyReactElement, ReadonlyReactNode } from "~/util/readonly-types"

export interface SplashFunnelLayoutProps {
	readonly image: ReadonlyReactElement
	readonly children: ReadonlyReactNode
}

const SplashFunnelLayout = ({ image, children }: SplashFunnelLayoutProps) => (
	<Splash image={image}>{children}</Splash>
)

export default SplashFunnelLayout
