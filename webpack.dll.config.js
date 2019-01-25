/*
 * Created by charlotte.wang(wangchao@gagogroup.com) on 2019/01/25
 * Last Modified by charlotte.wang on 2019/01/25
 * Copyright (c) 2019 Gago Ltd.
 * 
 * HISTORY:
 * Date      	By       	Comments
 * ----------	---------	-------------------------------------------------------
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const library = "[name]_lib";
const path = require("path");

module.exports = {
  entry: {
    vendors: ["react", "react-dom"]
  },
  output: {
    filename: "[name].dll.js",
    path: path.resolve(__dirname, "dist"),
    library
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'app', 'index.html'),
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, "dist/[name]-manifest.json"),
      name: library,
      context: __dirname
    }),
  ],
}
