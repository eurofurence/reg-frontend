import { type MarkupParser, ReactLocalization } from '@fluent/react'
import { FluentBundle, FluentResource } from '@fluent/bundle'
import { useLocation } from '@reach/router'
import { getCurrentLangKey } from 'ptz-i18n'
import { DATETIME_RANGE, NUMBER_RANGE } from 'fluent-ranges'
import { useAppSelector } from './hooks/redux'
import { getPreferredLocale } from './state/selectors/register'
import { negotiateLanguages } from '@fluent/langneg'
import { useMemo } from 'react'

export const supportedLanguages = ['en-US', 'de-DE'] as const

export type Locale = (typeof supportedLanguages)[number]

const defaultLocale = 'en-US'

export const getDefaultLocale = (queryBrowserLocale: boolean = true) =>
  queryBrowserLocale
    ? negotiateLanguages(navigator.languages, supportedLanguages, {
        strategy: 'lookup',
        defaultLocale,
      })[0]
    : defaultLocale

export const createLocalization = (
  locale: Locale,
  ftl: string,
  parseMarkup?: MarkupParser | null | undefined
) => {
  const resource = new FluentResource(ftl)

  const bundle = new FluentBundle([locale], {
    functions: {
      DATETIME_RANGE,
      NUMBER_RANGE,
    },
  })

  bundle.addResource(resource)

  return new ReactLocalization([bundle], parseMarkup)
}

export const loadLanguage = async (
  locale: Locale
): Promise<ReactLocalization> => {
  const { default: ftl } = (await import(
    `raw-loader!~/localizations/${locale}.ftl`
  )) as { default: string }

  return createLocalization(locale, ftl)
}

/*
 * Returns the current locale, using multiple strategies with a prioritization
 *
 * 1. URL based locale
 * 2. Locale saved for the user when submitting a registration
 * 3. Browser preference
 * 4. Fallback to en-US
 */
export const useCurrentLocale = (queryBrowserLocale?: boolean) => {
  const location = useLocation()
  const preferredLocale = useAppSelector(getPreferredLocale())
  const fallbackLocale = useMemo(
    () =>
      preferredLocale !== undefined
        ? preferredLocale
        : getDefaultLocale(queryBrowserLocale),
    [queryBrowserLocale, preferredLocale]
  )

  return useMemo(
    () =>
      getCurrentLangKey(supportedLanguages, fallbackLocale, location.pathname),
    [location, fallbackLocale]
  )
}
