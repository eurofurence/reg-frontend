/** @jsxImportSource @emotion/react */

import { Localized } from '@fluent/react'
import { TextArea, Form } from '@eurofurence/reg-component-library'
import WithInvoiceHotelBookingFunnelLayout from '~/components/funnels/funnels/hotel-booking/layout/form/with-invoice'
import { ChangeAdditionalInfo, SubmitAdditionalInfo } from '~/state/actions/hotel-booking'
import { AdditionalInfo as AdditionalInfoModel } from '~/state/models/hotel-booking'
import { useFunnelForm } from '~/hooks/funnels/form'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'

const AdditionalInfo = (_: ReadonlyRouteComponentProps) => {
	const { register, handleSubmit } = useFunnelForm<AdditionalInfoModel>(ChangeAdditionalInfo, SubmitAdditionalInfo)

	return <WithInvoiceHotelBookingFunnelLayout onNext={handleSubmit}>
		<Localized id="hotel-booking-guests-title">
			<h3>Additional information</h3>
		</Localized>
		<Form onSubmit={handleSubmit}>
			<Localized id="register-form-comments" attrs={{ label: true, placeholder: true }}>
				<TextArea label="Comments" placeholder={'I would like to know more about ...'} {...register('comments')}/>
			</Localized>
		</Form>
	</WithInvoiceHotelBookingFunnelLayout>
}

export default AdditionalInfo
