import { useSiteMetadata } from '~/hooks/queries/site-metadata'
import brand from '~/images/brand.svg'
import type { ReadonlyReactNode } from '~/util/readonly-types'

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const SEO = ({
  title,
  description,
  children,
}: {
  readonly title: string
  readonly description?: string
  readonly children?: ReadonlyReactNode
}) => {
  const siteMetadata = useSiteMetadata()
  const fullTitle = `${siteMetadata.title} | ${title}`
  const fullDescription = description ?? siteMetadata.description

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="image" content={brand} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={brand} />
      <meta name="twitter:creator" content={siteMetadata.twitter.creator} />
      {children}
    </>
  )
}

export default SEO
