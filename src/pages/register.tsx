import { useEffect } from 'react'
import NotOpenYet from '~/components/funnels/funnels/register/not-open-yet'
import Layout from '~/components/layout'
import SEO from '~/components/seo'
import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { RegisterRouter } from '~/navigation/router'
import { CheckCountdown } from '~/state/actions/register'
import { isRegistrationOpen } from '~/state/selectors/register'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'

export const Head = () => <SEO title="Register" />

const Content = () => {
  const isOpen = useAppSelector(isRegistrationOpen())
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(CheckCountdown.create(undefined))
  }, [])

  switch (isOpen) {
    case true:
      return <RegisterRouter />
    case false:
      return <NotOpenYet />
    case null:
      return <div>Loading...</div>
  }
}

const RegisterPage = (_: ReadonlyRouteComponentProps) => (
  <Layout>
    <Content />
  </Layout>
)

export default RegisterPage
