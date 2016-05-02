const path = require('path')

const PATHS = {
  app: path.join(__dirname, '..', 'src', 'main.js'),
  www: path.join(__dirname, '..', 'www'),
  build: path.join(__dirname, '..', 'www', 'js'),
}

module.exports = {
  entry: {
    app: [
      PATHS.app,
    ],
  },
  output: {
    path: PATHS.build,
    publicPath: '/assets/',
    filename: 'app.js',
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
