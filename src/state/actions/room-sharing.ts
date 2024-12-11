import { createAction } from './create-action'
import { GroupDto } from '~/apis/roomsrv'

export const LoadRoomShareState = createAction<GroupDto | null, '[RoomSharing] Load room share state'>('[RoomSharing] Load room share state')

export type RoomSharingAction
	= typeof LoadRoomShareState
