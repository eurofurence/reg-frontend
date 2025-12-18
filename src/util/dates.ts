import { last, until } from 'ramda'
import type { ReadonlyDateTime, ReadonlyInterval } from './readonly-types'

export const eachDayOfInterval = (interval: ReadonlyInterval) =>
  until<ReadonlyDateTime[], ReadonlyDateTime[]>(
    (days) => last(days)!.equals(interval.end),
    (days) => [...days, last(days)!.plus({ day: 1 })],
    [interval.start]
  )
