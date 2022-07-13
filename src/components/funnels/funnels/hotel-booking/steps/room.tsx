/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled'
import { Localized } from '@fluent/react'
import { RadioGroup } from '@eurofurence/reg-component-library'
import { useSiteMetadata } from '~/hooks/queries/site-metadata'
import RoomCard from './room/card'
import FullWidthHotelBookingFunnelLayout from '~/components/funnels/funnels/hotel-booking/layout/form/full-width'
import { ChangeRoomInfo, SubmitRoomInfo } from '~/state/actions/hotel-booking'
import { RoomInfo } from '~/state/models/hotel-booking'
import { useFunnelForm } from '~/hooks/funnels/form'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'

const RoomSection = styled.section`
	margin-top: 1.5em;
`

const RoomGrid = styled.section`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-top: 2em;
`

const Room = (_: ReadonlyRouteComponentProps) => {
	const { register, handleSubmit } = useFunnelForm<RoomInfo>(ChangeRoomInfo, SubmitRoomInfo)
	const { rooms } = useSiteMetadata()

	return <FullWidthHotelBookingFunnelLayout onNext={handleSubmit} isFirstPage>
		<form onSubmit={handleSubmit}>
			<h3>Choose your hotel room</h3>
			<p>
				You will still need to book your hotel room directly through the hotel website.
				Filling out the information below will generate an email template, which you can use for booking your room.
			</p>

			<section>
				Selectors go here.
			</section>


			<RoomSection>
				<Localized id="hotel-booking-room-title"><h3>Room types</h3></Localized>
				<RoomGrid>
					<RadioGroup name="level">
						{rooms.map(({ id, price, image }) =>
							<Localized key={id} id={`hotel-booking-room-card-${id}`} attrs={{ label: true, priceLabel: true }}>
								<RoomCard id={id} price={price} image={`/images/rooms/${image}`} label="Room type" {...register('type')}>A room type</RoomCard>
							</Localized>,
						)}
					</RadioGroup>
				</RoomGrid>
			</RoomSection>
		</form>
	</FullWidthHotelBookingFunnelLayout>
}

export default Room
