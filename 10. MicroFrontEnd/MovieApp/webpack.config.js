const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: 'dist',
        },
        port: 9000,
        open: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', { targets: 'defaults' }],
                                [
                                    '@babel/preset-react',
                                    { runtime: 'automatic' },
                                ],
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'movieapp',
            filename: 'remoteEntry.js',
            remotes: {
                homePage: 'homePage@http://localhost:3000/remoteEntry.js',
                detailPage: 'detailPage@http://localhost:3003/remoteEntry.js',
                seatSelection:
                    'seatSelection@http://localhost:3002/remoteEntry.js',
            },
            exposes: {
                './MovieData': './src/movieObservable.js',
            },
            shared: ['react', 'react-dom'],
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new MiniCSSExtractPlugin(),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};
