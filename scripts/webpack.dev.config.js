const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

module.exports = merge(
  {
    mode: 'development',
    devtool: 'source-map'
  },
  baseConfig
);
