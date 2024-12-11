import { Localized, useLocalization } from '@fluent/react'
import WithInvoiceRegisterFunnelLayout from '~/components/funnels/funnels/register/layout/form/with-invoice'
import styled from '@emotion/styled'
import { useAppSelector } from '~/hooks/redux'
import type { RegistrationStatus } from '~/state/models/register'
import { getContactInfo, getOptionalInfo, getPersonalInfo, getRegistrationId, getStatus, isEditMode } from '~/state/selectors/register'
import langmap from 'langmap'
import { Link } from 'gatsby'
import { css } from '@emotion/react'
import { useCurrentLocale } from '~/localization'
import { useFunnelForm } from '~/hooks/funnels/form'
import { Checkbox, ErrorMessage, Form } from '@eurofurence/reg-component-library'
import config from '~/config'
import { getRoomGroup } from '~/state/selectors/room-sharing'
import { GroupDto } from '~/apis/roomsrv'

interface PropertyDefinition {
	readonly id: string
	readonly value: string
	readonly wide?: boolean
	readonly subvalue?: string
}

interface SectionProps {
	readonly id: string
	readonly editLink: string
	readonly properties: readonly PropertyDefinition[]
	readonly editText?: string
	readonly showEditLink?: boolean
}

const SectionContainer = styled.section<{ readonly status: RegistrationStatus }>`
	display: grid;

	${({ status }) => status === 'cancelled'
		? css`
			grid: "title" auto
			      "spacer" 2em
			      "props" auto
			      / 1fr;
		`
		: css`
			@media not all and (min-width: 1050px) {
				grid: "title" auto
				      "edit" auto
				      "spacer" 2em
				      "props" auto
				      / 1fr;
			}

			@media (min-width: 1050px) {
				grid: "title title" auto
				      "edit  props" auto
				      / 273px auto;
			}
		`}

	&:not(:last-of-type) {
		border-bottom: 1px solid var(--color-grays-200);
		padding-bottom: 2em;
	}

	padding-top: 2em;
`

const SectionTitle = styled.h4`
	grid-area: title;
`

const editButtonStyle = css`
	grid-area: edit;
`

const PropertyList = styled.dl`
	grid-area: props;

	display: grid;
	grid: auto / repeat(2, 1fr);
	grid-row-gap: 2em;
`

const Property = styled.div<{ readonly wide: boolean }>`
	grid-column: span ${({ wide }) => wide ? 2 : 1};
`

const PropertyName = styled.dt`
	font-family: Inter;
	font-weight: 400;
	font-size: 12px;

	color: var(--color-brand-2-500);
`

const PropertyDescription = styled.dd`
`

const RegistrationId = styled.p`
	font-family: Inter;
	font-weight: 400;
	font-size: 12px;

	color: var(--color-grays-400);

	&:not(:first-child) {
		margin-top: 2em;
	}
`

const TermsForm = styled(Form)`
	margin-top: 5em;
`

const StatusText = styled.p<{ readonly status: RegistrationStatus }>`
	color: ${({ status }) => status === 'cancelled' ? 'var(--color-semantic-error)' : 'unset'};
`

