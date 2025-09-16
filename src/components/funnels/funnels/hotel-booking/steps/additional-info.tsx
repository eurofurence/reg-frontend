/** @jsxImportSource @emotion/react */

import { Localized } from '@fluent/react'
import { TextArea, Form } from '@eurofurence/reg-component-library'
import WithInvoiceHotelBookingFunnelLayout from '~/components/funnels/funnels/hotel-booking/layout/form/with-invoice'
import { useFunnelForm } from '~/hooks/funnels/form'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'

const AdditionalInfo = (_: ReadonlyRouteComponentProps) => {
	const { register, handleSubmit } = useFunnelForm('hotel-booking-additional-info')

	return <WithInvoiceHotelBookingFunnelLayout onNext={handleSubmit}>
		<Localized id="hotel-booking-additional-info-title">
			<h3>Additional information</h3>
		</Localized>
		<Form onSubmit={handleSubmit}>
			<Localized id="hotel-booking-additional-info-comments" attrs={{ label: true, placeholder: true }}>
				<TextArea label="Comments" placeholder={'I would like to know more about...'} {...register('comments')}/>
			</Localized>
		</Form>
	</WithInvoiceHotelBookingFunnelLayout>
}

export default AdditionalInfo
