'use strict'

// Import base and mutate for specific production needs

const path = require('path')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const webpackConfig = require('./webpack.base.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const getClientEnvironment = require('./env')
const paths = require('./paths')

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
webpackConfig.devtool = 'source-map',
//delete webpackConfig.devtool
delete webpackConfig.devServer

// enhance output fields for production
webpackConfig.output = Object.assign(webpackConfig.output, {
  filename: 'static/js/[name].[chunkhash:8].js',
  chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js'
})

webpackConfig.plugins.push(
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    mangle: {
      screw_ie8: true
      //keep_fnames: true,
    },
    compress: {
      screw_ie8: true,
      warnings: false
    },
    output: {
      screw_ie8: true,
      comments: false
    }
  }),
  new ExtractTextPlugin(cssFilename),
  new ManifestPlugin({
    fileName: 'asset-manifest.json'
  }),
  new webpack.optimize.AggressiveMergingPlugin()
)

module.exports = webpackConfig
