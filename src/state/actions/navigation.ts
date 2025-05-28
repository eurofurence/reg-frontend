import { createAction } from './create-action'

export const Navigate = createAction<string, '[Navigation] Navigate'>('[Navigation] Navigate')

export type NavigationAction = typeof Navigate
