import { combineEpics } from 'redux-observable'
import { equals } from 'ramda'
import { distinctUntilChanged, map, skip, tap } from 'rxjs/operators'
import { AnyAppAction, GetAction } from '~/state/actions'
import { UpdateLastSavedTime } from '~/state/actions/autosave'
import { AppState } from '~/state'
import { getSaveData } from '~/state/selectors/autosave'
import { saveAutosave, SaveData } from '../models/autosave'

export default combineEpics<GetAction<AnyAppAction>, GetAction<AnyAppAction>, AppState>(
	(action$, state$) => state$.pipe(
		map(getSaveData()),
		distinctUntilChanged(equals<SaveData>),
		skip(1),
		tap(saveAutosave),
		map(() => UpdateLastSavedTime.create(new Date())),
	),
)
