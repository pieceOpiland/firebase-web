const merge = require('webpack-merge');
const webpack = require('webpack');

const config = require('./webpack.common');

module.exports = merge(config, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: ['webpack-hot-middleware/client'],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
});