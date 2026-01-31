import Layout from '~/components/layout'
import SEO from '~/components/seo'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import Success from '~/components/funnels/funnels/payment/success'
import { useAppDispatch } from '~/hooks/redux'
import { useEffect } from 'react'
import { CheckCountdown } from '~/state/actions/register'

export const Head = () => <SEO title="Payment Success" />

const Content = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(CheckCountdown.create(undefined))
  }, [])

  return <Success />
}

const PaymentSuccessPage = (_: ReadonlyRouteComponentProps) => (
  <Layout>
    <Content />
  </Layout>
)

export default PaymentSuccessPage
