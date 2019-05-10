'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const minimist = require('minimist');
const chalk = require('chalk')

const getParamFromCLI = function (cliName) {
  const args = minimist(process.argv.slice(2));
  if (cliName) {
    return args[cliName];
  } else {
    return args;
  }
}

let projectName = getParamFromCLI('projectname') || getParamFromCLI()._[0];

if (!projectName) {
  console.log(chalk.red('please type a valid projectname. eg: node build/dev-server.js --projectname kele'));
  process.exit(1);
}

process.env.projectName = projectName

// 默认构建配置
const rootConfig = require(`../src/config/project.config`)
// 项目构建配置
const projectConfig = require(`../src/projects/${process.env.projectName}/project.config`)

module.exports = {
  dev: {

    // Paths
    index: path.resolve(__dirname, `../src/projects/${process.env.projectName}/index.html`),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, `../dist/${process.env.projectName}/index.html`),

    // Paths
    assetsRoot: path.resolve(__dirname, `../dist/${process.env.projectName}`),
    assetsSubDirectory: 'static',
    assetsPublicPath: '//s1.huishoubao.com/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
