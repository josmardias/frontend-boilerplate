module.exports = {
  entry: './src/main.js',
  output: {
    path: 'www/js',
    filename: 'app.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
}
