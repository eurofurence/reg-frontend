import { navigate } from "gatsby"
import { combineEpics, ofType } from "redux-observable"
import { AppState } from "~/state"
import { AnyAppAction, GetAction } from "~/state/actions"

import { Navigate } from "../actions/navigation"
import { justDo } from "./operators/just-do"

export default combineEpics<
	GetAction<AnyAppAction>,
	GetAction<AnyAppAction>,
	AppState
>((action$) =>
	action$.pipe(
		ofType(Navigate.type),
		justDo(({ payload }) => navigate(payload)),
	),
)
