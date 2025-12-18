import type { AppState } from '~/state'
import type { SaveData } from '~/state/models/autosave'

import { getUserInfo } from './auth'
import { getRegistrationInfo } from './register'

export const getLastSaved = () => (s: AppState) => s.autosave.lastSaved

export const getSaveData =
  () =>
  (s: AppState): SaveData => {
    // Don't save ID. It shouldn't cause problems in real situations but it prevents debugging.
    const registrationInfo = getRegistrationInfo()(s)

    return {
      userInfo: getUserInfo()(s),
      registrationInfo,
    }
  }
