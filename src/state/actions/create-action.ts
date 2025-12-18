import type { Action } from 'redux'

export type AppAction<Type extends string, Payload> = Readonly<Action<Type>> & {
  readonly payload: Payload
}
export type AppActionCreator<Type extends string, Payload> = (
  payload: Payload
) => AppAction<Type, Payload>
export type AppActionBundle<Type extends string, Payload> = {
  readonly type: Type
  readonly create: AppActionCreator<Type, Payload>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GetAction<T extends AppActionBundle<string, any>> =
  T extends AppActionBundle<string, infer Payload>
    ? AppAction<T['type'], Payload>
    : never

export const createAction = <Payload, Type extends string>(
  type: Type
): AppActionBundle<Type, Payload> => ({
  type,
  create: (payload: Payload) => ({ type, payload }),
})
