const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/client.jsx',
  target: 'node',
  output: {
    path: __dirname,
    filename: 'dist/client.js',
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.jsx$/, exclude: /node_modules/, loaders: ['babel-loader'] },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.join(__dirname, './src'), 'node_modules'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),
  ],
};
