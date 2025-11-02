const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js',
        courses: './src/pages/courses.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['index'],
            inject: true,
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/courses.html',
            chunks: ['courses'],
            inject: true,
            filename: 'courses.html',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'vendor',
        },
    },
};
