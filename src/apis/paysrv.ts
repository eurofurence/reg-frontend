import { ajax } from 'rxjs/ajax'
import config from '~/config'

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
export const findTransactionsForBadgeNumber = (debitorId: bigint) => ajax({
	url: `${config.apis.paysrv.url}/transactions?debitor_id=${debitorId}`,
	method: 'GET',
	crossDomain: true,
	withCredentials: true,
})
