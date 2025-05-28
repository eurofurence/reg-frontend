import styled from '@emotion/styled'
import { Localized } from '@fluent/react'
import { interval } from 'rxjs'
import * as O from 'rxjs/operators'
import { useObservableState, useObservable } from 'observable-hooks'
import brandImg from '~/images/brand.svg'
import globe from '~/images/globe.svg'
import user from '~/images/user.svg'
import {
    NavBar,
    Display,
    NavBarTitle,
    NavBarCenter,
    NavBarMenu,
    NavBarMenuItem,
    NavBarSubMenu,
} from '@eurofurence/reg-component-library'
import config from '~/config'
import { ReadonlyDateTime } from '~/util/readonly-types'
import { supportedLanguages } from '~/localization'
import langmap from 'langmap'
import { Link } from 'gatsby'
import { groupBy } from 'ramda'
import { useAppDispatch } from '~/hooks/redux'
import { SetLocale } from '~/state/actions/register'

const CLOCK_UPDATE_DELAY = 1000

const ClockContainer = styled.section`
    display: flex;
    gap: 0.8rem;
`

interface ClockProps {
    readonly deadline: ReadonlyDateTime
}

const Clock = ({ deadline }: ClockProps) => {
    const getTimeRemaining = () => deadline.diffNow(['months', 'days', 'hours', 'minutes', 'seconds']).toObject()

    const tick$ = useObservable(() => interval(CLOCK_UPDATE_DELAY).pipe(O.map(getTimeRemaining)), [])
    const timeRemaining = useObservableState(tick$, getTimeRemaining())

    return (
        <ClockContainer>
            <Localized id="header-clock-component-months" attrs={{ caption: true }}>
                <Display caption="Months" content={timeRemaining.months!.toString()} size={2} padding="0" />
            </Localized>
            <Localized id="header-clock-component-days" attrs={{ caption: true }}>
                <Display caption="Days" content={timeRemaining.days!.toString()} size={2} padding="0" />
            </Localized>
            <Localized id="header-clock-component-hours" attrs={{ caption: true }}>
                <Display caption="Hours" content={timeRemaining.hours!.toString()} size={2} padding="0" />
            </Localized>
            <Localized id="header-clock-component-minutes" attrs={{ caption: true }}>
                <Display caption="Minutes" content={timeRemaining.minutes!.toString()} size={2} padding="0" />
            </Localized>
            <Localized id="header-clock-component-seconds" attrs={{ caption: true }}>
                <Display caption="Seconds" content={timeRemaining.seconds!.toString()} size={2} padding="0" />
            </Localized>
        </ClockContainer>
    )
}

const BrandLink = styled(Link)`
    display: flex;
    gap: 1ch;
    align-items: center;
`

const BrandImage = styled.img`
    height: 1.1ch;
`

const friendlyLocales = Object.entries(groupBy((locale) => locale.split('-')[0], supportedLanguages)).flatMap(
    ([primary, locales]) =>
        locales.length === 1
            ? [{ name: langmap[primary].nativeName, locale: locales[0] }]
            : locales.map((locale) => ({ name: langmap[locale].nativeName, locale })),
)

export interface HeaderProps {
    readonly deadline?: ReadonlyDateTime
}

const Header = ({ deadline }: HeaderProps) => {
    const dispatch = useAppDispatch()

    return (
        <NavBar>
            <NavBarTitle>
                <BrandLink to="/register">
                    <BrandImage src={brandImg} />
                    {config.eventName}
                </BrandLink>
            </NavBarTitle>
            {deadline === undefined ? undefined : (
                <NavBarCenter>
                    <Clock deadline={deadline} />
                </NavBarCenter>
            )}
            <NavBarMenu>
                <Localized id="header-menu-item-my-account" attrs={{ label: true }}>
                    <NavBarMenuItem icon={user} label="My account" href="https://identity.eurofurence.org/dashboard" />
                </Localized>
                <Localized id="header-menu-item-language" attrs={{ label: true }}>
                    <NavBarSubMenu icon={globe} label="Language">
                        {friendlyLocales.map(({ name, locale }) => (
                            <NavBarMenuItem
                                key={locale}
                                label={name}
                                onClick={() => dispatch(SetLocale.create(locale))}
                            />
                        ))}
                    </NavBarSubMenu>
                </Localized>
            </NavBarMenu>
        </NavBar>
    )
}

export default Header
