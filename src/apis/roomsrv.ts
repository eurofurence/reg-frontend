/* eslint-disable camelcase */
import { catchError } from 'rxjs/operators'
import { ajax, AjaxConfig, AjaxError } from 'rxjs/ajax'
import config from '~/config'
import { ErrorDto as CommonErrorDto, handleStandardApiErrors } from './common'
import { AppError } from '~/state/models/errors'
import type { Replace } from 'type-fest'

export type RoomErrorMessage =
	| 'auth.forbidden'
	| 'auth.unauthorized'
	| 'group.data.duplicate'
	| 'group.data.invalid'
	| 'group.id.invalid'
	| 'group.id.notfound'
	| 'group.invite.mismatch'
	| 'group.mail.error'
	| 'group.member.duplicate'
	| 'group.member.notfound'
	| 'group.owner.notfound'
	| 'group.owner.cannot.remove'
	| 'group.parse.error'
	| 'group.read.error'
	| 'group.write.error'
	| 'room.group.notfound'
	| 'room.id.invalid'
	| 'room.id.notfound'
	| 'room.read.error'
	| 'unknown'

export type RoomErrorDto = CommonErrorDto<RoomErrorMessage>

export interface RoomCountdownDto {
	readonly currentTime: string
	readonly targetTime: string
	readonly countdown: number
	readonly secret: string
}

export interface MemberDto {
	readonly id: number // badge number
	readonly nickname: string
	readonly avatar: string // url to avatar, may be empty
	readonly hasKey: boolean
}

export type GroupFlag =
	| 'public' // visible in listing for approved attendees
    | 'wheelchair' // require handicap accessibility

export interface GroupDto {
	readonly id: string
	readonly name: string
	readonly flags: GroupFlag[]
	readonly comments: string
	readonly maximum_size: number
	readonly owner: number // badge number
	readonly members: MemberDto[]
	readonly invites: MemberDto[]
}

export interface GroupListDto {
	readonly groups: GroupDto[]
}

export interface GroupCreateDto {
	readonly name: string
	readonly flags: GroupFlag[]
	readonly comments: string
}

export type RoomFlag =
	| 'wheelchair' // has handicap accessibility

export interface RoomDto {
	readonly id: string
	readonly name: string
	readonly flags: RoomFlag[]
	readonly comments: string
	readonly size: number
	readonly members: MemberDto[]
}

