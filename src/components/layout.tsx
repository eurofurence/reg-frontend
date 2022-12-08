import { LocalizationProvider, ReactLocalization } from '@fluent/react'

import Header from './header'
import Footer from './footer'
import '@eurofurence/reg-component-library/dist/index.css'
import { LanguageKey, loadLanguage } from '~/localization'
import type { DeepReadonly } from 'ts-essentials'
import { ReadonlyDate } from '~/util/readonly-types'
import { useEffect, useState } from 'react'

export interface LayoutProps {
	readonly deadline?: ReadonlyDate
	readonly children: DeepReadonly<React.ReactNode>
}

const Layout = ({ deadline, children }: LayoutProps) => {
	const [localization, setL10n] = useState<ReactLocalization | null>(null)

	const changeLocales = async () => {
		const reactLocalization = await loadLanguage('en' as LanguageKey)

		setL10n(reactLocalization)
	}

	useEffect(() => {
		changeLocales()
			// eslint-disable-next-line no-console
			.catch(console.error)
	}, [])

	if (localization === null) {
		return <div>Loading…</div>
	}

	return <LocalizationProvider l10n={localization}>
		<>
			<Header deadline={deadline}/>
			{children}
			<Footer/>
		</>
	</LocalizationProvider>
}

export default Layout
