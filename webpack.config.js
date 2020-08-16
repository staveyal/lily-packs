const path = require('path')
const DotenvWebpackPlugin = require('dotenv-webpack')
const srcPath = path.join(__dirname, 'client')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
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
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    // Vars from .env
    new DotenvWebpackPlugin()
  ]
}
