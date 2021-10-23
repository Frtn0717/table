const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, './build')
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './public')
    },
    liveReload: true,
    port: 9000,
    hot: false,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
})