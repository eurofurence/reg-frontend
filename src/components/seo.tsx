import { Helmet } from 'react-helmet'
import { LanguageKey } from '~/localization'
import { useSiteMetadata } from '~/hooks/queries/site-metadata'

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const SEO = ({
	description = '',
	lang = 'en',
	meta = [],
	title,
}: {
	readonly description?: string
	readonly lang?: LanguageKey
	readonly meta?: JSX.IntrinsicElements['meta'][]
	readonly title: string
}) => {
	const siteMetadata = useSiteMetadata()

	const metaDescription = description || siteMetadata.description
	const defaultTitle = siteMetadata.title

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
			meta={([
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: siteMetadata.author || ``,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			] as JSX.IntrinsicElements['meta'][]).concat(meta)}
		/>
	)
}

export default SEO
