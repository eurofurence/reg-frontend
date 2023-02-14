import { Localized } from '@fluent/react'
import { Checkbox, FieldSet, TextField, RadioSet, RadioItem, Select, Form, ErrorMessage } from '@eurofurence/reg-component-library'
import WithInvoiceRegisterFunnelLayout from '~/components/funnels/funnels/register/layout/form/with-invoice'
import langMap from 'langmap'
import { pluck } from 'ramda'
import { useFunnelForm } from '~/hooks/funnels/form'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import { sub } from 'date-fns'
import config from '~/config'

const languageOptions = Object.entries(langMap)
	.filter(([key]) => !(key as string).includes('-'))
	.map(([value, names]) => ({ label: names.nativeName, value }))

// Don't understand why react-select makes me do this manually but ok
const languageOptionsByValue = new Map(languageOptions.map(l => [l.value, l]))

const reAlphaNum = /[\p{Letter}\p{Number}]/ug
const alphaNumCount = (s: string) => s.match(reAlphaNum)?.length ?? 0

// spaces neither count towards alphanumerics nor the non-alphanumeric count
const reSpaceNum = /[\p{White_Space}]/ug
const spaceCount = (s: string) => s.match(reSpaceNum)?.length ?? 0

const Personal = (_: ReadonlyRouteComponentProps) => {
	const { register, handleSubmit, control, watch, formState: { errors }, FunnelController } = useFunnelForm('register-personal-info')

	const pronounsSelection = watch('pronounsSelection')

	return <WithInvoiceRegisterFunnelLayout onNext={handleSubmit} currentStep={2}>
		<Localized id="register-personal-info-title"><h3>Personal information</h3></Localized>

		<Form aria-label="Personal information" onSubmit={handleSubmit}>
			<Localized id="register-personal-info-nickname" attrs={{ label: true, placeholder: true }}>
				<TextField
					label="Nickname"
					autoComplete="nickname"
					placeholder="Johnny_The_Sergal"
					error={errors.nickname?.message}
					{...register('nickname', {
						required: true,
						maxLength: 80,
						validate: {
							noLeadingOrTrailingWhitespace: v => v!.trim() === v,
							minOneAlphanumericChar: v => alphaNumCount(v!) > 0,
							maxTwoNonAlphanumericChars: v => v!.length - alphaNumCount(v!) - spaceCount(v!) <= 2,
						},
					})}
				/>
			</Localized>
			<Localized id="register-personal-info-first-name" attrs={{ label: true, placeholder: true }}>
				<TextField label="First name" autoComplete="given-name" placeholder="John" gridSpan={5} error={errors.firstName?.message} {...register('firstName', { required: true, maxLength: 80 })}/>
			</Localized>
			<Localized id="register-personal-info-last-name" attrs={{ label: true, placeholder: true }}>
				<TextField label="Last name" autoComplete="family-name" placeholder="Doe" gridSpan={5} error={errors.lastName?.message} {...register('lastName', { required: true, maxLength: 80 })}/>
			</Localized>
			<Localized id="register-personal-info-full-name-permission" attrs={{ label: true }}>
				<Checkbox label="I grant permission to use my full name in Eurofurence related media." {...register('fullNamePermission')}/>
			</Localized>
			<Localized id="register-personal-info-date-of-birth" attrs={{ label: true }}>
				<TextField label="Date of birth" autoComplete="bday" placeholder="1995-06-30" type="date" error={errors.dateOfBirth?.message} {...register('dateOfBirth', {
					required: true,
					validate: {
						minimumAge: v => new Date(v!) <= sub(config.eventStartDate, { years: config.minimumAge }),
						maximumAge: v => new Date(v!) >= config.earliestBirthDate,
					},
				})}/>
			</Localized>
			<FunnelController control={control} name="spokenLanguages" rules={{ required: true }} render={({ field: { onChange, value, ref, ...field } }) =>
				<Localized id="register-personal-info-spoken-languages" attrs={{ label: true }}>
					<Select
						label="Spoken languages"
						isMulti={true}
						options={languageOptions}
						onChange={langs => onChange(pluck('value', langs))}
						value={value.map(lang => languageOptionsByValue.get(lang)!)}
						error={errors.spokenLanguages?.message}
						{...field}
					/>
				</Localized>
			}/>
			<Localized id="register-personal-info-pronouns" attrs={{ legend: true }}>
				<RadioSet name="pronounsSelection" legend="Pronouns" error={errors.pronounsSelection?.message}>
					<Localized id="register-personal-info-pronouns-prefer-not-to-say" attrs={{ label: true }}>
						<RadioItem label="Prefer not to say" value="prefer-not-to-say" {...register('pronounsSelection', { required: true })}/>
					</Localized>
					<RadioItem label="He/Him" value="He/Him" {...register('pronounsSelection', { required: true })}/>
					<RadioItem label="She/Her" value="She/Her" {...register('pronounsSelection', { required: true })}/>
					<RadioItem label="They/Them" value="They/Them" {...register('pronounsSelection', { required: true })}/>
					<Localized id="register-personal-info-pronouns-other" attrs={{ label: true }}>
						<RadioItem label="Other:" aria-description="Fill in custom pronouns in the next field" value="other" {...register('pronounsSelection', { required: true })}>
							<TextField
								aria-label="Custom pronouns"
								placeholder="Xe/Xem"
								disabled={pronounsSelection !== 'other'}
								error={errors.pronounsOther?.message}
								aria-invalid={errors.pronounsOther?.message !== undefined}
								aria-errormessage="pronouns-other-textbox-error-message"
								{...register('pronounsOther', { required: pronounsSelection === 'other' })}
							/>
							<ErrorMessage id="pronouns-other-textbox-error-message">{errors.pronounsOther?.message}</ErrorMessage>
						</RadioItem>
					</Localized>
				</RadioSet>
			</Localized>
			<Localized id="register-personal-info-accessibility" attrs={{ legend: true }}>
				<FieldSet legend="Accessibility">
					<Localized id="register-personal-info-accessibility-wheelchair" attrs={{ label: true }}>
						<Checkbox label="Please accomodate my wheelchair (and me)." {...register('wheelchair')}/>
					</Localized>
				</FieldSet>
			</Localized>
		</Form>
	</WithInvoiceRegisterFunnelLayout>
}

export default Personal
