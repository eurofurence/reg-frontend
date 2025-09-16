// import { LOAD_CONFIG } from '~/state/actions/config'
import { identity } from "ramda"
import { createPartialReducer } from "~/state/reducers/create-reducer"

// import L from 'partial.lenses'

export default createPartialReducer(
	() => ({}),
	() => identity,
)
