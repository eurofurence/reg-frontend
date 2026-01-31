import { RegisterRouter } from '~/navigation/router'
import Layout from '~/components/layout'
import SEO from '~/components/seo'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import NotOpenYet from '~/components/funnels/funnels/register/not-open-yet'
import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { isRegistrationOpen } from '~/state/selectors/register'
import { useEffect } from 'react'
import { CheckCountdown } from '~/state/actions/register'

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
