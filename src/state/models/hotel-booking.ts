export interface RoomInfo {
    readonly type: string
}

export interface GuestInfo {
    readonly firstName: string
    readonly lastName: string
    readonly email: string
    readonly phoneNumber: string
    readonly street: string
    readonly city: string
    readonly postalCode: string
    readonly stateOrProvince: string
    readonly country: string
}

export type GuestsInfo = {
    readonly guests: readonly GuestInfo[]
}

export interface AdditionalInfo {
    readonly comments: string
}

export interface HotelBookingInfo {
    readonly roomInfo: RoomInfo
    readonly guestsInfo: GuestsInfo
    readonly additionalInfo: AdditionalInfo
}
