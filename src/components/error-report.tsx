import { useState } from "react"
import styled from "@emotion/styled"
import { Button, Splash, TextArea } from "@eurofurence/reg-component-library"
import { Localized } from "@fluent/react"
import { StaticImage } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"
import {
	AppError,
	ErrorReport as ErrorReportModel,
	FrontendAppError,
} from "~/state/models/errors"

const BackButton = styled(Button)`
	margin-top: 2em;
`

const DetailsContainer = styled.section`
	font-size: 1.2rem;
`

export interface ErrorReportProps {
	readonly report: ErrorReportModel
	readonly onBack: () => void
}

const Details = ({ details }: { readonly details: string }) => {
	const [detailsOpen, setDetailsOpen] = useState(false)

	return (
		<DetailsContainer>
			<Localized id="funnel-error-report-details">
				<a onClick={() => setDetailsOpen(!detailsOpen)}>Show details</a>
			</Localized>
			{!detailsOpen ? undefined : (
				<TextArea name="details" placeholder="" readOnly value={details} />
			)}
		</DetailsContainer>
	)
}

const ErrorReport = ({
	report: { operation, error },
	onBack,
}: ErrorReportProps) => {
	const { category, code, detailedMessage } =
		error instanceof AppError
			? (error as AppError)
			: error instanceof Error
				? new FrontendAppError("unknown", error.message)
				: new FrontendAppError("unknown", String(error))

	return (
		<Splash
			image={
				<StaticImage src="../images/con-cats/ticket-types/day.png" alt="" />
			}
		>
			<Localized id="funnel-error-report-title">
				<h1>Oh no...</h1>
			</Localized>
			<Localized id="funnel-error-report-operation" vars={{ operation }}>
				<h2>We encountered an error trying to handle your request.</h2>
			</Localized>
			<Localized id="funnel-error-report-message" vars={{ category, code }}>
				<ReactMarkdown>
					An error occurred when we tried to handle your request. Please try
					again later. If this problem persists, try clearing your
					browser&apos;s cache and refreshing the page. If that doesn&apos;t
					resolve the problem, contact support.
				</ReactMarkdown>
			</Localized>
			<Details details={detailedMessage} />
			<Localized id="funnel-error-report-back">
				<BackButton onClick={onBack}>Go back</BackButton>
			</Localized>
		</Splash>
	)
}

export default ErrorReport
