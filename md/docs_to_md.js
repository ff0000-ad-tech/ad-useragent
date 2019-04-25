const fatJsdoc2md = require('@ff0000-ad-tech/fat-jsdoc-to-md')
fatJsdoc2md.createFromPackage(`${__dirname}/../`, `${__dirname}/README.hbs`)
