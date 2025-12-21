import type { UserInfo } from '~/state/models/auth'
import { createAction } from './create-action'

export const InitiateLogin = createAction<undefined, '[Auth] Initiate login'>(
  '[Auth] Initiate login'
)
export const LookupUserInfo = createAction<
  undefined,
  '[Auth] Lookup user info'
>('[Auth] Lookup user info')
export const LoadUserInfo = createAction<UserInfo, '[Auth] Load user info'>(
  '[Auth] Load user info'
)

export type AuthAction =
  | typeof InitiateLogin
  | typeof LookupUserInfo
  | typeof LoadUserInfo
