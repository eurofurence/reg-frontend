import { LocalizationProvider } from '@fluent/react'
import { load } from 'cheerio'
import { getCurrentLangKey } from 'ptz-i18n'
import {
  createLocalization,
  useCurrentLocale,
  supportedLanguages,
} from '~/localization'
import localizationFiles from '~/localizations'
import wrapWithLibraries from './wrap-with-libraries'

const parseMarkup = (str) => {
  const $ = load(str)

  return $.root()
    .children()
    .toArray()
    .map((child) => ({
      nodeName: child.tagName,
      textContent: $(child).text(),
    }))
}

const localizations = Object.fromEntries(
  Object.entries(localizationFiles).map(([locale, ftl]) => [
    locale,
    createLocalization(locale, ftl, parseMarkup),
  ])
)

const PageWrapper = ({ children }) => {
  const locale = useCurrentLocale(false)

  return (
    <LocalizationProvider l10n={localizations[locale]}>
      {children}
    </LocalizationProvider>
  )
}

export const onRenderBody = ({ pathname, setHtmlAttributes }) => {
  setHtmlAttributes({
    lang: getCurrentLangKey(supportedLanguages, 'en', pathname),
  })
}

export const wrapPageElement = ({ element }) => (
  <PageWrapper>{element}</PageWrapper>
)

export const wrapRootElement = wrapWithLibraries
