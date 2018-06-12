'use strict'

// Import base and mutate for specific dev needs

const path = require('path')
const webpack = require('webpack')
const WatchMissingNodeModulesPlugin
= require('react-dev-utils/WatchMissingNodeModulesPlugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const webpackConfig = require('./webpack.base.js')

const getClientEnvironment = require('./env')
const paths = require('./paths')
const PUBLIC_PATH = '/'
const PUBLIC_URL = ''
const ENV = getClientEnvironment(PUBLIC_URL)

webpackConfig.entry.push(
  require.resolve('react-dev-utils/webpackHotDevClient')
)

webpackConfig.output.path = paths.appBuild

webpackConfig.devtool = 'source-map',

/*webpackConfig.devServer = {
  port: 3000,
  host: 's3betaplatform.com',
  historyApiFallback: true,
  noInfo: false,
  stats: 'minimal',
  hot: true,
  inline: true,
  watch: true,
}*/

webpackConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new CaseSensitivePathsPlugin(),
  new WatchMissingNodeModulesPlugin(paths.appNodeModules)
  // new BundleAnalyzerPlugin({
  //   analyzerMode: 'static'
  // })
  //new webpack.NoEmitOnErrorsPlugin()
)

module.exports = webpackConfig
