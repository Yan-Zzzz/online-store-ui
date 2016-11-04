var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'app': './src/main.jsx',
    'vendor': './src/vendor.jsx'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  resolveUrlLoader: {
    root: helpers.root('src')
  },

  sassLoader: {
    includePaths: [
      helpers.root('src', 'app'),
      helpers.root('src', 'assets', 'css')
    ]
  },

  module: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.js?x$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.scss$/,
        include: helpers.root('src', 'app'),
        loader: 'to-string!css?sourceMap!resolve-url!sass?sourceMap'
      },
      {
        test: /\.scss$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!resolve-url!sass?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'to-string!css?sourceMap'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor']
    }),

    new HtmlWebpackPlugin({
      template: helpers.root('src', 'index.html'),
      favicon: helpers.root('src', 'favicon.ico'),
    })
  ]
};
