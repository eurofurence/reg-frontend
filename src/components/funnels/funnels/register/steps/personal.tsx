import { Localized, useLocalization } from '@fluent/react'
import { Checkbox, FieldSet, TextField, RadioSet, RadioItem, Select, Form, ErrorMessage } from '@eurofurence/reg-component-library'
import WithInvoiceRegisterFunnelLayout from '~/components/funnels/funnels/register/layout/form/with-invoice'
import langMap from 'langmap'
import { pluck, prop, sortBy } from 'ramda'
import { useFunnelForm } from '~/hooks/funnels/form'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import config from '~/config'
import { useMemo } from 'react'
import { DateTime } from 'luxon'

const reAlphaNum = /[\p{Letter}\p{Number}]/ug
const alphaNumCount = (s: string) => s.match(reAlphaNum)?.length ?? 0

// spaces neither count towards alphanumerics nor the non-alphanumeric count
const reSpaceNum = /[\p{White_Space}]/ug
const spaceCount = (s: string) => s.match(reSpaceNum)?.length ?? 0

const Personal = (_: ReadonlyRouteComponentProps) => {
	const { register, handleSubmit, control, watch, formState: { errors }, FunnelController } = useFunnelForm('register-personal-info')
	const { l10n } = useLocalization()

	const pronounsSelection = watch('pronounsSelection')

	const { languageOptions, languageOptionsByValue } = useMemo(() => {
		const languageOptionsSorted = sortBy(
			prop('label'),
			Object.entries(langMap)
				.filter(([key]) => !(key as string).includes('-') && !(key as string).includes('@'))
				.map(([value, names]) => ({ label: `${l10n.getString('language-name', { languageCode: value }, names.englishName)}`, value })),
		)

		return { languageOptions: languageOptionsSorted, languageOptionsByValue: new Map(languageOptionsSorted.map(l => [l.value, l])) }
	}, [l10n])

	return <WithInvoiceRegisterFunnelLayout onNext={handleSubmit} currentStep={2}>
		<Localized id="register-personal-info-title"><h3>Personal information</h3></Localized>

		<Form onSubmit={handleSubmit}>
			<Localized id="register-personal-info-nickname" attrs={{ label: true, placeholder: true }}>
				<TextField
					label="Nickname"
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
				<TextField label="First name" placeholder="John" gridSpan={5} error={errors.firstName?.message} {...register('firstName', { required: true, maxLength: 80 })}/>
			</Localized>
			<Localized id="register-personal-info-last-name" attrs={{ label: true, placeholder: true }}>
				<TextField label="Last name" placeholder="Doe" gridSpan={5} error={errors.lastName?.message} {...register('lastName', { required: true, maxLength: 80 })}/>
			</Localized>
			<Localized id="register-personal-info-full-name-permission" attrs={{ label: true }}>
				<Checkbox label="I grant permission to use my full name in Eurofurence related media." {...register('fullNamePermission')}/>
			</Localized>
			<Localized id="register-personal-info-date-of-birth" attrs={{ label: true }}>
				<TextField label="Date of birth" placeholder="1995-06-30" type="date" error={errors.dateOfBirth?.message} {...register('dateOfBirth', {
					required: true,
					validate: {
						minimumAge: v => DateTime.fromISO(v!, { zone: 'Europe/Berlin' }) <= config.eventStartDate.minus({ years: config.minimumAge }),
						maximumAge: v => DateTime.fromISO(v!) >= config.earliestBirthDate,
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
						<RadioItem label="Other:" value="other" {...register('pronounsSelection', { required: true })}>
							<TextField placeholder="Xe/Xem" error={errors.pronounsOther?.message} {...register('pronounsOther', { required: pronounsSelection === 'other' })}/>
							{errors.pronounsOther?.message === undefined ? undefined : <ErrorMessage>{errors.pronounsOther.message}</ErrorMessage>}
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
