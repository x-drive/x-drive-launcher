const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    index: ['./index.jsx']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/assets'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, '../src')],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[path]-[local]'
            }
          },
          {
            loader: 'less-loader'
          }
        ],
        include: [path.resolve(__dirname, '../src')],
        exclude: /node_modules/
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
