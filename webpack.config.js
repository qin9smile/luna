/*
 * Created by charlotte.wang(wangchao@gagogroup.com) on 2019/01/25
 * Last Modified by charlotte.wang on 2019/01/25
 * Copyright (c) 2019 Gago Ltd.
 * 
 * HISTORY:
 * Date      	By       	Comments
 * ----------	---------	-------------------------------------------------------
 */
const path = require("path");
const webpack = require("webpack");
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HappyPack = require("happypack");
module.exports = {
  name: "app",
  mode: process.env.NODE_ENV,
  entry: {
    app: ["./src/app/app.tsx"],
    vendor: ["@babel/polyfill", "react", "react-dom"]
  },
  // entry: ["webpack-hot-middleware/client", 'webpack/hot/only-dev-server', "./src/app/app.tsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    alias: {
      // "react-hot-loader": path.resolve(path.join(__dirname, "./node_modules/react-hot-loader")),
      "react": path.resolve(path.join(__dirname, "./node_modules/react"))
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
        },
        // include: [path.resolve("src")],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: "happypack/loader?id=js-pack",
        // loader: "babel-loader?cacheDirectory=true",
        include: [path.resolve("src")],
        exclude: /node_modules/
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,  "src/app", "index.html"),
    }),
    new ForkTsCheckerWebpackPlugin(),
    new HappyPack({
      id: "js-pack",
      threads: 4,
      loaders: ["babel-loader?cacheDirectory=true"]
    })
  ]
};