import styled from '@emotion/styled'
import { MediaQueries } from '@eurofurence/reg-component-library'

export type TicketLevelFootnoteProps = {
    readonly marker: string
    readonly label: string
    readonly price: string
}

const Container = styled.section`
    display: grid;

    @media ${MediaQueries.phone}, ${MediaQueries.tablet} {
        grid:
            'marker label price' auto
            / 1fr auto;
    }

    @media ${MediaQueries.laptop}, ${MediaQueries.desktop} {
        grid:
            'marker label price' auto
            / fit-content(60rem) auto;
    }

    gap: 0.2rem;
`

const Marker = styled.section`
    grid-area: marker;
    font-size: 2rem;
    width: 2rem;
    justify-self: left;
`

const Label = styled.section`
    grid-area: label;
    font-size: 2rem;
    justify-self: left;
    text-align: left;
`

const PriceContainer = styled.section`
    grid-area: price;
    justify-self: end;
`

const Price = styled.section`
    color: var(--color-brand-2-900);

    font-family: Roboto;
    font-weight: 700;
    font-size: 2.4rem;

    label[data-checked] & {
        color: var(--color-semantic-info);
    }
`

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const TicketLevelFootnote = ({ marker, label, price }: TicketLevelFootnoteProps) => {
    return (
        <Container>
            <Marker>{marker}</Marker>
            <Label>{label}</Label>
            <PriceContainer>
                <Price>{price}</Price>
            </PriceContainer>
        </Container>
    )
}

export default TicketLevelFootnote
