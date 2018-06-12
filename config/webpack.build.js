'use strict'

// Import base and mutate for specific production needs

const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('./webpack.base.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const getClientEnvironment = require('./env')
const paths = require('./paths')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const PUBLIC_PATH = paths.servedPath
const PUBLIC_URL = PUBLIC_PATH.slice(0, -1)
const ENV = getClientEnvironment(PUBLIC_URL)

// for extract text plugin
const shouldUseRelativeAssetPaths = PUBLIC_PATH === './'
const cssFilename = 'static/css/[name].[contenthash:8].css'
const extractTextPluginOptions = shouldUseRelativeAssetPaths
  ? // Making sure that the publicPath goes back to to build folder.
  { publicPath: Array(cssFilename.split('/').length).join('../') }
  : undefined

// Bail if there is any error
webpackConfig.bail = true
devtool: 'cheap-module-source-map'
//delete webpackConfig.devtool
delete webpackConfig.devServer

// enhance output fields for production
webpackConfig.output = Object.assign(webpackConfig.output, {
  filename: 'static/js/[name].[chunkhash:8].js',
  chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js'
})

webpackConfig.plugins.push(
  new ExtractTextPlugin(cssFilename),
  new ManifestPlugin({
    fileName: 'asset-manifest.json'
  }),
  // new webpack.optimize.UglifyJsPlugin({
  //   compress:{
  //     warnings: false,
  //     screw_ie8: true,
  //     conditionals: true,
  //     unused: true,
  //     comparisons: true,
  //     sequences: true,
  //     dead_code: true,
  //     evaluate: true,
  //     if_return: true,
  //     join_vars: true
  //   },
  //   output: {
  //     comments: false
  //   }
  // }),
  new webpack.HashedModuleIdsPlugin()
)

module.exports = webpackConfig
