import { Epic, ofType } from "redux-observable"
import { map } from "rxjs/operators"
import { AppState } from "~/state"
import { AnyAppAction, GetAction } from "~/state/actions"
import { Navigate } from "~/state/actions/navigation"

export const nextPage =
	<T extends AnyAppAction>(
		actionBundle: T,
		pathProvider: (action: GetAction<T>) => string,
	): Epic<GetAction<AnyAppAction>, GetAction<typeof Navigate>, AppState> =>
	(action$) =>
		action$.pipe(
			ofType<GetAction<AnyAppAction>, T["type"], GetAction<T>>(
				actionBundle.type,
			),
			map((action) => Navigate.create(pathProvider(action))),
		)
