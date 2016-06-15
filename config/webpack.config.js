const path = require('path')

const PATHS = {
  index: path.join(__dirname, '..', 'src', 'index.js'),
  www: path.join(__dirname, '..', 'www'),
  build: path.join(__dirname, '..', 'www', 'js'),
}

module.exports = {
  entry: {
    index: [
      PATHS.index,
    ],
  },
  output: {
    path: PATHS.build,
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  devServer: {
    contentBase: PATHS.www,
    noInfo: true,
    progress: true,
  },
}
