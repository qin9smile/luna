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
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HappyPack = require("happypack");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  name: "app",
  dependencies: ["vendors"],
  entry: {
    app: ["./src/app/app.tsx"],
    // vendor: ["react", "react-dom"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        include: [path.resolve("src")],
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
      template: path.resolve(__dirname, 'dist', 'index.html'),
    }),
    new HappyPack({
      id: "js-pack",
      threads: 4,
      loaders: ["babel-loader?cacheDirectory=true"]
    }),
    new webpack.DllReferencePlugin({
      // context: __dirname,
      manifest: require("./dist/vendors-manifest.json")
    }),
    new BundleAnalyzerPlugin()
  ]
};