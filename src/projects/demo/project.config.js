const path = require('path')
const baseconfig = require(path.resolve(__dirname, '../../config/project.config.js'))

baseconfig.useREM = true

module.exports = baseconfig
