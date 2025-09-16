import { createSelector } from 'reselect'
import config from '~/config'
import { createLuxonFluentDateTime } from '~/util/fluent-values'
import { AppState } from '..'
import { buildInvoice, UncalculatedInvoiceItem } from '../models/invoice'
import { isOpen } from '~/state/reducers/register'
import { getUserInfo } from './auth'
import { isApproved, isUnsubmitted } from '../models/register'

export const isRegistrationOpen = () => (s: AppState) => s.register.isOpen
export const isEditMode = () => (s: AppState) => isOpen(s.register) && !isUnsubmitted(s.register.registration)

export const getPaidAmount = () => (s: AppState) => isOpen(s.register) && isApproved(s.register.registration) ? s.register.registration.paymentInfo.paid : undefined
export const getDueAmount = () => (s: AppState) => isOpen(s.register) && isApproved(s.register.registration) ? s.register.registration.paymentInfo.due : undefined
export const hasUnprocessedPayments = () => (s: AppState) => isOpen(s.register) && isApproved(s.register.registration) ? s.register.registration.paymentInfo.unprocessedPayments : undefined

export const getRegistrationInfo = () => (s: AppState) => isOpen(s.register) ? s.register.registration.registrationInfo : undefined
export const getRegistrationId = () => (s: AppState) => isOpen(s.register) && !isUnsubmitted(s.register.registration) ? s.register.registration.id : undefined
export const getStatus = () => (s: AppState) => isOpen(s.register) ? s.register.registration.status : undefined
export const getPreferredLocale = () => (s: AppState) => isOpen(s.register) ? s.register.registration.registrationInfo.preferredLocale : undefined
export const getTicketType = () => (s: AppState) => isOpen(s.register) ? s.register.registration.registrationInfo.ticketType : undefined
export const getTicketLevel = () => (s: AppState) => isOpen(s.register) ? s.register.registration.registrationInfo.ticketLevel : undefined
export const getPersonalInfo = () => (s: AppState) => isOpen(s.register) ? s.register.registration.registrationInfo.personalInfo : undefined
export const getContactInfo = () => (s: AppState) => isOpen(s.register) ? s.register.registration.registrationInfo.contactInfo : undefined
export const getOptionalInfo = () => (s: AppState) => isOpen(s.register) ? s.register.registration.registrationInfo.optionalInfo : undefined

type AddonCountOptions = {
	readonly count?: string
}

export const getInvoice = createSelector(getTicketType(), getTicketLevel(), getPaidAmount(), getDueAmount(), (ticketType, ticketLevel, paid, due) => {
	if (ticketLevel === undefined || ticketType === undefined) {
		return undefined
	}

	const ticketLevelConfig = config.ticketLevels[ticketLevel.level ?? 'standard'] // cannot be null here, just making ts happy

	const convertCount = (countOptions: AddonCountOptions): number => {
		const code = countOptions.count ?? '1'

		const withoutPrefix = code.replace(/^c/u, '')

		return parseInt(withoutPrefix, 10)
	}

	const ticketLine: UncalculatedInvoiceItem = ticketType.type === 'day'
		? {
			id: 'register-ticket-type-day',
			amount: 1,
			options: { day: createLuxonFluentDateTime(ticketType.day) },
			unitPrice: ticketLevelConfig.prices.day,
		}
		: {
			id: 'register-ticket-type-full',
			amount: 1,
			options: { start: createLuxonFluentDateTime(config.eventStartDate), end: createLuxonFluentDateTime(config.eventEndDate) },
			unitPrice: ticketLevelConfig.prices.full,
		}

	const addonLines = Object.entries(ticketLevel.addons)
		.filter(([, addon]) => addon.selected)
		.map(([addonId, addon]) => ({
			id: `register-ticket-addons-${addonId}`,
			amount: convertCount(addon.options as AddonCountOptions),
			unitPrice: config.ticketLevels[ticketLevel.level ?? 'standard'].includes?.includes(addonId) ?? false ? 0 : config.addons[addonId].price,
			options: addon.options,
		}))

	return buildInvoice([ticketLine, ...addonLines], { paid, due })
})

export const getVerifiedEmails = () => (s: AppState) => {
	const editMode = isEditMode()(s)
	const userEmail = getUserInfo()(s)!.email

	return editMode ? [getContactInfo()(s)!.email, userEmail] : [userEmail]
}
