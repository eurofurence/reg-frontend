import { pipe } from "rxjs"
import { ignoreElements, tap } from "rxjs/operators"

export const justDo = <T>(f: (value: T) => void) =>
	pipe(tap(f), ignoreElements())
