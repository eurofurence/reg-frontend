import { Localized } from '@fluent/react'
import ReactMarkdown from 'react-markdown'
import SplashFunnelLayout from '~/components/funnels/layout/splash'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import { StaticImage } from 'gatsby-plugin-image'
import { navigate } from 'gatsby'
import { useAppSelector } from '~/hooks/redux'
import { getRegistrationId, getStatus } from '~/state/selectors/register'
import { Button } from '@eurofurence/reg-component-library'

const SelfCancel = (_: ReadonlyRouteComponentProps) => {
	const returnLink = `/register/summary`

	const status = useAppSelector(getStatus())!
	const registrationId = useAppSelector(getRegistrationId())!

	const doCancel = (id: number): void => {
		console.log(`WOULD NOW CANCEL ${id} FROM ${status}`)
		navigate(returnLink)
	}
	const abortCancel = (): void => {
		navigate(returnLink)
	}

	return <SplashFunnelLayout image={<StaticImage src="../../../../../images/con-cats/self-cancel.png" alt=""/>}>
		<Localized id="register-self-cancel-title"><h1>Self Cancellation!</h1></Localized>
		<Localized id="register-self-cancel-sure"><h2>Are you sure?</h2></Localized>
		<Localized id="register-self-cancel-content">
			<ReactMarkdown>
				If you click on yes, you will cancel your unpaid registration! Be sure you mean it!
				You will receive an email to confirm the cancellation. If you have cancelled by accident, you can
				reply to the email to ask for your registration to be reinstated, subject to availability.
			</ReactMarkdown>
		</Localized>
		<Localized id="register-self-cancel-yes"><Button onClick={() => doCancel(registrationId)}>Yes</Button></Localized>
		<Localized id="register-self-cancel-no"><Button onClick={() => abortCancel()}>No</Button></Localized>
	</SplashFunnelLayout>
}

export default SelfCancel
