import { equals } from "ramda"
import { combineEpics } from "redux-observable"
import { distinctUntilChanged, map, skip, tap } from "rxjs/operators"
import { AppState } from "~/state"
import { AnyAppAction, GetAction } from "~/state/actions"
import { UpdateLastSavedTime } from "~/state/actions/autosave"
import { getSaveData } from "~/state/selectors/autosave"

import { SaveData, saveAutosave } from "../models/autosave"

export default combineEpics<
	GetAction<AnyAppAction>,
	GetAction<AnyAppAction>,
	AppState
>((action$, state$) =>
	state$.pipe(
		map(getSaveData()),
		distinctUntilChanged(equals<SaveData>),
		skip(1),
		tap(saveAutosave),
		map(() => UpdateLastSavedTime.create(new Date())),
	),
)
