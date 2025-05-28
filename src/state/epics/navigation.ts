import { combineEpics, ofType } from 'redux-observable'
import { AnyAppAction, GetAction } from '~/state/actions'
import { AppState } from '~/state'
import { Navigate } from '../actions/navigation'
import { justDo } from './operators/just-do'
import { navigate } from 'gatsby'

export default combineEpics<GetAction<AnyAppAction>, GetAction<AnyAppAction>, AppState>((action$) =>
    action$.pipe(
        ofType(Navigate.type),
        justDo(({ payload }) => navigate(payload)),
    ),
)
