var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  cache: false,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" },
        ],
      },
    ],
  },
  resolve: {
    mainFiles: ["index", "Index"],
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    open: true,
    hot: false,
    liveReload: true,
    compress: true,
    historyApiFallback: true,
    port: 3005,
    static: {
      directory: path.join(__dirname, "public"),
      watch: {
        ignored: /node_modules/,
      },
    }
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "http://localhost:5005",
    }),
  },
};
