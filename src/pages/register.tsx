import { RegisterRouter } from '~/navigation/router'
import Layout from '~/components/layout'
import SEO from '~/components/seo'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'

const RegisterPage = (_: ReadonlyRouteComponentProps) => <Layout>
	<SEO title="Register" />
	{RegisterRouter()}
</Layout>

export default RegisterPage
