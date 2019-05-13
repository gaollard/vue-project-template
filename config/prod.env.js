'use strict'
const config = require('./index')
const merge = require('webpack-merge')

module.exports = merge({
  NODE_ENV: '"production"'
}, config.projectConfig.env)
