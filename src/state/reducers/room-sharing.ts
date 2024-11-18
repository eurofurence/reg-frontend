import { GroupDto } from '~/apis/roomsrv'
import { AnyAppAction, GetAction } from '~/state/actions'
import { LoadRoomShareState } from '~/state/actions/room-sharing'

export interface RoomSharingState {
	readonly roomShare: GroupDto | null
}

const defaultState: RoomSharingState = {
	roomShare: null,
}

export default (state: RoomSharingState = defaultState, action: GetAction<AnyAppAction>): RoomSharingState => {
	switch (action.type) {
		case LoadRoomShareState.type:
			return { ...state, roomShare: action.payload }
		default:
			return state
	}
}
