import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { getCurrentError } from '~/state/selectors/errors'
import { ClearError } from '~/state/actions/errors'
import type { ReadonlyReactNode } from '~/util/readonly-types'
import ErrorReport from './error-report'

export interface ErrorGuardProps {
    readonly children: ReadonlyReactNode
}

const ErrorGuard = ({ children }: ErrorGuardProps) => {
    const dispatch = useAppDispatch()
    const currentError = useAppSelector(getCurrentError())

    return currentError === undefined ? (
        <>{children}</>
    ) : (
        <ErrorReport report={currentError} onBack={() => dispatch(ClearError.create(undefined))} />
    )
}

export default ErrorGuard
