import { Localized, useLocalization } from '@fluent/react'
import { Form, Select, TextField } from '@eurofurence/reg-component-library'
import WithInvoiceRegisterFunnelLayout from '~/components/funnels/funnels/register/layout/form/with-invoice'
import { useFunnelForm } from '~/hooks/funnels/form'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import { useMemo, useEffect } from 'react'
import { countryCodeEmoji } from 'country-code-emoji'
import config from '~/config'
import { prop, sortBy } from 'ramda'
import { useAppSelector } from '~/hooks/redux'
import { getVerifiedEmails } from '~/state/selectors/register'

const reEmail = /^[^@\p{Space_Separator}]+@[^@\p{Space_Separator}]+$/u
const reTelegram = /^@.+$/u

const Contact = (_: ReadonlyRouteComponentProps) => {
	const { register, handleSubmit, control, formState: { errors }, FunnelController, watch, setValue } = useFunnelForm('register-contact-info')
	const { l10n } = useLocalization()
	const verifiedEmails = useAppSelector(getVerifiedEmails())

	const { countryOptions, countryOptionsByValue } = useMemo(() => {
		const countryNames = sortBy(prop('name'), config.allowedCountries.map(countryCode => ({ countryCode, name: l10n.getString('country-name', { countryCode }) })))

		// eslint-disable-next-line @typescript-eslint/no-shadow
		const countryOptions = countryNames.map(({ countryCode, name }) => ({
			value: countryCode,
			label: `${countryCodeEmoji(countryCode)} ${name}`,
		}))

		return { countryOptions, countryOptionsByValue: new Map(countryOptions.map(o => [o.value, o])) }
	}, [l10n])

	const telegramUsername = watch('telegramUsername')

	useEffect(() => {
		if (typeof telegramUsername === 'string' && telegramUsername.length > 0 && !telegramUsername.startsWith('@')) {
			setValue('telegramUsername', `@${telegramUsername}`, { shouldValidate: true })
		}
	}, [telegramUsername, setValue])

	return <WithInvoiceRegisterFunnelLayout onNext={handleSubmit} currentStep={3}>
		<Localized id="register-contact-info-title"><h3>Contact information</h3></Localized>

		<Form onSubmit={handleSubmit}>
			<Localized id="register-contact-info-email" attrs={{ label: true, placeholder: true }}>
				<TextField label="Email address" placeholder="john.smith@email.com" error={errors.email?.message} {...register('email', { required: true, maxLength: 200, pattern: reEmail, validate: { isVerified: v => verifiedEmails.includes(v!) } })}/>
			</Localized>
			<Localized id="register-contact-info-phone-number" attrs={{ label: true, placeholder: true }}>
				<TextField label="Phone number" placeholder="+32 0 000 00 00" gridSpan={5} error={errors.phoneNumber?.message} {...register('phoneNumber', { required: true, maxLength: 32 })}/>
			</Localized>
			<Localized id="register-contact-info-telegram-username" attrs={{ label: true, placeholder: true }}>
				<TextField label="Telegram username" placeholder="@johnnythesergal" gridSpan={5} error={errors.telegramUsername?.message} {...register('telegramUsername', { maxLength: 80, pattern: reTelegram })}/>
			</Localized>
			<Localized id="register-contact-info-street" attrs={{ label: true, placeholder: true }}>
				<TextField label="Street" placeholder="Pennylane 40" error={errors.street?.message} {...register('street', { required: true, maxLength: 120 })}/>
			</Localized>
			<Localized id="register-contact-info-postal-code" attrs={{ label: true, placeholder: true }}>
				<TextField label="Postal code (ZIP)" placeholder="8888" gridSpan={4} error={errors.postalCode?.message} {...register('postalCode', { required: true, maxLength: 20 })}/>
			</Localized>
			<Localized id="register-contact-info-city" attrs={{ label: true, placeholder: true }}>
				<TextField label="City" placeholder="Zootopia" gridSpan={6} error={errors.city?.message} {...register('city', { required: true, maxLength: 80 })}/>
			</Localized>
			<Localized id="register-contact-info-state-or-province" attrs={{ label: true, placeholder: true }}>
				<TextField label="State / Province" placeholder="Fur Valley" gridSpan={5} error={errors.stateOrProvince?.message} {...register('stateOrProvince', { maxLength: 80 })}/>
			</Localized>
			<FunnelController control={control} name="country" rules={{ required: true }} render={({ field: { onChange, value, ref, ...field } }) =>
				<Localized id="register-contact-info-country" attrs={{ label: true }}>
					<Select
						label="Country"
						gridSpan={5}
						options={countryOptions}
						onChange={option => onChange(option?.value)}
						value={value === null ? null : countryOptionsByValue.get(value)}
						error={errors.country?.message}
						{...field}
					/>
				</Localized>
			}/>
		</Form>
	</WithInvoiceRegisterFunnelLayout>
}

export default Contact
