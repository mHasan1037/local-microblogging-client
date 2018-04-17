const path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.jsx',
    vendor: [
      'react',
      'react-dom',
      'prop-types',
      // 'classnames',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].min.js',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                // modules: true,
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MinifyPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index-template.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeScriptTypeAttributes: true,
      },
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
    }),
    new ExtractTextPlugin('[name].[chunkhash].min.css'),
  ],
};
