import type { AppState } from '~/state'

export const getAuthState = () => (s: AppState) => s.auth
export const getUserInfo = () => (s: AppState) => s.auth.userInfo
