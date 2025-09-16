import type { ReadonlyRouteComponentProps } from "~/util/readonly-types"

import Layout from "~/components/layout"
import SEO from "~/components/seo"

export const Head = () => <SEO title="404: Not found" />

const NotFoundPage = (_: ReadonlyRouteComponentProps) => (
	<Layout>
		<h1>404: Not Found</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</Layout>
)

export default NotFoundPage
