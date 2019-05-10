const WebpackDevServer = require("webpack-dev-server")
const webpack = require('webpack')
const chalk = require('chalk')
const merge = require('webpack-merge')
const webpackDevConf = require('./webpack.dev.conf')

webpackDevConf.then((result) => {
  const devServer = merge(result.devServer, {
    stats: {
      colors: true
    },
    inline: true,
    progress: true,
  })
  WebpackDevServer.addDevServerEntrypoints(result, devServer)
  var compiler = webpack(result)
  var server = new WebpackDevServer(compiler, devServer)
  server.listen(devServer.port, "localhost", function () {
    console.log(chalk.green(`tip: server run at http:localhost:${devServer.port}`))
  })
}).catch((err) => {
  console.log(chalk.red('error: ' + err))
})
