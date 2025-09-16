import { FluentVariable } from "@fluent/bundle"
import { pluck, sum } from "ramda"
import { DeepReadonly } from "utility-types"

export interface UncalculatedInvoiceItem {
	readonly id: string
	readonly options?: DeepReadonly<Record<string, FluentVariable>>
	readonly amount: number
	readonly unitPrice: number
}

export interface InvoiceItem extends UncalculatedInvoiceItem {
	readonly totalPrice: number
}

export interface Invoice {
	readonly items: readonly InvoiceItem[]
	readonly totalPrice: number
	readonly paid?: number
	readonly due?: number
}

const augmentInvoiceItem = (item: UncalculatedInvoiceItem) => {
	return { ...item, totalPrice: item.amount * item.unitPrice }
}

export const buildInvoice = (
	items: readonly UncalculatedInvoiceItem[],
	{ paid, due }: Pick<Invoice, "paid" | "due"> = {},
) => {
	const augmentedItems = items.map(augmentInvoiceItem)
	const totalPrice = sum(pluck("totalPrice", augmentedItems))

	if (paid === undefined && due === undefined) {
		return { items: augmentedItems, totalPrice }
	} else {
		const other = (paid ?? 0) + (due ?? 0) - totalPrice

		return {
			items:
				other === 0
					? augmentedItems
					: [
							...augmentedItems,
							{ id: "other", amount: 1, unitPrice: other, totalPrice: other },
						],
			totalPrice: totalPrice + other,
			paid,
			due,
		}
	}
}
