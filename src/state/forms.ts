import type { FieldValues } from 'react-hook-form'
import type { Builtin } from 'ts-essentials'
import type { AdditionalInfo, GuestsInfo, RoomInfo } from './models/hotel-booking'
import type { ContactInfo, OptionalInfo, PersonalInfo, TicketLevel, TicketType } from './models/register'

/* eslint-disable @typescript-eslint/indent */
export declare type DeepField<T> = T extends boolean
    ? T
    : // : '' extends T
      // ? T
      T extends Builtin
      ? T | null
      : T extends readonly unknown[]
        ? T
        : T extends {}
          ? { readonly [K in keyof T]: DeepField<T[K]> }
          : T | null
/* eslint-enable @typescript-eslint/indent */

export type Form<ValuesType extends FieldValues> = {
    readonly defaultValues: DeepField<ValuesType>
}

type FormValuesTypes = {
    'register-ticket-type': { readonly type: TicketType['type'] }
    'register-ticket-day': { readonly day: string }
    'register-ticket-level': TicketLevel
    'register-personal-info': Omit<PersonalInfo, 'pronouns' | 'dateOfBirth'> & {
        readonly pronounsSelection: 'prefer-not-to-say' | 'He/Him' | 'She/Her' | 'They/Them' | 'other'
        readonly pronounsOther: string
        readonly dateOfBirth: string
    }
    'register-contact-info': ContactInfo
    'register-optional-info': OptionalInfo
    'register-summary': { readonly rulesAndConditionsAccepted: boolean }
    'hotel-booking-room': RoomInfo
    'hotel-booking-guests': GuestsInfo
    'hotel-booking-additional-info': AdditionalInfo
}

export type FormIds = keyof FormValuesTypes
export type FormValuesType<FId extends FormIds> = DeepField<FormValuesTypes[FId]>
