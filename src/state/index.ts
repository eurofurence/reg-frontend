import { applyMiddleware, compose, createStore } from "redux"
import { createEpicMiddleware } from "redux-observable"

import { AnyAppAction, GetAction } from "./actions"
import epic from "./epics"
import reducer from "./reducers"

export const configureStore = () => {
	// eslint-disable-next-line
	const composeEnhancers =
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/dot-notation
		(global.window as any)?.["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] ?? compose

	const epicMiddleware = createEpicMiddleware<
		GetAction<AnyAppAction>,
		GetAction<AnyAppAction>,
		AppState
	>()

	const store = createStore(
		reducer,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument
		composeEnhancers(applyMiddleware(epicMiddleware)),
	)

	epicMiddleware.run(epic)

	return store
}

export type AppState = ReturnType<typeof reducer>
export type AppDispatch = ReturnType<typeof configureStore>["dispatch"]
