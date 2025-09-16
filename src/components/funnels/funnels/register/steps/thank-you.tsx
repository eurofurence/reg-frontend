import { Localized } from "@fluent/react"
import { StaticImage } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"

import type { ReadonlyRouteComponentProps } from "~/util/readonly-types"

import SplashFunnelLayout from "~/components/funnels/layout/splash"

const ThankYou = (_: ReadonlyRouteComponentProps) => (
	<SplashFunnelLayout
		image={
			<StaticImage src="../../../../../images/con-cats/thank-you.png" alt="" />
		}
	>
		<Localized id="register-thank-you-title">
			<h1>Thank you for your registration</h1>
		</Localized>
		<Localized id="register-thank-you-subtitle">
			<h2>Next steps</h2>
		</Localized>
		<Localized id="register-thank-you-content">
			<ReactMarkdown>
				You&apos;ll receive a confirmation after we&apos;ve processed and
				approved your registration. We&apos;ll review your registration and send
				you a response within a week or two.
			</ReactMarkdown>
		</Localized>
	</SplashFunnelLayout>
)

export default ThankYou
