import { Localized } from '@fluent/react'
import ReactMarkdown from 'react-markdown'
import SplashFunnelLayout from '~/components/funnels/layout/splash'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Failure = (_: ReadonlyRouteComponentProps) => (
  <SplashFunnelLayout
    image={
      <StaticImage
        src="../../../../images/con-cats/ticket-types/day.png"
        alt=""
      />
    }
  >
    <Localized id="payment-failure-title">
      <h1>That probably did not work</h1>
    </Localized>
    <Localized id="payment-failure-text">
      <p>You are seeing this page because the payment process failed.</p>
    </Localized>
    <Localized id="payment-failure-text2">
      <p>You should wait a bit until trying again.</p>
    </Localized>
    <Link to="../register">
      <Localized id="payment-failure-button-label">
        Back to registration
      </Localized>
    </Link>
  </SplashFunnelLayout>
)

export default Failure
