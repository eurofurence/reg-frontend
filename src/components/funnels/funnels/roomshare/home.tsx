import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import { useFunnelForm } from '~/hooks/funnels/form'
import { RadioCard, RadioGroup } from '@eurofurence/reg-component-library'
import { Localized } from '@fluent/react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import FullWidth from '~/components/funnels/funnels/hotel-booking/layout/form/full-width'
import { useAppSelector } from '~/hooks/redux'
import { getRoomGroup } from '~/state/selectors/room-sharing'

const RoomShareGrid = styled.div`
	display: grid;
	gap: 20px;

	@media not all and (min-width: 600px) {
		grid: auto-flow auto / 1fr;
	}

	@media (min-width: 600px) {
		grid: auto-flow 1fr / 1fr 1fr;
	}
`

const ConCat = styled.figure`
	position: relative;
`

const NoRoomShare = (_: ReadonlyRouteComponentProps) => {
	const { register, handleSubmit } = useFunnelForm('room-sharing-create-join')

	return (
		<FullWidth onNext={handleSubmit}>
			<h3>Roomsharing</h3>
			<form onSubmit={handleSubmit}>
				<RadioGroup name="type">
					<RoomShareGrid>
						<Localized id="room-share-create-new-group" attrs={{ label: true }}>
							<RadioCard label="Create a new group" value="create" {...register('type', { required: true })}>
								<ConCat><StaticImage height={400} src="../../../../images/con-cats/room-share/create.png"
																		 alt=""/></ConCat>
							</RadioCard>
						</Localized>
						<Localized id="room-share-join-group" attrs={{ label: true }}>
							<RadioCard label="Join an existing group" value="join" {...register('type', { required: true })}>
								<ConCat><StaticImage height={400} src="../../../../images/con-cats/room-share/join.png"
																		 alt=""/></ConCat>
							</RadioCard>
						</Localized>
					</RoomShareGrid>
				</RadioGroup>
			</form>
		</FullWidth>
	)
}

const RoomShareOptions = () => {
	return (
		<div>
			TODO
		</div>
	)
}

const RoomShareHome = (_: ReadonlyRouteComponentProps) => {
	const roomShare = useAppSelector(getRoomGroup())

	if (roomShare) {
		return <RoomShareOptions />
	} else {
		return <NoRoomShare />
	}
}

export default RoomShareHome
