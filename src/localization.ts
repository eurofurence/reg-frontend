import { ReactLocalization } from '@fluent/react'
import { FluentBundle, FluentResource } from '@fluent/bundle'
import { useLocation } from '@reach/router'
import { getCurrentLangKey } from 'ptz-i18n'
import axios from 'axios'

export type LanguageKey = 'en' | 'de'

export const loadLanguage = async (langKey: LanguageKey): Promise<ReactLocalization> => {
	const { data: ftl } = await axios.get<string>(`/localizations/${langKey}.ftl`)

	const resource = new FluentResource(ftl)

	const bundle = new FluentBundle([langKey])

	bundle.addResource(resource)

	return new ReactLocalization([bundle])
}

export const useCurrentLangKey = () => {
	const location = useLocation()

	return getCurrentLangKey<LanguageKey>(['en', 'de'], 'en', location.pathname)
}
