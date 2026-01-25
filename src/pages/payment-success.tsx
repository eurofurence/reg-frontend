import Layout from '~/components/layout'
import SEO from '~/components/seo'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import Success from '~/components/funnels/funnels/payment/success'

export const Head = () => <SEO title="Payment Success" />

const PaymentSuccessPage = (_: ReadonlyRouteComponentProps) => (
  <Layout>
    <Success />
  </Layout>
)

export default PaymentSuccessPage
