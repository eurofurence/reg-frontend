import { type Epic, ofType } from 'redux-observable'
import { map } from 'rxjs/operators'
import type { AnyAppAction, GetAction } from '~/state/actions'
import type { AppState } from '~/state'
import { Navigate } from '~/state/actions/navigation'

export const nextPage =
  <T extends AnyAppAction>(
    actionBundle: T,
    pathProvider: (action: GetAction<T>) => string
  ): Epic<GetAction<AnyAppAction>, GetAction<typeof Navigate>, AppState> =>
  (action$) =>
    action$.pipe(
      ofType<GetAction<AnyAppAction>, T['type'], GetAction<T>>(
        actionBundle.type
      ),
      map((action) => Navigate.create(pathProvider(action)))
    )
