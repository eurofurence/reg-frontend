import { Epic, ofType } from 'redux-observable'
import { navigate } from '@reach/router'
import { ignoreElements, tap } from 'rxjs/operators'
import { AnyAppAction, GetAction } from '~/state/actions'
import { AppState } from '~/state'

export const nextPage = <T extends AnyAppAction>(actionBundle: T, pathProvider: (action: GetAction<T>) => string): Epic<GetAction<AnyAppAction>, never, AppState> =>
	action$ => action$.pipe(
		ofType<GetAction<AnyAppAction>, T['type'], GetAction<T>>(actionBundle.type),
		tap(action => navigate(pathProvider(action))),
		ignoreElements(),
	)
