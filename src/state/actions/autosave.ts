import { ReadonlyDate } from '~/util/readonly-types'
import { createAction } from './create-action'

export const UpdateLastSavedTime = createAction<ReadonlyDate, '[Autosave] Update last saved time'>('[Autosave] Update last saved time')

export type AutosaveAction
	= typeof UpdateLastSavedTime
