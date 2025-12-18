import type { AuthAction } from './auth'
import type { AutosaveAction } from './autosave'
import type { ErrorAction } from './errors'
import type { FormAction } from './forms'
import type { RegisterAction } from './register'
import type { NavigationAction } from './navigation'

export type { GetAction } from './create-action'

export type AnyAppAction =
  | AuthAction
  | AutosaveAction
  | ErrorAction
  | FormAction
  | RegisterAction
  | NavigationAction
