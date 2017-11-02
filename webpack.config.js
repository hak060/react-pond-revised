const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, 'server/client/src/components/index.jsx'),
  output: {
    path: path.join(__dirname, 'server/client/compiled'),
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/, 
        query: { presets: ['es2015', 'react'] }
      }
    ]
  }
}