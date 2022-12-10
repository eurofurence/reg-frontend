import { ajax } from 'rxjs/ajax'
import config from '~/config'
/* eslint-disable camelcase */
import { RegistrationInfo } from '~/state/models/register'

/*
 * GET /countdown checks if registration is open, or when it will open, checking that the user is logged in in the process.
 *
 * Replies with either a CountdownDto and http status 200, or ErrorDto with message "auth.unauthorized" and http status 401.
 *
 * If the countdown dto contains countdown = 0, the reg is open and the send button should be available.
 *
 * This is also the performance-optimal way to check that a user is logged in, and determine whether the user will be able
 * to submit a new registration at this point in time.
 *
 * 401: The user is not correctly logged in, or the token has expired, and you need to
 * redirect the user to the auth start, possibly setting some return URL as dropoff so the user can return to the current place,
 * which should then check this endpoint again.
 *
 * This endpoint is optimized in the backend for high traffic, so it is safe to call during initial reg.
 */
export const registrationCountdownCheck = () => ajax({
	url: `${config.apis.attsrv.url}/countdown`,
	method: 'GET',
	crossDomain: true,
	withCredentials: true,
})

/*
 * POST /attendees creates a new registration.
 *
 * Replies with the resource location in the location header (ending in the assigned badge number), or an ErrorDto.
 *
 * 201: You should communicate the assigned badge number to the user, so they know they successfully registered.
 *
 * 400: This indicates a bug in this app because any validation errors should have been caught during field validation.
 * The ErrorDto's details field will contain english language messages that describe the error in detail.
 * It is important to communicate the ErrorDto's requestid field to the user, so they can give it to us, so we can look in the logs.
 *
 * 401: The user's token has expired, and you need to redirect them to the auth start to refresh it.
 *
 * 409: Duplicate (same nickname + email + zip code).
 *
 * 500: It is important to communicate the ErrorDto's requestid field to the user, so they can give it to us, so we can look in the logs.
 *
 * This endpoint is optimized in the backend for high traffic, so it is safe to call during initial reg.
 */
export const submitRegistration = (registrationInfo: RegistrationInfo) => ajax({
	url: `${config.apis.attsrv.url}/attendees`,
	method: 'POST',
	crossDomain: true,
	withCredentials: true,
	body: {
		nickname: registrationInfo.personalInfo.nickname,
		first_name: registrationInfo.personalInfo.firstName,
		last_name: registrationInfo.personalInfo.lastName,
		street: registrationInfo.contactInfo.street,
		zip: registrationInfo.contactInfo.postalCode,
		city: registrationInfo.contactInfo.city,
		country: registrationInfo.contactInfo.country.toUpperCase(),
		country_badge: registrationInfo.personalInfo.spokenLanguages[0].toUpperCase(),
		email: registrationInfo.contactInfo.email,
		phone: registrationInfo.contactInfo.phoneNumber,
		// telegram: "string",
		birthday: '1995-02-15',
		gender: 'notprovided',
		pronouns: registrationInfo.personalInfo.pronouns,
		tshirt_size: registrationInfo.ticketLevel.addons.tshirt.size,
		options: Object
			.entries(registrationInfo.optionalInfo.notifications)
			.filter(([, enabled]) => enabled)
			.map(([id]) => ({
				animation: 'anim',
				art: 'art',
				music: 'music',
				fursuiting: 'suit',
			}[id]))
			.join(','),
		packages: 'room-none,attendance,stage',
		user_comments: registrationInfo.optionalInfo.comments,
	},
})

/*
 * GET /attendees obtains the badge numbers of the registrations owned by the current user.
 *
 * Returns AttendeeIdListDto and status 200, or ErrorDto and 401, 404, 500.
 *
 * 401: The user's token has expired, and you need to redirect them to the auth start to refresh it.
 * 404: This user has no registrations.
 * 500: It is important to communicate the ErrorDto's requestid field to the user, so they can give it to us, so we can look in the logs.
 *
 * This endpoint should be avoided during initial reg, as it entails a database select.
 */
export const findMyRegistrations = () => ajax({
	url: `${config.apis.attsrv.url}/attendees`,
	method: 'GET',
	crossDomain: true,
	withCredentials: true,
})

/*
 * GET /attendees/{id} obtains the data for an attendee. Used to load an attendee during edit mode.
 *
 * id should come from the list returned by findMyRegistrations. Then a 400, 403, 404 should not occur.
 *
 * Returns AttendeeDto and status 200, or ErrorDto and an error status.
 *
 * 401: The user's token has expired, and you need to redirect them to the auth start to refresh it.
 * 500: It is important to communicate the ErrorDto's requestid field to the user, so they can give it to us, so we can look in the logs.
 */
export const loadRegistration = (id: bigint) => ajax({
	url: `${config.apis.attsrv.url}/attendees/${id}`,
	method: 'GET',
	crossDomain: true,
	withCredentials: true,
})
