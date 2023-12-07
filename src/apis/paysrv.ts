import { ajax, AjaxConfig, AjaxError } from 'rxjs/ajax'
import { catchError, concatMap, map } from 'rxjs/operators'
import config from '~/config'
/* eslint-disable camelcase */
import { sum } from 'ramda'
import { ErrorDto as CommonErrorDto, handleStandardApiErrors } from './common'
import { StatusCodes } from 'http-status-codes'
import { of } from 'rxjs'
import { AppError } from '~/state/models/errors'

export type ErrorMessage =
	| 'Status Error (Bad Request)'
	| 'Status Error (Unauthorized)'
	| 'Status Error (Forbidden)'
	| 'Status Error (Not Found)'
	| 'Status Error (Conflict)'
	| 'Status Error (Internal Server Error)'

export type ErrorDto = CommonErrorDto<ErrorMessage>

export type TransactionType = 'due' | 'payment'
export type Method = 'credit' | 'paypal' | 'transfer' | 'internal' | 'gift'
export type Status = 'tentative' | 'pending' | 'valid' | 'deleted'

export interface Amount {
	readonly currency: string // EUR
	readonly gross_cent: number // positive or negative amount in whole cents (the smallest currency donation to be precise)
	readonly vat_rate: number // VAT rate in percent, in Germany usually 7.0 or 19.0
}

export interface TransactionDto {
	// same as attendee id (we use the badge number as debitor id)
	readonly debitor_id: number

	// a reference id that can be used to search for a particular transaction
	readonly transaction_identifier: string // EF2022-000004-1230-184425-1234

	readonly transaction_type: TransactionType

	readonly method: Method

	readonly amount: Amount

	readonly comment: string

	readonly status: Status

	// this is where you find the paylink!
	readonly payment_start_url: string

	readonly effective_date: string // 2022-12-30

	readonly due_date: string // 2022-12-28

	// when this record was created
	readonly creation_date: string // 2022-06-24T11:12:13Z
}

export interface TransactionResponseDto {
	readonly payload: readonly TransactionDto[]
}

export interface InitiatePaymentResponseDto {
	readonly transaction: TransactionDto
}

export class PaySrvAppError extends AppError<StatusCodes> {
	// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
	constructor(err: AjaxError) {
		const errDto = err.response as ErrorDto

		super('paysrv', err.status, `Payment API error: ${JSON.stringify(errDto, undefined, 2)}`)
	}
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const apiCall = <T>({ path, ...cfg }: Omit<AjaxConfig, 'url'> & { path: string }) => ajax<T>({
	url: `${config.apis.paysrv.url}${path}`,
	crossDomain: true,
	withCredentials: true,
	...cfg,
}).pipe(
	catchError(handleStandardApiErrors(PaySrvAppError)),
)

export const calculateTotalPaid = (transactions: readonly TransactionDto[]) =>
	sum(
		transactions
			.filter(t => t.status === 'valid' && t.transaction_type === 'payment')
			.map(t => t.amount.gross_cent),
	)

/*
 * use this after a successful call to findTransactionsForBadgeNumber to calculate the outstanding dues
 *
 * The payment service handles all currency amounts as integers in the currency's smallest denomination, for EUR this is cents.
 */
export const calculateOutstandingDues = (transactions: readonly TransactionDto[]) =>
	sum(
		transactions
			.filter(t => t.status === 'valid')
			.map(t => t.transaction_type === 'due' ? t.amount.gross_cent : -t.amount.gross_cent),
	)

/*
 * use this after a successful call to findTransactionsForBadgeNumber to decide whether to display a
 * warning about not paying twice while a payment is being processed.
 *
 * Should also not generate a new paylink while this is the case.
 */
export const hasUnprocessedPayments = (transactions: readonly TransactionDto[]) =>
	transactions.some(t => t.status === 'pending' && t.transaction_type === 'payment')

/*
 * GET /transactions obtains all visible payment/dues transaction for the provided badge number.
 *
 * Replies with either a TransactionResponseDto, or ErrorDto.
 *
 * The badge number (called debitor id in the payment service) should come from the list returned by findMyRegistrations.
 * This will avoid 400, 403.
 *
 * 401: the user's token has expired. You should redirect them to the auth start and have them return here once refreshed.
 * 404: there are no visible transactions for this debitor id.
 * 500: It is important to communicate the ErrorDto's requestid field to the user, so they can give it to us, so we can look in the logs.
 */
export const findTransactionsForBadgeNumber = (badgeNumber: number) => apiCall<TransactionResponseDto>({
	path: `/transactions?debitor_id=${badgeNumber}`,
	method: 'GET',
}).pipe(
	map(result => result.response.payload),
	catchError(err => {
		if (err instanceof PaySrvAppError && err.code === StatusCodes.NOT_FOUND) {
			return of([] as readonly TransactionDto[])
		} else {
			throw err
		}
	}),
)

/*
 * POST /transactions/initiate-payment creates a payment that includes a payment link.
 *
 * Replies with either a TransactionDto, or ErrorDto.
 *
 * The badge number (called debitor id in the payment service) should come from the list returned by findMyRegistrations.
 * This will avoid 403.
 *
 * All other fields of the created payment are set correctly for a potential payment with the default payment provider,
 * usually type:payment, method:credit, status:tentative, a transaction id derived from the current timestamp and the
 * debitor id, etc.
 *
 * 400: assuming you sent a valid debitorId, means the current dues balance for this debitor is 0. They cannot pay anything.
 *      Usually this means, they have paid in a different session and you should reload their information.
 * 401: the user's token has expired. You should redirect them to the auth start and have them return here once refreshed.
 * 404: No dues transactions for this debitor id exist. Maybe they have not been approved yet.
 * 409: This debitor already has an open payment link, please use that one.
 * 500: It is important to communicate the ErrorDto's requestid field to the user, so they can give it to us, so we can look in the logs.
 */
export const initiateCreditCardPayment = (badgeNumber: number) => apiCall<InitiatePaymentResponseDto>({
	path: '/transactions/initiate-payment',
	method: 'POST',
	body: {
		debitor_id: badgeNumber,
	},
}).pipe(
	map(result => result.response.transaction),
)

export const initiateCreditCardPaymentOrUseExisting = (badgeNumber: number) =>
	findTransactionsForBadgeNumber(badgeNumber).pipe(
		concatMap(transactions => {
			const tentativeTransaction = transactions.find(t => t.transaction_type === 'payment' && t.method === 'credit' && t.status === 'tentative')

			return tentativeTransaction !== undefined
				? of(tentativeTransaction)
				: initiateCreditCardPayment(badgeNumber)
		}),
	)

export const initiateSepaPayment = (badgeNumber: number) => apiCall<InitiatePaymentResponseDto>({
	path: '/transactions/initiate-payment',
	method: 'POST',
	body: {
		debitor_id: badgeNumber,
		method: 'transfer',
	},
}).pipe(
	map(result => result.response.transaction),
)

export const initiateSepaPaymentOrUseExisting = (badgeNumber: number) =>
	findTransactionsForBadgeNumber(badgeNumber).pipe(
		concatMap(transactions => {
			const tentativeTransaction = transactions.find(t => t.transaction_type === 'payment' && t.method === 'transfer' && t.status === 'tentative')

			return tentativeTransaction !== undefined
				? of(tentativeTransaction)
				: initiateSepaPayment(badgeNumber)
		}),
	)
