import config from '~/config'
import { useFunnelForm } from '~/hooks/funnels/form'
import TicketLevelSelectAddonOption from './select'

type AllOptions = (typeof config.addons)[keyof typeof config.addons]['options']
type GetOptionDef<T> = T extends T ? T[keyof T] : never
type AllOptionDefs = GetOptionDef<AllOptions>
type FilterByType<T extends string = AllOptionDefs['type'], U = AllOptionDefs> = Extract<U, { readonly type: T }>

export type AugmentedOption<T extends string = AllOptionDefs['type']> = {
    [K in keyof typeof config.addons]: {
        [L in keyof (typeof config.addons)[K]['options']]: FilterByType<T, (typeof config.addons)[K]['options'][L]> & {
            readonly addonId: K
            readonly id: L
        }
    }[keyof (typeof config.addons)[K]['options']]
}[keyof typeof config.addons]

export type ValidOptionPaths = {
    [K in keyof typeof config.addons]: {
        [L in keyof (typeof config.addons)[K]['options']]: `addons.${K}.options.${L & string}`
    }[keyof (typeof config.addons)[K]['options']]
}[keyof typeof config.addons]

export interface TicketLevelAddonOptionProps {
    readonly option: AugmentedOption
    readonly formContext: ReturnType<typeof useFunnelForm<'register-ticket-level'>>
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const TicketLevelAddonOption = ({ option, formContext }: TicketLevelAddonOptionProps) => {
    switch (option.type) {
        case 'select':
            return <TicketLevelSelectAddonOption option={option} formContext={formContext} />
        default:
            return <div>Not implemented!</div>
    }
}

export default TicketLevelAddonOption
