import type { ErrorReport } from "~/state/models/errors"

import { createAction } from "./create-action"

export const ReportError = createAction<ErrorReport, "[Errors] TwT">(
	"[Errors] TwT",
)
export const ClearError = createAction<undefined, "[Errors] Clear">(
	"[Errors] Clear",
)

export type ErrorAction = typeof ReportError | typeof ClearError
