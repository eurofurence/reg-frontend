import { AuthAction } from './auth'
import { AutosaveAction } from './autosave'
import { ErrorAction } from './errors'
import { FormAction } from './forms'
import { RegisterAction } from './register'
import { NavigationAction } from './navigation'

export type { GetAction } from './create-action'

export type AnyAppAction =
	| AuthAction
	| AutosaveAction
	| ErrorAction
	| FormAction
	| RegisterAction
	| NavigationAction
