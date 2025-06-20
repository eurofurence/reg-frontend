import { Localized } from '@fluent/react'
import config from '~/config'
import { useFunnelForm } from '~/hooks/funnels/form'
import TicketLevelAddonControl from './control'
import TicketLevelAddonOption, { AugmentedOption } from './options/option'
import { useEffect } from 'react'
import { TicketLevel } from '~/state/models/register'

export type AugmentedAddon = {
	[K in keyof typeof config.addons]: (typeof config.addons)[K] & {
		readonly id: K
	}
}[keyof typeof config.addons]

type AddonSelection = {
	[key: string]: {
		readonly selected?: boolean
	}
}

export interface TicketLevelAddonProps {
	readonly addon: AugmentedAddon
	readonly formContext: ReturnType<typeof useFunnelForm<'register-ticket-level'>>
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const TicketLevelAddon = ({ addon, formContext }: TicketLevelAddonProps) => {
	const isIncluded = (lvl: TicketLevel['level'] | null) => lvl !== null && (config.ticketLevels[lvl].includes?.includes(addon.id) ?? false)
	const isRequired = (lvl: TicketLevel['level'] | null) => lvl !== null && (config.ticketLevels[lvl].requires?.includes(addon.id) ?? false)
	const isUnavailable = config.addons[addon.id].unavailable ?? false

	const { watch, register, setValue } = formContext
	const level = watch('level')

	useEffect(() => {
		const subscription = watch((value, { name, type }) => {
			if (name) {
				if (name.startsWith('addons') && type === 'change') {
					const requirements = (config.addons[addon.id].requires ?? []) as string[]

					// skip expensive processing if this addon does not have requirements
					if (requirements.length > 0) {
						const unselectedAddonIds = Object.entries(value.addons as AddonSelection).filter(([, v]) => v.selected !== true).map(([k]) => k as string)

						const missingRequirements = unselectedAddonIds.filter(id => requirements.includes(id))

						if (missingRequirements.length > 0) {
							setValue(`addons.${addon.id}.selected`, false)
						}
					}
				}
			}
		})

		return () => subscription.unsubscribe()
	}, [watch])

	return <Localized id={`register-ticket-level-addons-item-${addon.id}`} attrs={{ label: true, description: true }}>
		<TicketLevelAddonControl
			label={addon.id}
			description={addon.id}
			price={isIncluded(level) ? 0 : addon.price}
			disabled={isIncluded(level) || isRequired(level) || addon.id === 'stage-pass' || isUnavailable}
			{...register(`addons.${addon.id}.selected`)}
		>
			{Object.entries(addon.options).map(([id, option]) =>
				// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
				<TicketLevelAddonOption key={id} option={{ id, addonId: addon.id, ...option } as AugmentedOption} formContext={formContext} preventChange={isUnavailable && id === 'count'}/>,
			)}
		</TicketLevelAddonControl>
	</Localized>
}

export default TicketLevelAddon
