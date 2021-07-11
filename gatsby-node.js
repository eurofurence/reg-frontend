exports.onCreatePage = async ({ page, actions }) => {
	const { createPage } = actions

	if (page.path.match(/^\/register/)) {
		page.matchPath = "/register/*"
		createPage(page)
	}
}

// TODO: Remove when @fluent updates to fix this: https://github.com/projectfluent/fluent.js/issues/517
exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		module: {
			rules: [{
				include: /[/\\]node_modules[/\\]@fluent[/\\](bundle|react|sequence)[/\\]/,
				test: /[.]js$/,
				type: 'javascript/esm',
			}],
		},
	})
}
