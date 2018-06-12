const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, '../../src/'),
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.html'],
    modules: ['node_modules','src']
  },
  module: {
    rules: [
      {
        test: /^(?!.*\.spec\.js$).*\.(js|jsx)$/,
        loader: ['babel-loader'],
        include: path.resolve(__dirname + '/../../src/'),
        exclude: /(node_modules)/
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../../src")
      },
      {
        test: /\.pdf$/,
        loader: ['file-loader']
      }
    ]
  }
}
