import React from 'react'
import { LocalizationProvider, ReactLocalization } from '@fluent/react'
import { useObservable, useObservableState } from 'observable-hooks'
import { from } from 'rxjs'
import { concatMap } from 'rxjs/operators'
import { loadLanguage, useCurrentLocale } from '~/localization'
import wrapWithLibraries from './wrap-with-libraries'

const PageWrapper = ({ children }) => {
  const locale = useCurrentLocale()
  const l10n$ = useObservable(
    (locale$) => locale$.pipe(concatMap(([l]) => from(loadLanguage(l)))),
    [locale]
  )
  const l10n = useObservableState(l10n$, new ReactLocalization([]))

  return <LocalizationProvider l10n={l10n}>{children}</LocalizationProvider>
}

export const wrapPageElement = ({ element }) => (
  <PageWrapper>{element}</PageWrapper>
)

export const wrapRootElement = wrapWithLibraries
