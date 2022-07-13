import { Localized } from '@fluent/react'
import { Checkbox, FieldSet, Form, TextArea } from '@eurofurence/reg-component-library'
import WithInvoiceRegisterFunnelLayout from '~/components/funnels/funnels/register/layout/form/with-invoice'
import { OptionalInfo } from '~/state/models/register'
import { useFunnelForm } from '~/hooks/funnels/form'
import { ChangeOptionalInfo, SubmitOptionalInfo } from '~/state/actions/register'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'

const Optional = (_: ReadonlyRouteComponentProps) => {
	const { register, handleSubmit } = useFunnelForm<OptionalInfo>(ChangeOptionalInfo, SubmitOptionalInfo)

	return <WithInvoiceRegisterFunnelLayout onNext={handleSubmit} currentStep={4}>
		<Form onSubmit={handleSubmit}>
			<Localized id="register-form-notifications" attrs={{ legend: true }}>
				<FieldSet legend="I would like to receive event information and announcements about">
					<Localized id="register-form-notifications-art" attrs={{ label: true }}>
						<Checkbox label="Art" {...register('notifications.art')}/>
					</Localized>
					<Localized id="register-form-accessibility-animation" attrs={{ label: true }}>
						<Checkbox label="Animation" {...register('notifications.animation')}/>
					</Localized>
					<Localized id="register-form-accessibility-music" attrs={{ label: true }}>
						<Checkbox label="Music" {...register('notifications.music')}/>
					</Localized>
					<Localized id="register-form-accessibility-fursuiting" attrs={{ label: true }}>
						<Checkbox label="Fursuiting" {...register('notifications.fursuiting')}/>
					</Localized>
				</FieldSet>
			</Localized>
			<Localized id="register-form-comments" attrs={{ label: true, placeholder: true }}>
				<TextArea label="Comments" placeholder={'I would like to know more about ...'} {...register('comments')}/>
			</Localized>
		</Form>
	</WithInvoiceRegisterFunnelLayout>
}

export default Optional
