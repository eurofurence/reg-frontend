import { combineEpics, ofType } from 'redux-observable'
import { of } from 'rxjs'
import { concatMap, filter } from 'rxjs/operators'
import { getUserInfo } from '~/apis/authsrv'
import config from '~/config'
import { clearFormCache } from '~/hooks/funnels/form'
import type { AppState } from '~/state'
import type { AnyAppAction, GetAction } from '~/state/actions'
import {
  InitiateLogin,
  LoadUserInfo,
  LookupUserInfo,
} from '~/state/actions/auth'
import { loadAutosave, removeAutosave } from '~/state/models/autosave'
import { load, save } from '~/util/local-storage'
import { catchAppError } from './operators/catch-app-error'
import { justDo } from './operators/just-do'

const LAST_LOGIN_ATTEMPT_KEY = 'last-login-attempt'
const LOGIN_THROTTLE_MS = 10_000 // 10 seconds

const shouldAllowLoginRedirect = (): boolean => {
  const lastAttempt = load<number>(LAST_LOGIN_ATTEMPT_KEY)
  if (lastAttempt === null) {
    return true
  }

  const timeSinceLastAttempt = Date.now() - lastAttempt
  return timeSinceLastAttempt >= LOGIN_THROTTLE_MS
}

export default combineEpics<
  GetAction<AnyAppAction>,
  GetAction<AnyAppAction>,
  AppState
>(
  (action$) =>
    action$.pipe(
      ofType(InitiateLogin.type),
      filter(() => shouldAllowLoginRedirect()),
      justDo(() => {
        save(LAST_LOGIN_ATTEMPT_KEY, Date.now())
        location.href = `${config.apis.authsrv.url}/auth?app_name=${config.apis.authsrv.appName}${process.env.NODE_ENV === 'development' ? '' : `&dropoff_url=${location.href}`}`
      })
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
          catchAppError('user-info-lookup')
        )
      )
    )
)
