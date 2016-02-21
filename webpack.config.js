var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./client/main.js",
  output: {
    filename: "server/public/bundle.js",
    publicPath: "http://127.0.0.1:3000/"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties', 'transform-object-rest-spread']
        }
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style?sourceMap', 'css?sourceMap!less?sourceMap')
        // loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("server/public/bundle.css"),
    new webpack.NoErrorsPlugin()
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production'),
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin()
  ]
  devtool: 'source-map'
}
