import type { AnyAppAction, GetAction } from '~/state/actions'
import { UpdateLastSavedTime } from '~/state/actions/autosave'
import type { ReadonlyDate } from '~/util/readonly-types'

export interface AutosaveState {
  readonly lastSaved?: ReadonlyDate
}

export default (
  state: AutosaveState = {},
  action: GetAction<AnyAppAction>
): AutosaveState => {
  switch (action.type) {
    case UpdateLastSavedTime.type:
      return { ...state, lastSaved: action.payload }
    default:
      return state
  }
}
