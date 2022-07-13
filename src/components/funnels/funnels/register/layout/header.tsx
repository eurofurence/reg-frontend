/*
 * Funnel layout header for registration pages.
 *
 * It displays a progress bar and shows a welcome text on the first page of the funnel.
 */

import { WizardProgressBar } from '@eurofurence/reg-component-library'
import { Localized, useLocalization } from '@fluent/react'
import { range } from 'ramda'

interface RegisterHeaderProps {
	readonly currentStep: number
}

const TOTAL_STEPS = 6

const RegisterHeader = ({ currentStep }: RegisterHeaderProps) => {
	const { l10n } = useLocalization()

	return <>
		{currentStep !== 0 ? null : <>
			<Localized id="register-header-title"><h1>Welcome to Eurofurence 2022!</h1></Localized>
			<Localized id="register-header-description">
				<p>
					We&apos;re very excited that you&apos;ve decided to join us for this confurence.
					Get ready for a fun couple of days with likeminded people and enjoy all the activities and events that we&apos;ve got lined up for you this year.
				</p>
			</Localized>
		</>}
		<WizardProgressBar steps={range(1, TOTAL_STEPS).map(step => l10n.getString('register-step-counter', { step }, `Step ${step}`))} currentStep={currentStep}/>
	</>
}

export default RegisterHeader
