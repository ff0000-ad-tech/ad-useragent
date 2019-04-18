const jsdoc2mdPlugin = require('@ff0000-ad-tech/jsdoc-to-md-plugin')
jsdoc2mdPlugin.createFromPackage(`${__dirname}/../`, `${__dirname}/README.hbs`)
