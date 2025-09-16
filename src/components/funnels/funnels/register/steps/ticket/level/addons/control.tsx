import { ForwardedRef, forwardRef } from "react"
import styled from "@emotion/styled"
import {
	Checkbox,
	CheckboxProps,
	MediaQueries,
} from "@eurofurence/reg-component-library"
import ReactMarkdown from "react-markdown"

import type { ReadonlyReactNode } from "~/util/readonly-types"

import Price from "~/components/funnels/price"

export type TicketLevelAddonControlProps = CheckboxProps & {
	readonly description: string
	readonly children?: ReadonlyReactNode
	readonly price: number
}

const Container = styled.section`
	display: grid;

	@media ${MediaQueries.phone}, ${MediaQueries.tablet} {
		grid:
			"label       price" auto
			"description description" auto
			"options     options" auto
			/ 1fr auto;
	}

	@media ${MediaQueries.laptop}, ${MediaQueries.desktop} {
		grid:
			"label       price" auto
			"description options" auto
			/ fit-content(60rem) auto;
	}

	gap: 1.6rem;

	&:not(:first-child) {
		margin-top: 6.4rem;
	}

	&:not(:last-child) {
		margin-bottom: 6.4rem;
	}
`

const CheckboxContainer = styled.section`
	grid-area: label;
	font-size: 2rem;
`

const Description = styled.section`
	grid-area: description;
`

const PriceContainer = styled.section`
	grid-area: price;
	justify-self: end;
`

const OptionsContainer = styled.div`
	grid-area: options;

	@media ${MediaQueries.laptop}, ${MediaQueries.desktop} {
		justify-self: end;
		width: 25rem;
	}

	font-family: Manrope;
`

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const TicketLevelAddonControl = forwardRef(
	(
		{ children, price, description, ...rest }: TicketLevelAddonControlProps,
		ref: ForwardedRef<HTMLInputElement>,
	) => (
		<Container>
			<CheckboxContainer>
				<Checkbox ref={ref} {...rest} />
			</CheckboxContainer>
			<Description>
				<ReactMarkdown>{description}</ReactMarkdown>
			</Description>
			<PriceContainer>
				<Price price={price} />
			</PriceContainer>
			<OptionsContainer>{children}</OptionsContainer>
		</Container>
	),
)

export default TicketLevelAddonControl
