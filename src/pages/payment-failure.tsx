import Layout from '~/components/layout'
import SEO from '~/components/seo'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import Failure from '~/components/funnels/funnels/payment/failure'
import { useAppDispatch } from '~/hooks/redux'
import { useEffect } from 'react'
import { CheckCountdown } from '~/state/actions/register'

export const Head = () => <SEO title="Payment Failure" />

const Content = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(CheckCountdown.create(undefined))
  }, [])

  return <Failure />
}

const PaymentFailurePage = (_: ReadonlyRouteComponentProps) => (
  <Layout>
    <Content />
  </Layout>
)

export default PaymentFailurePage
