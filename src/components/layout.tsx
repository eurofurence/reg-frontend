import { useEffect } from 'react'
import styled from '@emotion/styled'
import Header from './header'
import Footer from './footer'
import '@eurofurence/reg-component-library/dist/index.css'
import type { ReadonlyDateTime, ReadonlyReactNode } from '~/util/readonly-types'
import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { getUserInfo } from '~/state/selectors/auth'
import { InitiateLogin, LookupUserInfo } from '~/state/actions/auth'
import { Button, Splash } from '@eurofurence/reg-component-library'
import { StaticImage } from 'gatsby-plugin-image'
import { Localized } from '@fluent/react'
import ErrorGuard from './error-guard'

export interface LayoutProps {
  readonly deadline?: ReadonlyDateTime
  readonly children: ReadonlyReactNode
}

const RetryButton = styled(Button)`
	margin-top: 2em;
`

const LoginGuard = ({ children }: { readonly children: ReadonlyReactNode }) => {
  const userInfo = useAppSelector(getUserInfo())
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(LookupUserInfo.create(undefined))
  }, [])

  return (
    <>
      {userInfo === undefined ? (
        'Loading...'
      ) : userInfo.emailVerified ? (
        children
      ) : (
        <Splash
          image={
            <StaticImage src="../images/con-cats/ticket-types/day.png" alt="" />
          }
        >
          <Localized id="auth-unverified-title">
            <h1>You have not verified your email address.</h1>
          </Localized>
          <Localized id="auth-unverified-message">
            <p>
              Please click the verification link in the email you received
              before registering!
            </p>
          </Localized>
          <Localized id="auth-unverified-retry">
            <RetryButton
              onClick={() => dispatch(InitiateLogin.create(undefined))}
            >
              Retry
            </RetryButton>
          </Localized>
        </Splash>
      )}
    </>
  )
}

const Layout = ({ deadline, children }: LayoutProps) => (
  <>
    <Header deadline={deadline} />
    <ErrorGuard>
      <LoginGuard>{children}</LoginGuard>
    </ErrorGuard>
    <Footer />
  </>
)

export default Layout
