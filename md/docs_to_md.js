const fatJsdoc2md = require('@ff0000-ad-tech/ad-docs')
fatJsdoc2md.createMarkdownFromPackage(
	'ad-useragent',
	`${__dirname}/../`,
	`${__dirname}/api.hbs`,
	`${__dirname}/README.hbs`
)
