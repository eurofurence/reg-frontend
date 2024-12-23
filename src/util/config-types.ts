import { DateTime } from 'luxon'
import { ComponentType } from 'react'

type TicketLevelConfig<Addon extends string> = {
	readonly prices: {
		readonly full: number
		readonly day: number
	}
	readonly includes?: readonly Addon[]
	readonly requires?: readonly Addon[]
	readonly hidden?: boolean
}

type AddonOptionsConfig<Item extends string> = {
	readonly type: 'select'
	readonly items: readonly Item[]
	readonly default?: Item
}

type AddonConfig<OptionsConfigItems, Addon extends string, TicketLevel extends string> = {
	readonly price: number
	readonly default: boolean
	readonly options: { [K in keyof OptionsConfigItems]: AddonOptionsConfig<OptionsConfigItems[K] & string> }
	readonly unavailableFor?: {
		readonly type?: readonly ('day' | 'full')[]
		readonly level?: readonly (TicketLevel | null)[]
	}
	readonly hidden: boolean
	readonly requires?: readonly Addon[]
	readonly resetOn?: {
		readonly levelChange?: boolean // reset when ticket level (normal, sponsor, ...) changes
		// note that a type change (full/day) always resets addons to their default values
		// (type change can only be done in this frontend during initial registration)
		// see reducers/register.ts
	}
}

type RoomConfig = {
	readonly id: string
	readonly price: number
	readonly image: ComponentType
}

type Config<TicketLevel extends string, AddonConfigs extends Readonly<Record<string, unknown>>> = {
	readonly version: number
	readonly eventName: string
	readonly registrationLaunch: DateTime
	readonly registrationExpirationDate: DateTime
	readonly hoursBeforeEditAvailable: number
	readonly hotelBookingLaunch: DateTime
	readonly eventStartDate: DateTime
	readonly eventEndDate: DateTime
	readonly dayTicketStartDate: DateTime
	readonly dayTicketEndDate: DateTime
	readonly earliestBirthDate: DateTime
	readonly minimumAge: number
	readonly enableRoomshare: boolean
	readonly allowedCountries: readonly (
		| 'AF' | 'AX' | 'AL' | 'DZ' | 'AS' | 'AD' | 'AO' | 'AI' | 'AQ' | 'AG' | 'AR' | 'AM' | 'AW' | 'AC' | 'AU' | 'AT' | 'AZ' | 'BS' | 'BH' | 'BD'
		| 'BB' | 'BY' | 'BE' | 'BZ' | 'BJ' | 'BM' | 'BT' | 'BO' | 'BQ' | 'BA' | 'BW' | 'BV' | 'BR' | 'IO' | 'BN' | 'BG' | 'BF' | 'BI' | 'CV' | 'KH'
		| 'CM' | 'CA' | 'KY' | 'CF' | 'EA' | 'TD' | 'CL' | 'CN' | 'CX' | 'CP' | 'CC' | 'CO' | 'KM' | 'CG' | 'CD' | 'CK' | 'CR' | 'HR' | 'CU' | 'CW'
		| 'CY' | 'CZ' | 'CI' | 'DK' | 'DG' | 'DJ' | 'DM' | 'DO' | 'EC' | 'EG' | 'SV' | 'GQ' | 'ER' | 'EE' | 'SZ' | 'ET' | 'FK' | 'FO' | 'FJ'
		| 'FI' | 'FR' | 'GF' | 'PF' | 'TF' | 'GA' | 'GM' | 'GE' | 'DE' | 'GH' | 'GI' | 'GR' | 'GL' | 'GD' | 'GP' | 'GU' | 'GT' | 'GG' | 'GN'
		| 'GW' | 'GY' | 'HT' | 'HM' | 'VA' | 'HN' | 'HK' | 'HU' | 'IS' | 'IN' | 'ID' | 'IR' | 'IQ' | 'IE' | 'IM' | 'IL' | 'IT' | 'JM' | 'JP' | 'JE'
		| 'JO' | 'IC' | 'KZ' | 'KE' | 'KI' | 'KP' | 'KR' | 'KW' | 'KG' | 'LA' | 'LV' | 'LB' | 'LS' | 'LR' | 'LY' | 'LI' | 'LT' | 'LU' | 'MO' | 'MG'
		| 'MW' | 'MY' | 'MV' | 'ML' | 'MT' | 'MH' | 'MQ' | 'MR' | 'MU' | 'YT' | 'MX' | 'FM' | 'MD' | 'MC' | 'MN' | 'ME' | 'MS' | 'MA' | 'MZ'
		| 'MM' | 'NA' | 'NR' | 'NP' | 'NL' | 'NC' | 'NZ' | 'NI' | 'NE' | 'NG' | 'NU' | 'NF' | 'MK' | 'MP' | 'NO' | 'OM' | 'PK' | 'PW' | 'PS'
		| 'PA' | 'PG' | 'PY' | 'PE' | 'PH' | 'PN' | 'PL' | 'PT' | 'PR' | 'QA' | 'RE' | 'RO' | 'RU' | 'RW' | 'BL' | 'SH' | 'KN' | 'LC' | 'MF' | 'PM'
		| 'VC' | 'WS' | 'SM' | 'ST' | 'SA' | 'SN' | 'RS' | 'SC' | 'SL' | 'SG' | 'SX' | 'SK' | 'SI' | 'SB' | 'SO' | 'ZA' | 'GS' | 'SS' | 'ES' | 'LK'
		| 'SD' | 'SR' | 'SJ' | 'SE' | 'CH' | 'SY' | 'TW' | 'TJ' | 'TZ' | 'TH' | 'TL' | 'TG' | 'TK' | 'TO' | 'TT' | 'TA' | 'TN' | 'TR' | 'TM' | 'TC'
		| 'TV' | 'UG' | 'UA' | 'AE' | 'GB' | 'UM' | 'US' | 'UY' | 'UZ' | 'VU' | 'VE' | 'VN' | 'VG' | 'VI' | 'WF' | 'EH' | 'YE' | 'ZM' | 'ZW'
	)[]
	readonly ticketLevels: Readonly<Record<TicketLevel, TicketLevelConfig<keyof AddonConfigs & string>>>
	readonly addons: { [K in keyof AddonConfigs]: AddonConfig<AddonConfigs[K], keyof AddonConfigs & string, TicketLevel> }
	readonly rooms: readonly RoomConfig[]
	readonly apis: {
		readonly authsrv: {
			readonly url: string
			readonly appName: string
		}
		readonly attsrv: {
			readonly url: string
		}
		readonly paysrv: {
			readonly url: string
		}
		readonly roomsrv: {
			readonly url: string
			readonly enable: boolean
		}
	}
	readonly websiteLinks: {
		readonly privacyStatement: string
		readonly imprint: string
		readonly policies: string
		readonly hotelInfo: string
		readonly terms: string
		readonly rules: string
		readonly contact: string
	}
}

export const checkConfig = <
	TicketLevel extends string,
	AddonConfigs extends Readonly<Record<string, unknown>>,
// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
>(config: Config<TicketLevel, AddonConfigs>) => config
