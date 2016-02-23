var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: "./client/main.js",
    vendor: ['react', 'react-dom', 'redux', 'react-redux']
  },
  output: {
    filename: "server/public/bundle.js"
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
    new webpack.optimize.CommonsChunkPlugin('vendor', 'server/public/vendor.js'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      warnings: false
    })
  ]
  // devtool: 'source-map'
}
