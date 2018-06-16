const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

// const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const BrotliGzipPlugin = require('brotli-gzip-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        // new MomentLocalesPlugin({localesToKeep: ['ru']}),
        new BrotliGzipPlugin({
            asset: '[path].br[query]',
            algorithm: 'brotli',
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new BrotliGzipPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
});