import { FormIds, FormValuesType } from '~/state/forms'
import { AppActionBundle, createAction } from './create-action'

export type SubmitFormActionBundle<F extends FormIds> = F extends FormIds ? AppActionBundle<`[Form] Submit form ${F}`, FormValuesType<F>> : never

export const SubmitForm = <F extends FormIds>(f: F): SubmitFormActionBundle<F> =>
	createAction<FormValuesType<F>, `[Form] Submit form ${F}`>(`[Form] Submit form ${f}`) as never

type FormActions<F extends FormIds> =
	| SubmitFormActionBundle<F>

export type FormAction = FormActions<FormIds>
