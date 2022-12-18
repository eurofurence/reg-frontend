export type TicketType
	= { readonly type: 'full' }
	| { readonly type: 'day', readonly day: string }

export type TicketLevel = {
	readonly level: 'standard' | 'sponsor' | 'super-sponsor'
	readonly addons: {
		readonly stagePass: {
			readonly selected: boolean
		}
		readonly tshirt: {
			readonly selected: boolean
			readonly size: 'S' | 'M' | 'L' | 'XL' | 'XXL'
		}
	}
}

export interface ContactInfo {
	readonly email: string
	readonly phoneNumber: string
	readonly telegramUsername: string
	readonly street: string
	readonly city: string
	readonly postalCode: string
	readonly stateOrProvince: string
	readonly country: string
}

export interface OptionalInfo {
	readonly notifications: {
		readonly art: boolean
		readonly animation: boolean
		readonly music: boolean
		readonly fursuiting: boolean
	}
	readonly comments: string
}

export interface PersonalInfo {
	readonly nickname: string
	readonly firstName: string
	readonly lastName: string
	readonly fullNamePermission: boolean
	readonly spokenLanguages: readonly string[]
	readonly pronouns: string
	readonly wheelchair: boolean
}

export interface RegistrationInfo {
	readonly ticketType: TicketType
	readonly ticketLevel: TicketLevel
	readonly contactInfo: ContactInfo
	readonly optionalInfo: OptionalInfo
	readonly personalInfo: PersonalInfo
}
