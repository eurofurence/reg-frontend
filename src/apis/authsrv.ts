/* eslint-disable camelcase */

import { catchError, map } from 'rxjs/operators'
import { ajax, type AjaxConfig, type AjaxError } from 'rxjs/ajax'
import config from '~/config'
import type { UserInfo } from '~/state/models/auth'
import {
  type ErrorDto as CommonErrorDto,
  handleStandardApiErrors,
} from './common'
import { AppError } from '~/state/models/errors'
import type { Replace } from 'type-fest'

export interface UserInfoDto {
  readonly subject: string
  readonly name: string
  readonly email: string
  readonly email_verified: boolean
  readonly groups: readonly string[]
}

export type ErrorMessage = 'auth.unauthorized' | 'auth.idp.error' | 'unknown'

export type ErrorDto = CommonErrorDto<ErrorMessage>

export class AuthSrvAppError extends AppError<
  Replace<ErrorMessage, '.', '-', { all: true }>
> {
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  constructor(err: AjaxError) {
    const errDto = err.response as ErrorDto

    super(
      'authsrv',
      errDto.message.replaceAll('.', '-'),
      `Authentication API Error: ${JSON.stringify(errDto, undefined, 2)}`
    )
  }
}

const userInfoDtoToUserInfo = (userInfo: UserInfoDto): UserInfo => ({
  subject: userInfo.subject,
  name: userInfo.name,
  email: userInfo.email,
  emailVerified: userInfo.email_verified,
})

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const apiCall = <T>({
  path,
  ...cfg
}: Omit<AjaxConfig, 'url'> & { path: string }) =>
  ajax<T>({
    url: `${config.apis.authsrv.url}${path}`,
    crossDomain: true,
    withCredentials: true,
    ...cfg,
  }).pipe(catchError(handleStandardApiErrors(AuthSrvAppError)))

/*
 * GET /frontend-userinfo obtains information about the logged in user: their assigned relevant roles, and their email address,
 * but does NOT validate this with the identity provider, instead relying on local token parsing only.
 *
 * The user is determined from the cookies set by /v1/dropoff. This endpoint allows us to
 * use a http only secure cookie, and only exposes user information actually needed by the registration
 * system.
 *
 * The token is locally validated ONLY, both signature and expiry are checked. This is enough for the
 * frontend, because the backend needs to check it again anyway.
 *
 * Frontend: use this (computationally cheap) endpoint to determine information about the logged in user,
 * like prefilling their email address, or determining whether to show navigation to the admin frontend.
 * If you get a 401, redirect the user to /v1/auth.
 *
 * This endpoint is optimized in the backend for high traffic, so it is safe to call during initial reg.
 */
export const getUserInfo = () =>
  apiCall<UserInfoDto>({
    path: '/frontend-userinfo',
    method: 'GET',
  }).pipe(map((result) => userInfoDtoToUserInfo(result.response)))