const Section = ({ id: sectionId, editLink, properties, editText, showEditLink }: SectionProps) => {
	const status = useAppSelector(getStatus())!

	const editTextStr = editText ?? 'Edit information'
	const editTextId = editTextStr === 'Edit information' ? 'register-summary-edit' : `register-summary-${sectionId}-edit`

	return <SectionContainer status={status}>
		<Localized id={`register-summary-section-${sectionId}-title`}><SectionTitle>{sectionId}</SectionTitle></Localized>
		{status === 'cancelled' || showEditLink === false ? undefined : <Localized id={editTextId}><Link css={editButtonStyle} to={editLink}>{editTextStr}</Link></Localized>}
		<PropertyList>
			{properties.map(({ id, value, subvalue, wide = false }) => <Property key={id} wide={wide}>
				<Localized id={`register-summary-section-${sectionId}-property-${id}-name`}><PropertyName>{id}</PropertyName></Localized>
				<PropertyDescription>{value}</PropertyDescription>
				<PropertyName>{subvalue}</PropertyName>
			</Property>)}
		</PropertyList>
	</SectionContainer>
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const getRoomShareSectionProps = (isAttending: boolean, roomShare: GroupDto | null) => {
	if (isAttending && roomShare) {
		return [
			{ id: 'room-share-group-name', value: roomShare.name },
			{ id: 'room-share-members', value: roomShare.members.map(member => member.nickname).join('\n') },
		]
	}

	if (isAttending && !roomShare) {
		return [{ id: '', value: 'No group', subvalue: 'You can create or join one on the room sharing page' }]
	}

	if (!isAttending && !roomShare) {
	  return [{ id: '', value: 'No group', subvalue: 'Your registration needs to be approved by us first' }]
	}
}

// eslint-disable-next-line max-statements
const Summary = (_: ReadonlyRouteComponentProps) => {
	const registrationId = useAppSelector(getRegistrationId())!
	const personalInfo = useAppSelector(getPersonalInfo())!
	const contactInfo = useAppSelector(getContactInfo())!
	const optionalInfo = useAppSelector(getOptionalInfo())!
	const isEdit = useAppSelector(isEditMode())
	const status = useAppSelector(getStatus())!
	const isAttendingStatus = ['approved', 'partially-paid', 'paid', 'checked-in'].includes(status)

	const roomShare = useAppSelector(getRoomGroup())
	const roomShareSectionProps = getRoomShareSectionProps(isAttendingStatus, roomShare)
	const locale = useCurrentLocale()
	const { l10n } = useLocalization()
	const { handleSubmit, register, formState: { errors } } = useFunnelForm('register-summary')

	const notificationNames = Object
		.entries(optionalInfo.notifications)
		.filter(([, enabled]) => enabled)
		.map(([type]) => l10n.getString('notification-type', { type }, type))
		.join(', ')

	return <WithInvoiceRegisterFunnelLayout onNext={handleSubmit} currentStep={5}>
		<Localized id={`register-summary-title-${isEdit ? 'edit' : 'initial'}`}><h3>Your registration</h3></Localized>

		<Localized id="register-summary-registration-status" vars={{ status }}>
			<StatusText status={status}>We have received your registration and will confirm it when things are ready. Keep an eye on your mailbox!</StatusText>
		</Localized>

		{ registrationId ? <Localized id="register-summary-registration-id" vars={{ registrationId }}>
			<RegistrationId>Badge number: {registrationId}</RegistrationId>
		</Localized> : undefined }

		{/*TODO: Localize editText*/}
		{config.enableRoomshare
			? <Section id="room sharing" showEditLink={isAttendingStatus} editLink="/room-share" editText="Set up" properties={roomShareSectionProps}/>
			: undefined}

		<Section id="personal" editLink="/register/personal-info" properties={[
			{ id: 'nickname', value: personalInfo.nickname },
			{ id: 'full-name', value: `${personalInfo.firstName} ${personalInfo.lastName}` },
			{ id: 'pronouns', value: personalInfo.pronouns === null ? '' : l10n.getString('pronouns', { pronouns: personalInfo.pronouns }, personalInfo.pronouns) },
			{ id: 'date-of-birth', value: personalInfo.dateOfBirth.setLocale(locale).toLocaleString({ dateStyle: 'long' }) },
			{ id: 'wheelchair-accomodation', value: l10n.getString('register-summary-boolean-value', { value: personalInfo.wheelchair.toString() }) },
			{
				id: 'spoken-languages',
				wide: true,
				value: personalInfo.spokenLanguages.map(languageCode => l10n.getString('language-name', { languageCode }, langmap[languageCode].englishName)).join(', '),
			},
		]}/>
		<Section id="contact" editLink="/register/contact-info" properties={[
			{ id: 'email', wide: true, value: contactInfo.email },
			{ id: 'phone-number', wide: true, value: contactInfo.phoneNumber },
			{ id: 'street', wide: true, value: contactInfo.street },
			{ id: 'city', value: contactInfo.city },
			{ id: 'postal-code', value: contactInfo.postalCode },
			{ id: 'state-or-province', value: contactInfo.stateOrProvince ?? '' },
			{ id: 'country', value: l10n.getString('country-name', { countryCode: contactInfo.country }, contactInfo.country) },
		]}/>
		<Section id="optional" editLink="/register/optional-info" properties={[
			{ id: 'notifications', wide: true, value: notificationNames },
			{ id: 'digital-conbook', wide: true, value: l10n.getString('register-summary-boolean-value', { value: optionalInfo.digitalConbook.toString() }) },
			{ id: 'comments', wide: true, value: optionalInfo.comments ?? '' },
		]}/>

		{isEdit ? undefined : <TermsForm onSubmit={handleSubmit}>
			<Checkbox gridSpan={10} {...register('rulesAndConditionsAccepted', { required: true })}>
				<Localized id="register-summary-rules-and-conditions-accepted" elems={{
					rules: <a target="_blank" rel="noreferrer noopener" href={config.websiteLinks.rules}/>,
					conditions: <a target="_blank" rel="noreferrer noopener" href={config.websiteLinks.terms}/>,
				}}>
					<span>I accept the <a target="_blank" rel="noreferrer noopener" href={config.websiteLinks.rules}>rules</a> and <a target="_blank" rel="noreferrer noopener" href={config.websiteLinks.terms}>conditions</a>.</span>
				</Localized>
			</Checkbox>
			{errors.rulesAndConditionsAccepted?.message === undefined ? undefined : <ErrorMessage>{errors.rulesAndConditionsAccepted.message}</ErrorMessage>}
		</TermsForm>}
	</WithInvoiceRegisterFunnelLayout>
}

export default Summary
