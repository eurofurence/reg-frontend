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
	const isUnavailable = (lvl: TicketLevel['level'] | null) => lvl !== null && (config.addons[addon.id].unavailableFor?.level?.includes(lvl) ?? false)
	const resetOnLevelChange = config.addons[addon.id].resetOn?.levelChange ?? false

	const { watch, register, setValue } = formContext
	const level = watch('level')

	useEffect(() => {
		const subscription = watch((value, { name, type }) => {
			if (resetOnLevelChange && name === 'level' && type === 'change') {
				const levelValue = value.level as Exclude<typeof value.level, undefined>

				if (addon.id === 'tshirt') {
					// Keep existing selection if available for new level
					const isAvailable = !isUnavailable(levelValue)

					if (isAvailable && value.addons?.[addon.id]?.selected === true) {
						return
					}
				}

				setValue(`addons.${addon.id}.selected`, (isIncluded(levelValue) || isRequired(levelValue)) && !isUnavailable(levelValue) || addon.default)
			}

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
			disabled={isIncluded(level) || isRequired(level) || addon.id === 'stage-pass'}
			{...register(`addons.${addon.id}.selected`)}
		>
			{Object.entries(addon.options).map(([id, option]) =>
				// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
				<TicketLevelAddonOption key={id} option={{ id, addonId: addon.id, ...option } as AugmentedOption} formContext={formContext}/>,
			)}
		</TicketLevelAddonControl>
	</Localized>
}

export default TicketLevelAddon
