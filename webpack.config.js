const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    hello: './src/hello.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  }
}