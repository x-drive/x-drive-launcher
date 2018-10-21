const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

module.exports = merge(
  {
    mode: 'development',
    devtool: 'source-map',
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          use: ['eslint-loader'],
          exclude: /node_modules/
        }
      ]
    }
  },
  baseConfig
);
