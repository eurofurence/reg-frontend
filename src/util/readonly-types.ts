import type { RouteComponentProps } from "@reach/router"
import type { DateTime, Interval } from "luxon"
import type { ReactElement, ReactNode } from "react"
import type { DeepReadonly } from "ts-essentials"
import type { DeepReadonly as DeepReadonlyForDate } from "utility-types" // ts-essentials is more powerful but intentionally skips Date objects

export type ReadonlyReactNode = DeepReadonly<ReactNode>
export type ReadonlyReactElement = DeepReadonly<ReactElement>
export type ReadonlyRouteComponentProps = DeepReadonly<RouteComponentProps>
export type ReadonlyDate = DeepReadonlyForDate<Date>
export type ReadonlyDateTime = DeepReadonly<DateTime>
export type ReadonlyInterval = DeepReadonly<Interval>
