import { Localized } from '@fluent/react'
import Layout from '~/components/layout'
import SEO from '~/components/seo'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'

export const Head = () => <SEO title="Home" />

const IndexPage = (_: ReadonlyRouteComponentProps) => (
  <Layout>
    <Localized id="hello">
      <h1>Hello world!</h1>
    </Localized>
  </Layout>
)

export default IndexPage
