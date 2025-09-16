// import { LOAD_CONFIG } from '~/state/actions/config'
import { createPartialReducer } from '~/state/reducers/create-reducer'
import { identity } from 'ramda'
// import L from 'partial.lenses'

export default createPartialReducer(() => ({}), () => identity)
