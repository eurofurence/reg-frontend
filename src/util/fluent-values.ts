import { FluentDateTime } from '@fluent/bundle'
import { FluentDateTimeRange } from 'fluent-ranges'
import type { DateTime } from 'luxon'
import type { DeepReadonly } from 'ts-essentials'

export const createLuxonFluentDateTime = (dateTime: DeepReadonly<DateTime>) =>
  new FluentDateTime(dateTime.toMillis(), { timeZone: dateTime.zoneName })

export const createLuxonFluentDateTimeRange = (
  start: DeepReadonly<DateTime>,
  end: DeepReadonly<DateTime>
) =>
  new FluentDateTimeRange(start.toMillis(), end.toMillis(), {
    timeZone: start.zoneName,
  })
