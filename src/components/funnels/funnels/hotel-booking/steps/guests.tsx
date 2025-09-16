/** @jsxImportSource @emotion/react */

import { Fragment } from 'react'
import { Localized } from '@fluent/react'
import { TextField, Form } from '@eurofurence/reg-component-library'
import WithInvoiceHotelBookingFunnelLayout from '~/components/funnels/funnels/hotel-booking/layout/form/with-invoice'
import { useFunnelForm } from '~/hooks/funnels/form'
import { range } from 'ramda'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'

const Guests = (_: ReadonlyRouteComponentProps) => {
	const { register, handleSubmit } = useFunnelForm('hotel-booking-guests')

	return <WithInvoiceHotelBookingFunnelLayout onNext={handleSubmit}>
		<Localized id="hotel-booking-guests-title">
			<h3>Guest information</h3>
		</Localized>
		<Form onSubmit={handleSubmit}>
			{range(0, 2).map(i => <Fragment key={i}>
				<Localized id="hotel-booking-guests-guest-title" vars={{ guestNumber: i + 1 }}>
					<h2>Guest #{i + 1}</h2>
				</Localized>
				<Localized id="hotel-booking-guests-first-name" attrs={{ label: true, placeholder: true }}>
					<TextField label="First name" placeholder="John" gridSpan={5} {...register(`guests.${i}.firstName`, { required: true })}/>
				</Localized>
				<Localized id="hotel-booking-guests-last-name" attrs={{ label: true, placeholder: true }}>
					<TextField label="Last name" placeholder="Doe" gridSpan={5} {...register(`guests.${i}.lastName`, { required: true })}/>
				</Localized>
				<Localized id="hotel-booking-guests-email" attrs={{ label: true, placeholder: true }}>
					<TextField label="Email address" placeholder="john.smith@email.com" gridSpan={7} {...register(`guests.${i}.email`, { required: true })}/>
				</Localized>
				<Localized id="hotel-booking-guests-phone-number" attrs={{ label: true, placeholder: true }}>
					<TextField label="Phone number" placeholder="+32 0 000 00 00" gridSpan={3} {...register(`guests.${i}.phoneNumber`, { required: true })}/>
				</Localized>
				<Localized id="hotel-booking-guests-street" attrs={{ label: true, placeholder: true }}>
					<TextField label="Street" placeholder="Pennylane 40" {...register(`guests.${i}.street`, { required: true })}/>
				</Localized>
				<Localized id="hotel-booking-guests-city" attrs={{ label: true, placeholder: true }}>
					<TextField label="City" placeholder="Zootopia" gridSpan={7} {...register(`guests.${i}.city`, { required: true })}/>
				</Localized>
				<Localized id="hotel-booking-guests-postal-code" attrs={{ label: true, placeholder: true }}>
					<TextField label="Postal code (ZIP)" placeholder="8888" gridSpan={3} {...register(`guests.${i}.postalCode`, { required: true })}/>
				</Localized>
				<Localized id="hotel-booking-guests-state-or-province" attrs={{ label: true, placeholder: true }}>
					<TextField label="State / Province" placeholder="Fur Valley" gridSpan={5} {...register(`guests.${i}.stateOrProvince`, { required: true })}/>
				</Localized>
				<Localized id="hotel-booking-guests-country" attrs={{ label: true, placeholder: true }}>
					<TextField label="Country" placeholder="Germany" gridSpan={5} {...register(`guests.${i}.country`, { required: true })}/>
				</Localized>
			</Fragment>)}
		</Form>
	</WithInvoiceHotelBookingFunnelLayout>
}

export default Guests
