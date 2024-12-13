import config from '~/config'
import { Locale } from '~/localization'
import { includes } from '~/util/includes'
import { ReadonlyDateTime } from '~/util/readonly-types'
import { PackageInfo } from '~/apis/attsrv'

type TicketLevelConfig = typeof config.ticketLevels
type TicketAddonsConfig = typeof config.addons

/* eslint-disable @typescript-eslint/indent */
type ParseAddonOption<T> =
	T extends { readonly type: 'select', readonly items: readonly (infer I)[] } ? I
	: never
/* eslint-enable @typescript-eslint/indent */

export type RegistrationStatus =
	| 'unsubmitted'
	| 'new'
	| 'approved'
	| 'partially-paid'
	| 'paid'
	| 'checked-in'
	| 'cancelled'
	| 'waiting'

export type TicketType
	= { readonly type: 'full' }
	| { readonly type: 'day', readonly day: ReadonlyDateTime }

export type TicketLevelAddons = {
	readonly [K in keyof TicketAddonsConfig]: {
		readonly selected: boolean
		readonly options: {
			[L in keyof TicketAddonsConfig[K]['options']]: ParseAddonOption<TicketAddonsConfig[K]['options'][L]>
		}
	}
}

export type TicketLevel = {
	readonly level: keyof TicketLevelConfig
	readonly addons: TicketLevelAddons
}

export interface ContactInfo {
	readonly email: string
	readonly phoneNumber: string
	readonly telegramUsername: string | null
	readonly street: string
	readonly city: string
	readonly postalCode: string
	readonly stateOrProvince: string | null
	readonly country: (typeof config.allowedCountries)[number]
}

export interface OptionalInfo {
	readonly notifications: {
		readonly art: boolean
		readonly animation: boolean
		readonly music: boolean
		readonly fursuiting: boolean
	}
	readonly digitalConbook: boolean
	readonly comments: string | null
}

export interface PersonalInfo {
	readonly nickname: string
	readonly firstName: string
	readonly lastName: string
	readonly dateOfBirth: ReadonlyDateTime
	readonly fullNamePermission: boolean
	readonly spokenLanguages: readonly string[]
	readonly pronouns: string | null
	readonly wheelchair: boolean
}

export interface RegistrationInfo {
	readonly preferredLocale: Locale
	readonly ticketType: TicketType
	readonly ticketLevel: TicketLevel
	readonly contactInfo: ContactInfo
	readonly optionalInfo: OptionalInfo
	readonly personalInfo: PersonalInfo
	readonly originalFlags?: string
	readonly originalPackages?: PackageInfo[]
}

export interface PaymentInfo {
	readonly paid: number
	readonly due: number
	readonly unprocessedPayments: boolean
}

export interface UnsubmittedRegistration {
	readonly status: 'unsubmitted'
	readonly registrationInfo: Partial<RegistrationInfo>
}

export interface PendingRegistration {
	readonly id: number
	readonly status: 'new' | 'waiting'
	readonly registrationInfo: RegistrationInfo
}

export interface ApprovedRegistration {
	readonly id: number
	readonly status: 'approved' | 'partially-paid' | 'paid' | 'checked-in' | 'cancelled'
	readonly registrationInfo: RegistrationInfo
	readonly paymentInfo: PaymentInfo
}

export type SubmittedRegistration = PendingRegistration | ApprovedRegistration

export type Registration = UnsubmittedRegistration | SubmittedRegistration

export const isUnsubmitted = (r: Registration): r is UnsubmittedRegistration =>
	r.status === 'unsubmitted'

export const isSubmitted = (r: Registration): r is SubmittedRegistration =>
	r.status !== 'unsubmitted'

export const isPending = (r: Registration): r is PendingRegistration =>
	includes(['new', 'waiting'] as const, r.status)

export const isApproved = (r: Registration): r is ApprovedRegistration =>
	includes(['approved', 'partially-paid', 'paid', 'checked-in', 'cancelled'] as const, r.status)
