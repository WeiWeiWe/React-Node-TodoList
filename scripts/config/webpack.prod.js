const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { DIST_PATH } = require('../paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash:8].js',
    path: DIST_PATH,
  },
  plugins: [new CleanWebpackPlugin()],
});
