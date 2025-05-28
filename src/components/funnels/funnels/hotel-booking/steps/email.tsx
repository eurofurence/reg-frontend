/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled'
import { Localized } from '@fluent/react'
import { Card } from '@eurofurence/reg-component-library'
import FullWidthHotelBookingFunnelLayout from '~/components/funnels/funnels/hotel-booking/layout/form/full-width'
import { GuestInfo } from '~/state/models/hotel-booking'
import { useAppSelector } from '~/hooks/redux'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'
import ReactMarkdown from 'react-markdown'

const EmailContent = styled.dl`
    display: grid;
    grid-template-columns: min-content auto;
    grid-column-gap: 1em;
    grid-row-gap: 1.25em;

    margin: 3.75em;

    > dt {
        grid-column: 1;

        &::after {
            content: ':';
        }
    }

    > dd {
        grid-column: 2;
    }
`

// I actually want to wrap the headers and body dt/dd's in thematic divs, but that would break the grid,
// and require `subgrid` to solve, which is currently only available on Firefox. So an empty 'spacer' div it is.
const Spacer = styled.div`
    grid-column: 1 / 2;
    height: 1.5em;
`

const guestsEmailText = (guests: readonly GuestInfo[]) =>
    guests.map(
        (guest, i) => `Guest #${i + 1}
${guest.firstName} ${guest.lastName}
${guest.email}
${guest.phoneNumber}
${guest.street}
${guest.postalCode} ${guest.city}
${guest.country}
`,
    ).join(`
`)

const emailText = (keyword: string, codeword: string, guests: readonly GuestInfo[]) => `To Whom It May Concern,

Keyword: ${keyword}
Codeword: ${codeword}


I would like to reserve a Standard room from August 11th to August 15th, 2022 for 2 people.


${guestsEmailText(guests)}

Thank you in advance.


Kind regards,
${guests[0].firstName} ${guests[0].lastName}`

const Email = (_: ReadonlyRouteComponentProps) => {
    const { guests } = useAppSelector(({ hotelBooking: { guestsInfo } }) => guestsInfo)!

    return (
        <FullWidthHotelBookingFunnelLayout onNext={() => {}}>
            <Localized id="hotel-booking-email-title">
                <h3>Copy your generated email</h3>
            </Localized>
            <Localized id="hotel-booking-email-description">
                <ReactMarkdown>
                    Once booking starts, the secret code in the message below will be revealed. You need this code for
                    the hotel to accept your booking. If you want, you can already copy the text below in a draft
                    message in your email client so you only need to enter the secret code once it has been revealed.
                    The secret code will also be sent out on our [https://twitter.com/eurofurence](Twitter) and Telegram
                    accounts.
                </ReactMarkdown>
            </Localized>
            <Card>
                <EmailContent>
                    <dt>To</dt>
                    <dd>reservierung@estrel.com</dd>
                    <dt>Subject</dt>
                    <dd>
                        Room Inquiry Eurofurence 2022 -
                        &#x25cf;&#x25cf;&#x25cf;&#x25cf;&#x25cf;&#x25cf;&#x25cf;&#x25cf;&#x25cf;&#x25cf;
                    </dd>
                    <Spacer />
                    <dt>Message</dt>
                    <dd>
                        <pre>{emailText('Eurofurence 2022', 'Privateer', guests)}</pre>
                    </dd>
                </EmailContent>
            </Card>
        </FullWidthHotelBookingFunnelLayout>
    )
}

export default Email
