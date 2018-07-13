const webpack = require("webpack");

module.exports = {
  entry: ["./polyfills", "react-hot-loader/patch", "./index.web.js"],
  devServer: {
    hot: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          babelrc: false,
          presets: ["@babel/env", "react", "react-native"],
          plugins: [
            "react-hot-loader/babel",
            ["react-css-modules", { handleMissingStyleName: "ignore" }],
          ],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "react-native": "react-native-web",
    },
    extensions: [".web.js", ".js", ".web.jsx", ".jsx"],
  },
};
