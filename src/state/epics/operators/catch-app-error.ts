import { of, OperatorFunction } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { LoginRequiredError } from '~/apis/common'
import { GetAction } from '~/state/actions'
import { InitiateLogin } from '~/state/actions/auth'
import { ReportError } from '~/state/actions/errors'
import type { AppErrorOperation } from '~/state/models/errors'

export const catchAppError = <T>(
    operation: AppErrorOperation,
): OperatorFunction<T, T | GetAction<typeof InitiateLogin | typeof ReportError>> =>
    catchError((error: unknown) => {
        if (error instanceof LoginRequiredError) {
            return of(InitiateLogin.create(undefined))
        } else {
            return of(ReportError.create({ operation, error }))
        }
    })
