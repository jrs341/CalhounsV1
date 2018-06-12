const webpackConfig = require('../webpack.base')
// load the default config generator.
// const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js')
const appWpConfig = require('../webpack.base.js')

const path = require('path')

module.exports = (baseConfig, env, defaultConfig) => {
  console.log('dc', defaultConfig.module.rules)
  //const config = genDefaultConfig(baseConfig, env)
  // Extend it as you need.
  defaultConfig.resolve.modules.push('src')
  defaultConfig.entry = path.resolve(__dirname, '../../src/components/Test')
  //defaultConfig.module.rules = webpackConfig.module.rules
  // defaultConfig.module.rules.push({
  //       test: /\.(scss|sass)$/,
  //       loaders: ["style-loader", "css-loader", "sass-loader"],
  //       include: path.resolve(__dirname, '../../src/App.sass')
  // })
  defaultConfig.module.rules[0] =
    {
      test: /^(?!.*\.spec\.js$).*\.(js||jsx)$/,
      include: path.resolve(__dirname + '/../../src'),
      loaders: ['babel-loader'],
      exclude: /(node_modules|bower_components|actions|reducers)/
    }

  defaultConfig.module.rules.push(
    {
      test: /\.(scss|sass)$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.pdf$/,
      loader: 'file-loader'
    }
  )
// this supports testing in storybook
    defaultConfig.externals = {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true,
   }
  return defaultConfig
}
