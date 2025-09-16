import { combineEpics, ofType } from "redux-observable"
import { of } from "rxjs"
import { concatMap } from "rxjs/operators"
import { getUserInfo } from "~/apis/authsrv"
import config from "~/config"
import { AppState } from "~/state"
import { AnyAppAction, GetAction } from "~/state/actions"
import {
	InitiateLogin,
	LoadUserInfo,
	LookupUserInfo,
} from "~/state/actions/auth"
import { loadAutosave, removeAutosave } from "~/state/models/autosave"

import { clearFormCache } from "~/hooks/funnels/form"
import { catchAppError } from "./operators/catch-app-error"
import { justDo } from "./operators/just-do"

export default combineEpics<
	GetAction<AnyAppAction>,
	GetAction<AnyAppAction>,
	AppState
>(
	(action$) =>
		action$.pipe(
			ofType(InitiateLogin.type),
			justDo(() => {
				// eslint-disable-next-line no-process-env
				location.href = `${config.apis.authsrv.url}/auth?app_name=${config.apis.authsrv.appName}${process.env.NODE_ENV === "development" ? "" : `&dropoff_url=${location.href}`}`
			}),
		),

	(action$) =>
		action$.pipe(
			ofType(LookupUserInfo.type),
			concatMap(() =>
				getUserInfo().pipe(
					concatMap((userInfo) => {
						const saveData = loadAutosave()

						if (
							saveData === null ||
							saveData.userInfo === undefined ||
							saveData.userInfo.subject !== userInfo.subject
						) {
							removeAutosave()
							clearFormCache()
						}

						return of(LoadUserInfo.create(userInfo))
					}),
					catchAppError("user-info-lookup"),
				),
			),
		),
)
