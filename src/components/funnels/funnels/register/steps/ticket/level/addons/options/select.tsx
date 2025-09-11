import { Localized, useLocalization } from '@fluent/react'
import { useMemo } from 'react'
import { Select } from '@eurofurence/reg-component-library'
import { useFunnelForm } from '~/hooks/funnels/form'
import type { AugmentedOption, ValidOptionPaths } from './option'

export interface TicketLevelSelectAddonOptionProps {
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-arguments
	readonly option: AugmentedOption<'select'>
	readonly formContext: ReturnType<typeof useFunnelForm<'register-ticket-level'>>
	readonly preventChange: boolean
}

type AddonErrorOptions = {
	readonly count?: {
		readonly message: string
	}
	readonly size?: {
		readonly message: string
	}
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const TicketLevelSelectAddonOption = ({ option, formContext: { control, watch, formState: { errors }, FunnelController }, preventChange }: TicketLevelSelectAddonOptionProps) => {
	const { l10n } = useLocalization()

	const selected = watch(`addons.${option.addonId}.selected`)

	const { items, itemsByValue } = useMemo(() => {
		const items = option.items.map(value => ({
			value,
			label: l10n.getString(`register-ticket-level-addons-item-${option.addonId}-option-${option.id}-value`, { value }),
		}))

		return { items, itemsByValue: new Map(items.map(item => [item.value, item])) }
	}, [l10n])

	const addonErrorOptions = errors.addons?.[option.addonId]?.options as AddonErrorOptions

	return <FunnelController
		name={`addons.${option.addonId}.options.${option.id}` as ValidOptionPaths}
		control={control}
		rules={{ required: selected }}
		render={({ field: { onChange, value, ref, ...field } }) =>
			<Localized id={`register-ticket-level-addons-item-${option.addonId}-option-${option.id}`} attrs={{ label: true }}>
				<Select
					label={option.id}
					isSearchable={false}
					options={items}
					onChange={item => !preventChange ? onChange(item?.value) : undefined}
					value={value === null ? null : itemsByValue.get(value)}
					// both count/size may be missing, doing what eslint suggests leads to tsc compile error
					// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
					error={addonErrorOptions?.[option.id]?.message}
					{...field}
				/>
			</Localized>
		}
	/>
}

export default TicketLevelSelectAddonOption
