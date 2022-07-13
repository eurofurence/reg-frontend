import { useEffect } from 'react'
import { DeepPartial, useForm, FieldValues } from 'react-hook-form'
import { useAppDispatch } from '~/hooks/redux'
import { AnyAppAction } from '~/state/actions'
import { AppActionBundle } from '~/state/actions/create-action'

/*
 * Wrapper around react-hook-form's `useForm` that dispatches page-specific `ChangeAction`s
 * when an input changes and `SubmitAction`s when the form is submitted to, so that this
 * boilerplate doesn't need to be repeated in every funnel page component.
 */
export const useFunnelForm = <
	T extends FieldValues,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
>(ChangeAction: Extract<AnyAppAction, AppActionBundle<any, DeepPartial<T>>>, SubmitAction: Extract<AnyAppAction, AppActionBundle<any, T>>) => {
	const { watch, handleSubmit, ...methods } = useForm<T>()
	const dispatch = useAppDispatch()

	useEffect(() => {
		const subscription = watch(formData => dispatch(ChangeAction.create(formData)))

		return () => subscription.unsubscribe()
	})

	return {
		handleSubmit: handleSubmit(formData => dispatch(SubmitAction.create(formData))),
		watch,
		...methods,
	}
}
