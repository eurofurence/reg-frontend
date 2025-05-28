import { AnyAppAction, GetAction } from '~/state/actions'
import { LoadUserInfo } from '~/state/actions/auth'
import { UserInfo } from '~/state/models/auth'

export interface AuthState {
    readonly userInfo?: UserInfo
}

const defaultState: AuthState = {}

export default (state: AuthState = defaultState, action: GetAction<AnyAppAction>): AuthState => {
    switch (action.type) {
        case LoadUserInfo.type:
            return { userInfo: action.payload }
        default:
            return state
    }
}
