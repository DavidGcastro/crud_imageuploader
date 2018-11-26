const webpack = require('webpack');
const path = require('path');
const SRC_DIR = path.resolve(__dirname, 'client');
const DIST_DIR = path.resolve(__dirname, 'public');

const config = {
  entry: ['babel-polyfill', SRC_DIR + '/index.js'],
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        secure: false
      }
    }
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /js?$/,
        include: path.resolve(__dirname, './client'),
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-2', 'react']
        }
      },
      // use the style-loader/css-loader combos for anything matching the .css extension
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};

module.exports = config;
