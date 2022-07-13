import styled from '@emotion/styled'
import { forwardRef, ForwardedRef } from 'react'
import { Checkbox, CheckboxProps } from '@eurofurence/reg-component-library'
import ReactMarkdown from 'react-markdown'
import Price from '~/components/funnels/price'
import type { ReadonlyReactNode } from '~/util/readonly-types'

export interface TicketLevelAddonProps extends CheckboxProps {
	readonly label: string
	readonly description: string
	readonly children?: ReadonlyReactNode
	readonly price: number
}

const CheckboxWrapper = styled.section`
	font-size: 2rem;
`

const Container = styled.section`
	display: flex;
	align-items: start;

	&:not(:first-child) {
		margin-top: 6.4rem;
	}

	&:not(:last-child) {
		margin-bottom: 6.4rem;
	}
`

const DescriptionContainer = styled.section`
	flex: 1;
`

const Description = styled.section`
	margin-top: 1.6rem;
	max-width: 600px;
`

const PriceContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: end;
`

const OptionsContainer = styled.div`
	width: 22rem;

	font-family: Manrope;
`
// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const TicketLevelAddon = forwardRef(({ children, price, description, ...rest }: TicketLevelAddonProps, ref: ForwardedRef<HTMLInputElement>) =>
	<Container>
		<DescriptionContainer>
			<CheckboxWrapper><Checkbox ref={ref} {...rest}/></CheckboxWrapper>
			<Description><ReactMarkdown>{description}</ReactMarkdown></Description>
		</DescriptionContainer>
		<PriceContainer>
			<Price price={price}/>
			<OptionsContainer>
				{children}
			</OptionsContainer>
		</PriceContainer>
	</Container>,
)

export default TicketLevelAddon
