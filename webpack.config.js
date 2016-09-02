var autoprefixer = require('autoprefixer');
var classNames = require('classnames');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var build = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    "app": ['./src/app.jsx', './src/stylesheets/main.scss']
  },

  output: {
    path: __dirname + '/dist',
    publicPath: 'http://localhost:8080/dist',
    filename: (build) ? '[name].bundle.min.js' : '[name].bundle.js'
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        include: __dirname + '/src',
        loaders: ['eslint-loader'],
        exclude: /node_modules/
      }
    ],

    loaders: [
      {
        test: /\.jsx?$/,
        include: __dirname + '/src',
        loader: 'babel-loader',
        query: {
          plugins: ['babel-plugin-add-module-exports'],
          presets: ['es2015', 'react']
        }
      },

      {
        test: /\.s?css$/,
        include: __dirname + '/src/stylesheets',
        loader: ExtractTextPlugin.extract('style', '!css!postcss')
      },

      {
        test: /\.scss$/,
        include: __dirname + '/src/stylesheets',
        loader: (build) ? 'sass?outputStyle=compressed' : 'sass?outputStyle=expanded'
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=/images/[name]-[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        include: __dirname + '/src/stylesheets/fonts',
        loader: 'file?name=/fonts/[name].[ext]'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  postcss: function() {
    return [ autoprefixer({ browsers: ['last 3 versions'] }) ];
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),

    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),

    new ExtractTextPlugin(
      (build) ? '[name].min.css' : '[name].css'
    )
  ]
}
