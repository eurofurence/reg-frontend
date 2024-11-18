import { findMyGroup } from '~/apis/roomsrv'
import { concatMap, of } from 'rxjs'
import { LoadRoomShareState } from '~/state/actions/room-sharing'
import { catchAppError } from '~/state/epics/operators/catch-app-error'
import { combineEpics } from 'redux-observable'
import { AnyAppAction, GetAction } from '~/state/actions'
import { AppState } from '~/state'
import { catchError } from 'rxjs/operators'

const loadNoGroup = () => of(LoadRoomShareState.create(null))

const loadMyGroup = () => findMyGroup().pipe(
	concatMap(resp => {
		return of(LoadRoomShareState.create(resp.response))
	}),
	catchError(error => {
		// eslint-disable-next-line no-console
		console.error('Failed to load room share state', error)

		return loadNoGroup()
	}),
	catchAppError('room-share-load'),
)

export default combineEpics<GetAction<AnyAppAction>, GetAction<AnyAppAction>, AppState>(
	loadMyGroup,
)
