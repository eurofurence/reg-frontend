import { graphql, useStaticQuery } from 'gatsby'

export interface SiteMetadata {
	readonly title: string
	readonly description: string
	readonly author: string
	readonly twitter: {
		readonly creator: string
	}
}

/*
 * Loads some config information.
 *
 * TODO: Coerce dates to the right types here, instead of in the components.
 */
export const useSiteMetadata = () => {
	const { site: { siteMetadata } } = useStaticQuery<{ site: { siteMetadata: SiteMetadata } }>(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					author
					twitter {
						creator
					}
				}
			}
		}
	`)

	return siteMetadata
}