export class RoomSrvAppError extends AppError<Replace<RoomErrorMessage, '.', '-', { all: true }>> {
	// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
	constructor(err: AjaxError) {
		const errDto : RoomErrorDto = err.response as RoomErrorDto

		super('roomsrv', errDto.message.replaceAll('.', '-'), `Room API Error: ${JSON.stringify(errDto, undefined, 2)}`)
	}
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const apiCall = <T>({ path, ...cfg }: Omit<AjaxConfig, 'url'> & { path: string }) => ajax<T>({
	url: `${config.apis.roomsrv.url}${path}`,
	crossDomain: true,
	withCredentials: true,
	...cfg,
}).pipe(
	catchError(handleStandardApiErrors(RoomSrvAppError)),
)

/*
 * GET /countdown checks if room reservation / forming room groups is open.
 *
 * Replies with
 * - a CountdownDto and http status 200,
 * - or RoomErrorDto with message "auth.unauthorized" and http status 401,
 * - If room booking is limited to approved attendees (configurable), may also respond with RoomErrorDto with
 *   message "auth.unauthorized" and http status 403.
 *
 * If the countdown dto contains countdown = 0, room reservations are open.
 *
 * For a **youth-hostel style** conventions, there is not really a need to reserve a room,
 * every registration includes one bed in some room, as long as the attendee is in status approved.
 * The convention admins will only approve as many people as they have beds in the youth hostel.
 * The only thing an attendee can do is form a room group to influence who else will be in the room
 * with them. At a certain time before the convention, the admins will assign groups to rooms,
 * possibly putting multiple groups in the same room to fill it. At that point, room groups are locked down
 * for ordinary attendees. The only reason to set a starting time for forming room groups is to avoid
 * load on the server during initial registration.
 *
 * For a **hotel-style** convention, where attendees can buy a room as an addition to their registration,
 * there may not necessarily be enough hotel rooms for everyone. For these conventions,
 * the attendee forms a room group to control who else will be rooming with them, and the
 * room group is assigned 1:1 to a hotel room of matching size. For these situations,
 * if demand exceeds supply, setting a starting time for room reservations ensures a fair
 * chance at room distribution.
 *
 * For a **self-booking style** convention, where every attendee books directly with the hotel and
 * needs a secret code to do so, this is the only endpoint needed, and all other endpoints
 * will refuse to work with a 403. When the starting time is reached (countdown = 0),
 * the field "secret" will be filled with a secret code to use for booking via phone or email.
 * The registration system does not know who successfully booked a room, and bookings
 * have no impact on the invoice (that's the point of this style - the hotel may have an exclusive contract
 * with a booking provider, or the convention may wish to avoid liability for the hotel booking
 * cost, or a number of other reasons to stay out of the transaction such as travel insurance laws
 * or sales tax).
 *
 * **Note**: the starting time may depend on who asks for it. Staff may have an earlier room
 * booking start than normal attendees. Or sponsors. Or something. Also, the secret code may
 * be different for staff and non-staff. Don't cache this between different attendees.
 *
 * 401: The user is not correctly logged in, or the token has expired, and you need to
 * redirect the user to the auth start, possibly setting some return URL as dropoff so the user can return
 * to the current place, which should then check this endpoint again.
 *
 * 403: The user is not currently allowed to participate in room booking / room groups.
 * Maybe they do not have a valid registration, or are not yet approved. Note that for
 * self-booking style conventions, needing a valid registration may not be necessary
 * for using this endpoint, depending on backend configuration.
 *
 * This endpoint is optimized in the backend for high traffic, so it is safe to call during initial
 * room booking.
 */
export const roomCountdownCheck = () => apiCall<RoomCountdownDto>({
	path: '/countdown',
	method: 'GET',
})

/*
 * POST /groups creates a new group.
 *
 * Replies with the resource location in the location header (ending in the assigned uuid), or RoomErrorDto.
 *
 * The current user is made owner of the group, and will initially be the only member.
 *
 * For youth hostel style conventions, they will then have the option to invite other attendees,
 * or if the group is set to public, other attendees can find its uuid, and request to be included.
 * Since every valid registration includes a bed in some room anyway, no invoice changes occur.
 *
 * For hotel style conventions, if this succeeds, this means the attendee has just reserved a room,
 * and the room price has been added to their invoice. They may invite others to their room, up to the
 * room capacity, and thus share the cost.
 *
 * Each attendee can be a member of at most one group, and they lose it if cancelled, e.g. due to failure to pay.
 *
 * 201: success.
 *
 * 400: This indicates a bug in this app because any validation errors should have been caught during field validation.
 * The RoomErrorDto's details field will contain english language messages that describe the error in detail.
 * It is important to communicate the requestid field to the user, so they can give it to us, so we can look in the logs.
 *
 * 401: The user's token has expired, and you need to redirect them to the auth start to refresh it.
 *
 * 409: Duplicate (same group name), or this user already is in a group (use /groups/my to check).
 *
 * 500: It is important to communicate the requestid field to the user, so they can give it to us, so we can look in the logs.
 *
 * This endpoint is optimized in the backend for high traffic, so it is safe to call during initial room booking.
 */
export const createNewGroup = (group: GroupCreateDto) => apiCall({
	path: '/groups',
	method: 'POST',
	body: group,
})

/*
 * GET /groups/my obtains the group the current user belongs to.
 *
 * Returns GroupDto and status 200, or RoomErrorDto and 401, 403, 404, 500.
 *
 * 401: The user's token has expired, and you need to redirect them to the auth start to refresh it.
 * 403: This user does not have a valid registration and thus is not eligible for groups.
 * 404: This user, while eligible, is not currently in a group.
 * 500: It is important to communicate the RoomErrorDto's requestid field to the user, so they can give it to us, so we can look in the logs.
 */
export const findMyGroup = () => apiCall<GroupDto>({
	path: '/groups/my',
	method: 'GET',
})

/*
 * GET /groups?show=public lists public groups, which may be available to request joining.
 *
 * Returns GroupListDto and status 200, or RoomErrorDto and 401, 403, 500.
 *
 * 401: The user's token has expired, and you need to redirect them to the auth start to refresh it.
 * 403: This user does not have a valid registration and thus may not list groups (bars e.g. cancelled regs from viewing public groups)
 * 500: It is important to communicate the RoomErrorDto's requestid field to the user, so they can give it to us, so we can look in the logs.
 */
export const findPublicGroups = () => apiCall<GroupListDto>({
	path: '/groups?show=public',
	method: 'GET',
})

/*
 * GET /groups/{uuid} reads a specific group.
 *
 * Returns GroupDto and status 200, or RoomErrorDto and 400, 401, 403, 404, 500.
 *
 * 400: the uuid was not valid
 * 401: The user's token has expired, and you need to redirect them to the auth start to refresh it.
 * 403: This user does not have access to this group.
 * 404: No such group.
 * 500: It is important to communicate the RoomErrorDto's requestid field to the user, so they can give it to us, so we can look in the logs.
 */
export const getGroup = (uuid: string) => apiCall<GroupDto>({
	path: `/groups/${uuid}`,
	method: 'GET',
})

/*
 * PUT /groups/{uuid} updates a specific group.
 *
 * Note that you cannot use this to change the group members!
 *
 * Returns status 204, or RoomErrorDto and 400, 401, 403, 404, 409, 500.
 *
 * 400: the uuid or request body was not valid, or you tried to make changes to the group members.
 * 401: The user's token has expired, and you need to redirect them to the auth start to refresh it.
 * 403: This user does not have permission to update this group.
 * 404: No such group.
 * 409: Your changes would turn this group into a duplicate (for example same name as existing other group)
 * 500: It is important to communicate the RoomErrorDto's requestid field to the user, so they can give it to us, so we can look in the logs.
 */
export const updateGroup = (uuid: string, group: GroupDto) => apiCall({
	path: `/groups/${uuid}`,
	method: 'PUT',
	body: group
})

/*
 * DELETE /groups/{uuid} deletes a group.
 *
 * Note that you cannot use this while there are still any group members other than the owner! You must kick them out first.
 *
 * Deleting a group will automatically expire all pending invites.
 *
 * Returns status 204, or RoomErrorDto and 400, 401, 403, 404, 409, 500.
 *
 * 400: the uuid was not valid.
 * 401: The user's token has expired, and you need to redirect them to the auth start to refresh it.
 * 403: This user does not have permission to delete this group (not its owner and not an admin).
 * 404: No such group.
 * 409: There were still other people in the group. Must remove them first so only the owner remains.
 * 500: It is important to communicate the RoomErrorDto's requestid field to the user, so they can give it to us, so we can look in the logs.
 */
export const deleteGroup = (uuid: string) => apiCall({
	path: `/groups/${uuid}`,
	method: 'DELETE'
})

/*
 * POST /groups/{uuid}/members/{badgenumber} invite or add a group member
 *
 * Adds an attendee to a group, or invites them, or accepts an already existing invitation.
 *
 * **Limitations**
 *
 * Only attending attendees can be added to a group or invited to groups.
 *
 * Attendees cannot be in more than one group. Attendees who are members of any group cannot be invited to any group.
 *
 * The moment an attendee becomes a member of any group, any existing invitations for that attendee are discarded.
 *
 * For a single group, there can be only one invitation for each attendee.
 *
 * The total number of invitations plus members of a group cannot exceed its size. Example: If your
 * group has 2 members, and maximum group size is 4, you can invite at most 2 attendees. This is to prevent
 * invitation spam.
 *
 * If an attendee is already in a group, or has already been individually assigned to a room, then they
 * cannot be added to a group any more.
 *
 * **Case 1: Owner invites first**
 *
 * The owner may use this to make an invitation to their group. This will create an invitation, including a code that
 * the invited attendee will need to join the group. (Exception: if the invited attendee has declined a previous
 * invitation and specified that they do not desire further invitations to this group (see DELETE description),
 * the invitation attempt will be auto-denied.)
 *
 * For the request, the owner needs to supply the nickname as additional parameter, to prove that they know who
 * they are inviting (a little bit of extra protection against invitation spam).
 *
 * The attendee then uses this same endpoint (with the code) to accept the invitation, thus becoming a member.
 * The attendee can decline an invitation by instead sending DELETE.
 *
 * To accept the invite, the attendee needs to supply the invitation code as additional parameter.
 *
 * **Case 2: Attendee (not owner) requests to join**
 *
 * If a group has the "public" flag, an attendee can request to join it without an active invitation.
 * This will create a self-initiated invitation. (Exception: if the owner has declined a previous such invitation
 * and specified that they do not desire further inquiries from this attendee (see DELETE description),
 * the inquiry will be auto-denied.)
 *
 * For the request, all the attendee needs to know is the group uuid, and the group needs to have the public flag.
 *
 * When a self-initiated invitation exists, the group owner approves it by using this same endpoint. The
 * attendee then becomes a member. The owner can decline by instead sending DELETE.
 *
 * For the approval, no extra parameters are needed.
 *
 * **Responses:**
 *
 * 204: success
 * 400: invalid group id or badge number supplied
 * 401: The user's token has expired, and you need to redirect them to the auth start to refresh it.
 * 403: Permission denied.
 * 404: Attendee or group not found, or wrong nickname, or wrong invitation code, or not a public group.
 * 409: Duplicate assignment, or this attendee is already in another group, or has been individually assigned to a room.
 * 500: It is important to communicate the RoomErrorDto's requestid field to the user, so they can give it to us, so we can look in the logs.
 */
export const joinOrInviteToGroup = (uuid: string, badgenumber: number, nickname?: string, code?: string) => apiCall({
	path: `/groups/${uuid}/members/${badgenumber}?nickname=${nickname}&code=${code}`,
	method: 'POST'
})

/*
 * DELETE /groups/{uuid}/members/{badgenumber} decline or remove a group member.
 *
 * Removes the attendee with the given badge number from the group (or its list of invitations). Possibly
 * also add an entry to the group's auto-deny list.
 *
 * **Permissions**
 *
 * Group owners can remove members/revoke invitations.
 *
 * Members can remove themselves/decline invitations.
 *
 * **Limitations**
 *
 * If a member is the current group owner, this fails with 409 conflict. First must reassign the group owner via
 * an update to the group resource.
 *
 * **Auto-Deny**
 *
 * If the autodeny parameter is set to true, in addition to removing the group membership/invitation, the
 * badgenumber is added to an auto-decline list. Further attempts to invite/add this attendee into the group
 * are automatically declined.
 *
 * **Responses:**
 *
 * 204: success
 * 400: invalid group id or badge number supplied
 * 401: The user's token has expired, and you need to redirect them to the auth start to refresh it.
 * 403: Permission denied.
 * 404: Attendee or group not found, or not a member.
 * 409: Conflict, this attendee is currently the owner of the group. Either change the owner first, or disband (delete) the group completely after kicking out everyone else.
 * 500: It is important to communicate the RoomErrorDto's requestid field to the user, so they can give it to us, so we can look in the logs.
 */
export const kickOrDeclineFromGroup = (uuid: string, badgenumber: number, autodeny?: boolean) => apiCall({
	path: `/groups/${uuid}/members/${badgenumber}?autodeny=${autodeny}`,
	method: 'DELETE'
})

/*
 * GET /rooms/my obtains the room the current user has been assigned to.
 *
 * Visibility of this information depends on the "final" flag that is set on the room, so admins can start planning
 * room assignments without them becoming immediately visible to users.
 *
 * This endpoint works even for admins, giving them the room they are in.
 *
 * Returns RoomDto and status 200, or RoomErrorDto and 401, 403, 404, 500.
 *
 * 401: The user's token has expired, and you need to redirect them to the auth start to refresh it.
 * 403: The user does not have permission to see their room (maybe not an active registration?)
 * 404: You are not in any rooms (that are visible to you). Note that this may happen even if the attendee actually is in a room, but the room isn't flagged as "final". This is to prevent showing premature (wrong) room information while the admins are still planning room assignments.
 * 500: It is important to communicate the RoomErrorDto's requestid field to the user, so they can give it to us, so we can look in the logs.
 */
export const findMyRoom = () => apiCall<RoomDto>({
	path: '/rooms/my',
	method: 'GET',
})
