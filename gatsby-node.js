const path = require('path')

exports.onCreatePage = async ({ page, actions }) => {
	const { createPage } = actions

	if (page.path.match(/^\/register/)) {
		page.matchPath = "/register/*"
		createPage(page)
	}

	if (page.path.match(/^\/hotel-booking/)) {
		page.matchPath = "/hotel-booking/*"
		createPage(page)
	}

	if (page.path.match(/^\/room-share/)) {
		page.matchPath = "/room-share/*"
		createPage(page)
	}
}

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				'~': path.resolve(__dirname, 'src')
			},
		},
	})
}
