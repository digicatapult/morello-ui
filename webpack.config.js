const path = require("path");
const dotenv = require('dotenv')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

const env = dotenv.config().parsed


module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.[contenthash].js",
    clean: true,
  },
  devServer: {
    port: 3000,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new DefinePlugin(Object.keys(env || []).reduce((out, next) => {
      out[`process.env.${next}`] = JSON.stringify(env[next])
      return out
    }, {})),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
}