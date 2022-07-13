import type { ReactNode } from 'react'
import type { DeepReadonly } from 'ts-essentials'
import type { RouteComponentProps } from '@reach/router'

export type ReadonlyReactNode = DeepReadonly<ReactNode>
export type ReadonlyRouteComponentProps = DeepReadonly<RouteComponentProps>
