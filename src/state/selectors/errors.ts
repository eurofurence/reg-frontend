import { AppState } from "~/state"

export const getCurrentError = () => (s: AppState) => s.errors.currentError
