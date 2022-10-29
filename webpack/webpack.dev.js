const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin');

let pathsToClean = [
  'dist'
]

module.exports = merge(common, {
  mode: 'development',
  devtool: false,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkfilename: "css/[name].css"
    }),
    new CleanWebpackPlugin(pathsToClean)
  ]
})