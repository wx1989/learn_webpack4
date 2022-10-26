const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    hello: './src/hello.js'
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: [
            //   ['@babel/preset-env', { targets: "defaults" }]
            // ],
            // TODO: 和.bablerc效果一致
            plugins: ["@babel/plugin-transform-arrow-functions", ["@babel/plugin-proposal-decorators", { "legacy": true }]]
          }
        }
      }
    ]
  }
}