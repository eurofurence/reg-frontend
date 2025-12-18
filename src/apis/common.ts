/* eslint-disable camelcase */

import { StatusCodes } from 'http-status-codes'
import { AjaxError, AjaxTimeoutError } from 'rxjs/ajax'
import { FrontendAppError } from '~/state/models/errors'

// We expect this error to always be caught, so it doesn't need to have user friendly localizations.
export class LoginRequiredError extends Error {
  constructor() {
    super('login is required')
  }
}

export interface ErrorDto<ErrorMessage extends string> {
  // The time at which the error occurred.
  readonly timestamp: string // 2006-01-02T15:04:05+07:00

  // An internal trace id assigned to the error. Used to find logs associated with errors across our services. Display to the user as something to communicate to us with inquiries about the error.
  readonly requestid: string // a8b7c6d5

  // A keyed description of the error. We do not write human-readable text here because the user interface will be multi-language.
  readonly message: ErrorMessage // attendee.owned.notfound or similar

  // Optional additional details about the error. If available, will usually contain English language technobabble.
  readonly details: Readonly<Record<string, readonly string[]>>
}

// Handle standard Ajax errors and transform them into more descriptive errors.
// eslint-disable-next-line max-statements,@typescript-eslint/prefer-readonly-parameter-types
export const handleStandardApiErrors =
  (ApiError: new (err: AjaxError) => unknown) => (err: unknown) => {
    if (err instanceof AjaxTimeoutError) {
      throw new FrontendAppError('network-error', 'The request timed out.')
    }

    if (err instanceof AjaxError) {
      if (err.message === 'aborted') {
        throw new FrontendAppError('network-error', 'The request was aborted.')
      }

      if (err.status === 0) {
        throw new FrontendAppError('network-error', 'Request did not complete.')
      }

      if (err.response === null) {
        throw new FrontendAppError(
          'network-error',
          'API result could not be deserialized.'
        )
      }

      if (err.status === StatusCodes.UNAUTHORIZED) {
        throw new LoginRequiredError()
      }

      throw new ApiError(err)
    }

    throw err
  }
