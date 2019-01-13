const merge = require('webpack-merge');
const webpack = require('webpack');

const config = require('./webpack.common');

module.exports = merge(config, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});
