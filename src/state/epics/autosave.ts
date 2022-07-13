import { combineEpics } from 'redux-observable'
import { pick, equals } from 'ramda'
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators'
import { DateTime } from 'luxon'
import { AnyAppAction, GetAction } from '~/state/actions'
import { UpdateLastSavedTime, LoadAutosaveData } from '~/state/actions/autosave'
import { AppState } from '~/state'
import { fromEvent } from 'rxjs'
import { AutosaveData } from '../models/autosave'

const TIME_BEFORE_SAVING = 2000

export default combineEpics<GetAction<AnyAppAction>, GetAction<AnyAppAction>, AppState>(
	() => fromEvent(document, 'DOMContentLoaded').pipe(
		map(() => {
			const serializedData = localStorage.getItem('autosave')

			return serializedData === null ? null : JSON.parse(serializedData) as AutosaveData
		}),
		filter(autosaveData => autosaveData !== null),
		map(autosaveData => LoadAutosaveData.create(autosaveData!)),
	),
	(action$, state$) => state$.pipe(
		map(pick(['register', 'hotelBooking'])),
		distinctUntilChanged(equals),
		debounceTime(TIME_BEFORE_SAVING),
		tap(autosaveData => localStorage.setItem('autosave', JSON.stringify(autosaveData))),
		map(() => UpdateLastSavedTime.create(DateTime.now())),
	),
)
