export type FrontendErrorCode = 'network-error' | 'unknown'

export type AppErrorOperation =
    | 'registration-open-check'
    | 'registration-submission'
    | 'registration-update'
    | 'registration-initiate-payment'
    | 'registration-set-locale'
    | 'user-info-lookup'
    | 'unknown'

export interface ErrorReport {
    readonly operation: AppErrorOperation
    readonly error: unknown
}

export class AppError<ErrorCode extends string | number = string | number> extends Error {
    constructor(
        public category: string,
        public code: ErrorCode,
        public detailedMessage: string,
    ) {
        super(`${code} - ${detailedMessage}`)
    }
}

export class FrontendAppError extends AppError<FrontendErrorCode> {
    constructor(code: FrontendErrorCode, detailedMessage: string) {
        super('frontend', code, detailedMessage)
    }
}
