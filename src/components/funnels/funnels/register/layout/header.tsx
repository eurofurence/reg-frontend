/*
 * Funnel layout header for registration pages.
 *
 * It displays a progress bar and shows a welcome text on the first page of the funnel.
 */

import { WizardProgressBar } from "@eurofurence/reg-component-library"
import { Localized, useLocalization } from "@fluent/react"
import { range } from "ramda"
import ReactMarkdown from "react-markdown"
import { isEditMode } from "~/state/selectors/register"

import { useAppSelector } from "~/hooks/redux"
import { TOTAL_STEPS } from "./constants"

interface RegisterHeaderProps {
	readonly currentStep: number
}

const RegisterHeader = ({ currentStep }: RegisterHeaderProps) => {
	const { l10n } = useLocalization()
	const isEdit = useAppSelector(isEditMode())

	return isEdit ? null : (
		<>
			{currentStep !== 0 ? null : (
				<>
					<Localized id="register-header-title">
						<h1>Welcome to Eurofurence 2022!</h1>
					</Localized>
					<Localized id="register-header-description">
						<ReactMarkdown>
							We&apos;re very excited that you&apos;ve decided to join us for
							this confurence. Get ready for a fun couple of days with
							likeminded people and enjoy all the activities and events that
							we&apos;ve got lined up for you this year.
						</ReactMarkdown>
					</Localized>
				</>
			)}
			<WizardProgressBar
				steps={range(1, TOTAL_STEPS + 1).map((step) =>
					l10n.getString("register-step-counter", { step }, `Step ${step}`),
				)}
				currentStep={currentStep}
			/>
		</>
	)
}

export default RegisterHeader
