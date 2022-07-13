import { Localized } from '@fluent/react'
import { Controller } from 'react-hook-form'
import { Checkbox, FieldSet, TextField, RadioSet, RadioItem, Select, Form } from '@eurofurence/reg-component-library'
import WithInvoiceRegisterFunnelLayout from '~/components/funnels/funnels/register/layout/form/with-invoice'
import { PersonalInfo } from '~/state/models/register'
import langMap from 'langmap'
import { ChangePersonalInfo, SubmitPersonalInfo } from '~/state/actions/register'
import { pluck } from 'ramda'
import { useFunnelForm } from '~/hooks/funnels/form'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'

const languageOptions = [...Object.entries(langMap)]
	.filter(([key]) => !key.includes('-'))
	.map(([value, names]) => ({ label: names.nativeName, value }))

// Don't understand why react-select makes me do this manually but ok
const languageOptionsByValue = new Map(languageOptions.map(l => [l.value, l]))

const Personal = (_: ReadonlyRouteComponentProps) => {
	const { register, handleSubmit, control } = useFunnelForm<PersonalInfo>(ChangePersonalInfo, SubmitPersonalInfo)

	return <WithInvoiceRegisterFunnelLayout onNext={handleSubmit} currentStep={2}>
		<Form onSubmit={handleSubmit}>
			<Localized id="register-form-nickname" attrs={{ label: true, placeholder: true }}>
				<TextField label="Nickname" placeholder="Johnny_The_Sergal" {...register('nickname')}/>
			</Localized>
			<Localized id="register-form-first-name" attrs={{ label: true, placeholder: true }}>
				<TextField label="First name" placeholder="John" gridSpan={5} {...register('firstName')}/>
			</Localized>
			<Localized id="register-form-last-name" attrs={{ label: true, placeholder: true }}>
				<TextField label="Last name" placeholder="Doe" gridSpan={5} {...register('lastName')}/>
			</Localized>
			<Localized id="register-form-full-name-permission" attrs={{ label: true }}>
				<Checkbox label="I grant permission to use my full name in Eurofurence related media." {...register('fullNamePermission')}/>
			</Localized>
			<Localized id="register-form-name-on-badge" attrs={{ legend: true }}>
				<RadioSet name="nameOnBadge" legend="Name on badge">
					<Localized id="register-form-name-on-badge-real-name" attrs={{ label: true }}>
						<RadioItem label="Real name" value="real-name" {...register('nameOnBadge')}/>
					</Localized>
					<Localized id="register-form-name-on-badge-nickname" attrs={{ label: true }}>
						<RadioItem label="Nickname" value="nickname" {...register('nameOnBadge')}/>
					</Localized>
					<Localized id="register-form-name-on-badge-real-name-and-nickname" attrs={{ label: true }}>
						<RadioItem label="Real name + nickname" value="real-name-and-nickname" {...register('nameOnBadge')}/>
					</Localized>
				</RadioSet>
			</Localized>
			<Controller control={control} name="spokenLanguages" defaultValue={[]} render={({ field: { onChange, value, ref, ...field } }) =>
				<Localized id="register-form-spoken-languages" attrs={{ label: true }}>
					<Select
						label="Spoken languages"
						isMulti={true}
						options={languageOptions}
						onChange={langs => onChange(pluck('value', langs))}
						value={value.map(lang => languageOptionsByValue.get(lang)!)}
						{...field}
					/>
				</Localized>
			}/>
			<Localized id="register-form-pronoun" attrs={{ legend: true }}>
				<RadioSet name="pronoun" legend="pronoun">
					<Localized id="register-form-pronoun-male" attrs={{ label: true }}>
						<RadioItem label="He/Him" value="male" {...register('pronoun')}/>
					</Localized>
					<Localized id="register-form-pronoun-female" attrs={{ label: true }}>
						<RadioItem label="She/Her" value="female" {...register('pronoun')}/>
					</Localized>
					<Localized id="register-form-pronoun-non-binary" attrs={{ label: true }}>
						<RadioItem label="They/Them" value="non-binary" {...register('pronoun')}/>
					</Localized>
					<Localized id="register-form-pronoun-prefer-not-to-say" attrs={{ label: true }}>
						<RadioItem label="I prefer not to say" value="prefer-not-to-say" defaultChecked {...register('pronoun')}/>
					</Localized>
				</RadioSet>
			</Localized>
			<Localized id="register-form-accessibility" attrs={{ legend: true }}>
				<FieldSet legend="Accessibility">
					<Localized id="register-form-accessibility-wheelchair" attrs={{ label: true }}>
						<Checkbox label="Please accomodate my wheelchair (and me)." {...register('wheelchair')}/>
					</Localized>
				</FieldSet>
			</Localized>
		</Form>
	</WithInvoiceRegisterFunnelLayout>
}

export default Personal
