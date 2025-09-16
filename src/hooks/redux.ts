import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, AppState } from "~/state"

/*
 * Pre-typed `useDispatch` and `useSelector` functions.
 */
export const useAppDispatch = useDispatch<AppDispatch>
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
