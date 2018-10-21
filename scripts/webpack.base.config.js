const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    index: './app/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/assets'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, '../src')]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  target: 'web',
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    port: 8081
  },
  plugins: []
};
