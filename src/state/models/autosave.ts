import { DateTime } from 'luxon'
import { load, remove, save } from '~/util/local-storage'
import { UserInfo } from './auth'
import { RegistrationInfo } from './register'
import config from '~/config'

/* eslint-disable @typescript-eslint/indent */
type DeepDateToString<T> =
	T extends DateTime
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
	registrationInfo: saveData.registrationInfo === undefined ? undefined : {
		...saveData.registrationInfo,
		ticketType: saveData.registrationInfo.ticketType === undefined ? undefined : saveData.registrationInfo.ticketType.type !== 'day'
			? saveData.registrationInfo.ticketType
			: {
				...saveData.registrationInfo.ticketType,
				day: saveData.registrationInfo.ticketType.day.toISODate(),
			},
		personalInfo: saveData.registrationInfo.personalInfo === undefined ? undefined : {
			...saveData.registrationInfo.personalInfo,
			dateOfBirth: saveData.registrationInfo.personalInfo.dateOfBirth.toISODate(),
		},
	},
	version: config.version,
})

const deserialize = (saveData: SerializedSaveData): SaveData => ({
	...saveData,
	registrationInfo: saveData.registrationInfo === undefined ? undefined : {
		...saveData.registrationInfo,
		ticketType: saveData.registrationInfo.ticketType === undefined ? undefined : saveData.registrationInfo.ticketType.type !== 'day'
			? saveData.registrationInfo.ticketType
			: {
				...saveData.registrationInfo.ticketType,
				day: DateTime.fromISO(saveData.registrationInfo.ticketType.day, { zone: 'Europe/Berlin' }),
			},
		personalInfo: saveData.registrationInfo.personalInfo === undefined ? undefined : {
			...saveData.registrationInfo.personalInfo,
			dateOfBirth: DateTime.fromISO(saveData.registrationInfo.personalInfo.dateOfBirth),
		},
	},
})

export const loadAutosave = (): SaveData | null => {
	const saveData = load<SerializedSaveData>('redux-state')

	if (saveData === null) {
		return null
	} else if (saveData.version !== config.version) {
		// do not load old registration infos (previous year, configuration changes, ...)
		return null
	} else {
		return deserialize(saveData)
	}
}

export const saveAutosave = (saveData: SaveData) => {
	save('redux-state', serialize(saveData))
}

export const removeAutosave = () => {
	remove('redux-state')
}
