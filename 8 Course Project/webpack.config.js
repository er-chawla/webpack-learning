const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { chunk } = require('lodash');

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
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                quietDeps: true, // This will suppress Bootstrap deprecation warnings
                            },
                        },
                    },
                ],
            },
        ],
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
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/images/*'),
                    to: path.resolve(__dirname, 'dist'),
                    context: 'src',
                },
            ],
        }),
        //new BundleAnalyzerPlugin({}),
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'vendor',
        },
    },
};
