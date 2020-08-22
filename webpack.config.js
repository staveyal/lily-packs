const path = require('path')
const DotenvWebpackPlugin = require('dotenv-webpack')
const webpack = require('webpack')
const srcPath = path.join(__dirname, 'client')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: 'inline-source-map',
  entry: {
    app: path.join(srcPath, 'app.tsx')
  },
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      enforce: 'pre',
      loader: 'ts-loader'
    }, {
      test: /\.s[ac]ss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  resolve: {
    // Enable webpack to resolve file extensions on imports
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      components: path.join(srcPath, 'components', 'index.ts'),
      pages: path.join(srcPath, 'pages', 'index.ts')
    }
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.PORT': process.env.PORT })
  ]
}
