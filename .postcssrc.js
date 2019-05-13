// https://github.com/michael-ciniawsky/postcss-load-config
const fs = require('fs')
const path = require('path')
const config = require('./config');
const projectConfigPath = path.resolve(__dirname, `./src/projects/${config.projectName}/cssVars`)
const isProjectConfig = fs.existsSync(projectConfigPath + '/config.css')

const plugins = {
  "postcss-import": {
    path: [
      isProjectConfig ? projectConfigPath : path.resolve(__dirname, './src/rootCss/'),
      path.resolve(__dirname, './src/')
    ]
  },
  "postcss-url": {},
  "precss": {},
  "postcss-cssnext": {},
  // to edit target browsers: use "browserslist" field in package.json
  // "autoprefixer": {} autoprefixer is unneccesary when use precss
}

if (config.projectConfig.useREM) {
  plugins['postcss-px2rem'] = {
    rootValue: Number(config.projectConfig.rootValue)
  }
}

module.exports = {
  plugins
}