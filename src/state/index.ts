import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import type { AnyAppAction, GetAction } from './actions'
import reducer from './reducers'
import epic from './epics'

export const configureStore = () => {
  // eslint-disable-next-line
  const composeEnhancers =
    (global.window &&
      ((window as any)
        .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose)) ||
    compose

  const epicMiddleware = createEpicMiddleware<
    GetAction<AnyAppAction>,
    GetAction<AnyAppAction>,
    AppState
  >()

  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  )

  epicMiddleware.run(epic)

  return store
}

export type AppState = ReturnType<typeof reducer>
export type AppDispatch = ReturnType<typeof configureStore>['dispatch']
