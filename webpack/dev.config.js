const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const root = path.join(__dirname, './..');

console.log(path.join(root, 'src/index.jsx'));

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(root, 'dist'),
        port: 3000,
        // proxy: [{path: '/', target: 'http://localhost:8000'}],
        historyApiFallback: true

    }
});