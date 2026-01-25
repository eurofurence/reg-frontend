import Layout from '~/components/layout'
import SEO from '~/components/seo'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import Failure from '~/components/funnels/funnels/payment/failure'

export const Head = () => <SEO title="Payment Failure" />

const PaymentFailurePage = (_: ReadonlyRouteComponentProps) => (
  <Layout>
    <Failure />
  </Layout>
)

export default PaymentFailurePage
