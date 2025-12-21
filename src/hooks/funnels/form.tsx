import { type ReactLocalization, useLocalization } from '@fluent/react'
import { useEffect } from 'react'
import {
  useForm,
  type FieldValues,
  type RegisterOptions,
  type FieldPath,
  type FieldPathValue,
  type Path,
  type ControllerProps,
  Controller,
} from 'react-hook-form'
import type { DeepReadonly } from 'ts-essentials'
import type { DeepReadonly as DeepReadonlyForDate } from 'utility-types'
import { mapObjIndexed } from 'ramda'
import { paramCase } from 'change-case'
import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { SubmitForm } from '~/state/actions/forms'
import type { FormIds, FormValuesType } from '~/state/forms'
import {
  getDefaultFormValues,
  getSubmittedFormValues,
} from '~/state/selectors/forms'
import type { FluentVariable } from '@fluent/bundle'
import { useRefFn } from '~/hooks/use-ref-fn'
import { UpdateLastSavedTime } from '~/state/actions/autosave'
import { load, save } from '~/util/local-storage'

type LocalizedValidate<TFieldValue> = (
  value: TFieldValue
) => boolean | Promise<boolean>

type LocalizedRules<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Partial<{
  required: boolean
  min: number | string
  max: number | string
  maxLength: number
  minLength: number
  pattern: RegExp
  validate:
    | LocalizedValidate<FieldPathValue<TFieldValues, TFieldName>>
    | Record<
        string,
        LocalizedValidate<FieldPathValue<TFieldValues, TFieldName>>
      >
}>

type LocalizedRegisterOptions<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<
  RegisterOptions<TFieldValues, TFieldName>,
  | 'required'
  | 'min'
  | 'max'
  | 'minLength'
  | 'maxLength'
  | 'pattern'
  | 'validate'
> &
  LocalizedRules<TFieldValues, TFieldName>

const localizeValidations = <
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  l10n: DeepReadonly<ReactLocalization>,
  prefix: string,
  name: TFieldName,
  {
    required,
    min,
    max,
    minLength,
    maxLength,
    pattern,
    validate,
    ...rest
  }: LocalizedRegisterOptions<TFieldValues, TFieldName> = {}
): RegisterOptions<TFieldValues, TFieldName> => {
  const getMessage = (
    rulename: string,
    args?: DeepReadonlyForDate<Record<string, FluentVariable>>
  ) =>
    l10n.getString(
      `${prefix}-validation-errors-${name
        .split('.')
        .filter((x) => Number.isNaN(Number(x)))
        .map((x) => paramCase(x))
        .join('-')}-${rulename}`,
      args
    )

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const localizedValidate =
    <TFieldValue,>(id: string, f: LocalizedValidate<TFieldValue>) =>
    (value: TFieldValue) =>
      f(value) || getMessage(id)
  const localizedRule = <TFieldValue,>(id: string, value: TFieldValue) => ({
    value,
    message: getMessage(id, typeof value === 'number' ? { limit: value } : {}),
  })

  return {
    ...(required === undefined
      ? {}
      : { required: required && getMessage('required') }),
    ...(min === undefined ? {} : { min: localizedRule('min', min) }),
    ...(max === undefined ? {} : { max: localizedRule('max', max) }),
    ...(minLength === undefined
      ? {}
      : { minLength: localizedRule('min-length', minLength) }),
    ...(maxLength === undefined
      ? {}
      : { maxLength: localizedRule('max-length', maxLength) }),
    ...(pattern === undefined
      ? {}
      : { pattern: localizedRule('pattern', pattern) }),
    ...(validate === undefined
      ? {}
      : validate instanceof Function
        ? { validate: localizedValidate('validate', validate) }
        : {
            validate: mapObjIndexed(
              (v, k) => localizedValidate(`validate-${paramCase(k)}`, v),
              validate
            ),
          }),
    ...rest,
  }
}

type FormCache = { [K in FormIds]: FormValuesType<K> }

export const clearFormCache = () => save('funnel-form', {})

const loadCache = <F extends FormIds>(id: F) =>
  load<FormCache>('funnel-form')?.[id]

const saveCache = <F extends FormIds>(id: F, values: FormValuesType<F>) => {
  const cache = load<FormCache>('funnel-form')

  save('funnel-form', { ...cache, [id]: values })
}

export const sanitizeFormCache = () => {
  saveCache(
    'register-ticket-level',
    undefined as unknown as FormValuesType<'register-ticket-level'>
  )
}

/*
 * Wrapper around react-hook-form's `useForm` that dispatches page-specific `ChangeAction`s
 * when an input changes and `SubmitAction`s when the form is submitted to, so that this
 * boilerplate doesn't need to be repeated in every funnel page component.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useFunnelForm = <F extends FormIds>(id: F) => {
  const autosaveValues = useRefFn(() => loadCache<F>(id))
  const defaultValues = useAppSelector(getDefaultFormValues(id))
  const submittedValues = useAppSelector(getSubmittedFormValues(id))
  const { handleSubmit, watch, register, ...methods } = useForm<
    FormValuesType<F>
  >({
    defaultValues: (submittedValues ??
      autosaveValues.current ??
      defaultValues) as never,
  })
  const dispatch = useAppDispatch()
  const { l10n } = useLocalization()

  useEffect(() => {
    const subscription = watch((formData) => {
      saveCache(id, formData as FormValuesType<F>)
      dispatch(UpdateLastSavedTime.create(new Date()))
    })

    return () => subscription.unsubscribe()
  }, [watch])

  const newRegister = <
    TFieldName extends FieldPath<FormValuesType<F>> = FieldPath<
      FormValuesType<F>
    >,
    // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  >(
    name: TFieldName,
    options?: LocalizedRegisterOptions<FormValuesType<F>, TFieldName>
  ) => register(name, localizeValidations(l10n, id, name, options))

  const FunnelController = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends Path<TFieldValues> = Path<TFieldValues>,
    // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  >({
    rules,
    ...props
  }: Omit<ControllerProps<TFieldValues, TName>, 'rules'> & {
    rules: LocalizedRules<TFieldValues, TName>
  }) => {
    const { l10n } = useLocalization()

    return (
      <Controller
        rules={localizeValidations(l10n, id, props.name, rules)}
        {...props}
      />
    )
  }

  return {
    handleSubmit: handleSubmit((formData) =>
      dispatch(SubmitForm(id).create(formData as never))
    ),
    watch,
    register: newRegister,
    FunnelController,
    ...methods,
  }
}
