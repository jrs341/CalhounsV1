'use strict'

const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const getClientEnvironment = require('./env')
const paths = require('./paths')

process.noDeprecation = true

const PUBLIC_PATH = '/'
const PUBLIC_URL = ''
const ENV = getClientEnvironment(PUBLIC_URL)

const ROOT_PATH = path.resolve(__dirname + '/../')

const webpackConfig = {
  target: 'web',
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.html'],
    modules: ['node_modules','src'],
    // from createreactapp
    //fallback: paths.nodePaths,
    //https://github.com/SheetJS/js-xlsx/tree/master/demos/webpack#omitting-optional-dependencies
    alias: {
      './dist/cpexcel.js': '',
      'react-native': 'react-native-web'
    }
  },
  module: {
    //xlsx react module?
    noParse: [/xlsx.core.min.js/, /xlsx.full.min.js/, /jszip.js/]
  },
  plugins: []
}

// ------------------------------------
// Entry Points
// ------------------------------------

webpackConfig.entry = [paths.appIndexJs]

// ------------------------------------
// Bundle Output
// ------------------------------------

webpackConfig.output = {
  path: paths.appDist,
  publicPath: PUBLIC_PATH,
  pathinfo: true,
  filename: 'static/js/[name]-[khash].js',
  chunkFilename: 'chunk-[chunkhash].js',
  //https://github.com/SheetJS/js-xlsx/tree/master/demos/webpack#exporting-the-xlsx-variable
  libraryTarget: 'var',
  library: 'XLSX',
}
// ------------------------------------
// Loaders
// ------------------------------------
webpackConfig.module.rules = [
  {
    test: /^(?!.*\.spec\.js$).*\.(js|jsx)$/,
    include: paths.appSrc,
    use : [
      {
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      }
    ]
  },
  {
    test: /\.json$/,
    use: [
      {
        loader: 'json-loader'
      }
    ]
  },
  {
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader',
  },
  {
    test: /\.pdf$/,
    loader: 'file-loader'
  },
  {
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader']
  },
  {
    test: /\.(scss|sass)$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader']
  },
  {
    test: /\.woff(\?.*)?$/,
    loader:
      'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.woff2(\?.*)?$/,
    loader:
      'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'
  },
  {
    test: /\.otf(\?.*)?$/,
    loader:
      'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype'
  },
  {
    test: /\.ttf(\?.*)?$/,
    loader:
      'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'
  },
  {
    test: /\.eot(\?.*)?$/,
    loader: 'file?prefix=fonts/&name=[path][name].[ext]'
  },
  {
    test: /\.svg(\?.*)?$/,
    loader:
      'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'
  },
  {
    test: /\.(png|jpg)$/,
    loader: 'url?limit=8192'
  },
  {
    test: /\.md$/,
    use: [
      {
        loader: 'html-loader'
      },
      {
        loader: 'markdown-loader'
      }
    ]
  }
]

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [
  new InterpolateHtmlPlugin(ENV.raw),
  new webpack.DefinePlugin(ENV.stringified),
  new HtmlWebpackPlugin({
    template: paths.appHtml,
    inject: true,
  }),

  new webpack.optimize.CommonsChunkPlugin({
    name: 'node-static',
    filename: 'node-static.js',
    minChunks (module, count) {
      var context = module.context
      return context && context.indexOf('node_modules') >= 0
    },
  }),
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'manifest',
  //   writeToDisk: true
  // }),
  //*********************************** async chunks*************************

  // //catch all - anything used in more than one place
  // new webpack.optimize.CommonsChunkPlugin({
  //   async: 'used-twice',
  //   minChunks (module, count) {
  //     return count >= 2
  //   },
  // }),
  //
  // //specifically bundle these large things
  // new webpack.optimize.CommonsChunkPlugin({
  //   async: 'react-dnd',
  //   minChunks (module, count) {
  //     var context = module.context
  //     var targets = ['react-dnd', 'react-dnd-html5-backend', 'react-dnd-touch-backend', 'dnd-core']
  //     return context && context.indexOf('node_modules') >= 0 && targets.find(t => new RegExp('\\\\' + t + '\\\\', 'i').test(context))
  //   },
  // }),
]

// ------------------------------------
// Node
// Some libraries import Node modules but don't use them in the browser.
// Tell Webpack to provide empty mocks for them so importing them works.
// ------------------------------------
webpackConfig.node = {
  fs: 'empty',
  net: 'empty',
  tls: 'empty'
}

module.exports = webpackConfig
