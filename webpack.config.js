const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== "production";

let pathsToClean = [
  'dist'
]

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    hello: './src/hello.js'
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js'
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
      },
      {
        test: /\.css$/i,
        use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'learn webpack4',
      filename: 'index.html',
      template: 'public/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: 'learn webpack4',
      filename: 'hello.html',
      template: 'public/index.html',
      chunks: ['hello']
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkfilename: devMode ? "[name].css" : "[id].[hash].css"
    }),
    new CleanWebpackPlugin(pathsToClean)
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
}