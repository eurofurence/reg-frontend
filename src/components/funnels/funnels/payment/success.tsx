import { Localized } from '@fluent/react'
import ReactMarkdown from 'react-markdown'
import SplashFunnelLayout from '~/components/funnels/layout/splash'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Success = (_: ReadonlyRouteComponentProps) => (
  <SplashFunnelLayout
    image={
      <StaticImage src="../../../../images/con-cats/thank-you.png" alt="" />
    }
  >
    <Localized id="payment-success-title">
      <h1>That most likely worked</h1>
    </Localized>
    <Localized id="payment-success-text">
      <p>
        We'll know for sure when the payment clears. It can take a few seconds,
        or a few days. We'll send you a confirmation email and your registration
        will show as paid.
      </p>
    </Localized>
    <Localized id="payment-success-text2">
      <p>
        If your registration still shows as unpaid in 3 days and you do not see
        a payment in your bank account, you can try again.
      </p>
    </Localized>
    <Localized id="payment-success-warning">
      <p>Until then, please do NOT pay again!</p>
    </Localized>
    <Link to="../register">
      <Localized id="payment-success-button-label">
        Back to my registration
      </Localized>
    </Link>
  </SplashFunnelLayout>
)

export default Success
