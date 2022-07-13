import { Localized } from '@fluent/react'
import { Form, TextField } from '@eurofurence/reg-component-library'
import WithInvoiceRegisterFunnelLayout from '~/components/funnels/funnels/register/layout/form/with-invoice'
import { ChangeContactInfo, SubmitContactInfo } from '~/state/actions/register'
import { ContactInfo } from '~/state/models/register'
import { useFunnelForm } from '~/hooks/funnels/form'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'

const Contact = (_: ReadonlyRouteComponentProps) => {
	const { register, handleSubmit } = useFunnelForm<ContactInfo>(ChangeContactInfo, SubmitContactInfo)

	return <WithInvoiceRegisterFunnelLayout onNext={handleSubmit} currentStep={3}>
		<Form onSubmit={handleSubmit}>
			<Localized id="register-form-email" attrs={{ label: true, placeholder: true }}>
				<TextField label="Email address" placeholder="john.smith@email.com" gridSpan={7} {...register('email')}/>
			</Localized>
			<Localized id="register-form-phone-number" attrs={{ label: true, placeholder: true }}>
				<TextField label="Phone number" placeholder="+32 0 000 00 00" gridSpan={3} {...register('phoneNumber')}/>
			</Localized>
			<Localized id="register-form-street" attrs={{ label: true, placeholder: true }}>
				<TextField label="Street" placeholder="Pennylane 40" {...register('street')}/>
			</Localized>
			<Localized id="register-form-city" attrs={{ label: true, placeholder: true }}>
				<TextField label="City" placeholder="Zootopia" gridSpan={7} {...register('city')}/>
			</Localized>
			<Localized id="register-form-postal-code" attrs={{ label: true, placeholder: true }}>
				<TextField label="Postal code (ZIP)" placeholder="8888" gridSpan={3} {...register('postalCode')}/>
			</Localized>
			<Localized id="register-form-state-or-province" attrs={{ label: true, placeholder: true }}>
				<TextField label="State / Province" placeholder="Fur Valley" gridSpan={5} {...register('stateOrProvince')}/>
			</Localized>
			<Localized id="register-form-country" attrs={{ label: true, placeholder: true }}>
				<TextField label="Country" placeholder="Germany" gridSpan={5} {...register('country')}/>
			</Localized>
		</Form>
	</WithInvoiceRegisterFunnelLayout>
}

export default Contact
