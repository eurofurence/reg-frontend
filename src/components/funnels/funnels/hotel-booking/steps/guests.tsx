/** @jsxImportSource @emotion/react */

import { Fragment } from 'react'
import { Localized } from '@fluent/react'
import { TextField, Form } from '@eurofurence/reg-component-library'
import WithInvoiceHotelBookingFunnelLayout from '~/components/funnels/funnels/hotel-booking/layout/form/with-invoice'
import { ChangeGuestsInfo, SubmitGuestsInfo } from '~/state/actions/hotel-booking'
import { GuestsInfo } from '~/state/models/hotel-booking'
import { useFunnelForm } from '~/hooks/funnels/form'
import { range } from 'ramda'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'

const Guests = (_: ReadonlyRouteComponentProps) => {
	const { register, handleSubmit } = useFunnelForm<GuestsInfo>(ChangeGuestsInfo, SubmitGuestsInfo)

	return <WithInvoiceHotelBookingFunnelLayout onNext={handleSubmit}>
		<Localized id="hotel-booking-guests-title">
			<h3>Guest information</h3>
		</Localized>
		<Form onSubmit={handleSubmit}>
			{range(0, 2).map(i => <Fragment key={i}>
				<Localized id="hotel-booking-form-guest-title" vars={{ guestNr: i + 1 }}>
					<h2>Guest #{i + 1}</h2>
				</Localized>
				<Localized id="hotel-booking-form-first-name" attrs={{ label: true, placeholder: true }}>
					<TextField label="First name" placeholder="John" gridSpan={5} {...register(`guests.${i}.firstName`)}/>
				</Localized>
				<Localized id="hotel-booking-form-last-name" attrs={{ label: true, placeholder: true }}>
					<TextField label="Last name" placeholder="Doe" gridSpan={5} {...register(`guests.${i}.lastName`)}/>
				</Localized>
				<Localized id="hotel-booking-form-email" attrs={{ label: true, placeholder: true }}>
					<TextField label="Email address" placeholder="john.smith@email.com" gridSpan={7} {...register(`guests.${i}.email`)}/>
				</Localized>
				<Localized id="hotel-booking-form-phone-number" attrs={{ label: true, placeholder: true }}>
					<TextField label="Phone number" placeholder="+32 0 000 00 00" gridSpan={3} {...register(`guests.${i}.phoneNumber`)}/>
				</Localized>
				<Localized id="hotel-booking-form-street" attrs={{ label: true, placeholder: true }}>
					<TextField label="Street" placeholder="Pennylane 40" {...register(`guests.${i}.street`)}/>
				</Localized>
				<Localized id="hotel-booking-form-city" attrs={{ label: true, placeholder: true }}>
					<TextField label="City" placeholder="Zootopia" gridSpan={7} {...register(`guests.${i}.city`)}/>
				</Localized>
				<Localized id="hotel-booking-form-postal-code" attrs={{ label: true, placeholder: true }}>
					<TextField label="Postal code (ZIP)" placeholder="8888" gridSpan={3} {...register(`guests.${i}.postalCode`)}/>
				</Localized>
				<Localized id="hotel-booking-form-state-or-province" attrs={{ label: true, placeholder: true }}>
					<TextField label="State / Province" placeholder="Fur Valley" gridSpan={5} {...register(`guests.${i}.stateOrProvince`)}/>
				</Localized>
				<Localized id="hotel-booking-form-country" attrs={{ label: true, placeholder: true }}>
					<TextField label="Country" placeholder="Germany" gridSpan={5} {...register(`guests.${i}.country`)}/>
				</Localized>
			</Fragment>)}
		</Form>
	</WithInvoiceHotelBookingFunnelLayout>
}

export default Guests
