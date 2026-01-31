import { DateTime } from 'luxon'
import { load, remove, save } from '~/util/local-storage'
import type { UserInfo } from './auth'
import type { RegistrationInfo, TicketLevelAddons } from './register'
import config from '~/config'

/* eslint-disable @typescript-eslint/indent */
type DeepDateToString<T> = T extends DateTime
  ? string
  : T extends object
    ? { [K in keyof T]: DeepDateToString<T[K]> }
    : T extends readonly (infer U)[]
      ? DeepDateToString<U>[]
      : T
/* eslint-enable @typescript-eslint/indent */

export interface SaveData {
  readonly userInfo?: UserInfo
  readonly registrationInfo?: Partial<RegistrationInfo>
  readonly version?: number
}

type SerializedSaveData = DeepDateToString<SaveData>

const serialize = (saveData: SaveData): SerializedSaveData => ({
  ...saveData,
  registrationInfo:
    saveData.registrationInfo === undefined
      ? undefined
      : {
          ...saveData.registrationInfo,
          ticketType:
            saveData.registrationInfo.ticketType === undefined
              ? undefined
              : saveData.registrationInfo.ticketType.type !== 'day'
                ? saveData.registrationInfo.ticketType
                : {
                    ...saveData.registrationInfo.ticketType,
                    day: saveData.registrationInfo.ticketType.day.toISODate(),
                  },
          personalInfo:
            saveData.registrationInfo.personalInfo === undefined
              ? undefined
              : {
                  ...saveData.registrationInfo.personalInfo,
                  dateOfBirth:
                    saveData.registrationInfo.personalInfo.dateOfBirth.toISODate(),
                },
        },
  version: config.version,
})

const deserialize = (saveData: SerializedSaveData): SaveData => ({
  ...saveData,
  registrationInfo:
    saveData.registrationInfo === undefined
      ? undefined
      : {
          ...saveData.registrationInfo,
          ticketType:
            saveData.registrationInfo.ticketType === undefined
              ? undefined
              : saveData.registrationInfo.ticketType.type !== 'day'
                ? saveData.registrationInfo.ticketType
                : {
                    ...saveData.registrationInfo.ticketType,
                    day: DateTime.fromISO(
                      saveData.registrationInfo.ticketType.day,
                      { zone: 'Europe/Berlin' }
                    ),
                  },
          personalInfo:
            saveData.registrationInfo.personalInfo === undefined
              ? undefined
              : {
                  ...saveData.registrationInfo.personalInfo,
                  dateOfBirth: DateTime.fromISO(
                    saveData.registrationInfo.personalInfo.dateOfBirth
                  ),
                },
        },
})

const isConfiguredAsAddon = (idCandidate: string): boolean => {
  return Object.entries(config.addons).some(
    ([id, _ignored]) => idCandidate === id
  )
}

const isUnavailableAddonForType = (
  addonId: string,
  ticketType: 'full' | 'day'
): boolean => {
  return Object.entries(config.addons)
    .filter(([id, _ignored]) => id === addonId)
    .some(
      ([_id, value]) =>
        value.unavailableFor?.type?.includes(ticketType) ?? false
    )
}

const hasWrongAddons = (addons: TicketLevelAddons): boolean => {
  return Object.entries(addons).some(
    ([id, _ignore]) => !isConfiguredAsAddon(id)
  )
}

const hasUnavailableSelectedAddons = (
  addons: TicketLevelAddons,
  ticketType: 'full' | 'day'
): boolean => {
  return Object.entries(addons)
    .filter(([_id, { selected, ..._rest }]) => selected)
    .some(([id, _ignore]) => isUnavailableAddonForType(id, ticketType))
}

const isValid = (ri: Partial<RegistrationInfo>): boolean => {
  if (ri.ticketType && ri.ticketLevel) {
    const ticketType = ri.ticketType.type
    const addons = ri.ticketLevel.addons

    return (
      !hasWrongAddons(addons) &&
      !hasUnavailableSelectedAddons(addons, ticketType)
    )
  }

  return false
}

export const loadAutosave = (): SaveData | null => {
  const saveData = load<SerializedSaveData>('redux-state')

  if (saveData === null) {
    return null
  } else if (saveData.version !== config.version) {
    return null
  } else {
    const withDeserialization = deserialize(saveData)

    if (
      withDeserialization.registrationInfo === undefined ||
      isValid(withDeserialization.registrationInfo)
    ) {
      return withDeserialization
    } else {
      return null
    }
  }
}

export const saveAutosave = (saveData: SaveData) => {
  save('redux-state', serialize(saveData))
}

export const removeAutosave = () => {
  remove('redux-state')
}
