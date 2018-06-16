const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const root = path.join(__dirname, './..');

module.exports = {
    entry: {
        app: path.join(root, 'src/index.jsx')
        // polyfill: 'babel-polyfill'
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {root: root}),
        new HtmlWebpackPlugin({
            title: 'React App',
            // filename: 'index.html',
            template: path.join(root, 'assets/index.html'),
            containerId: 'root'
        }),
    ],
    output: {
        path: path.join(root, 'dist'),
        filename: '[name].bundle.js',
        // publicPath: '/static/',
        // exclude: [ 'files', 'to', 'ignore' ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: "vendor",
                    chunks: "initial",
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, './../src')
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    resolve: {
        alias: {
            '~': path.resolve(root, 'src'),
        },
    }
};
