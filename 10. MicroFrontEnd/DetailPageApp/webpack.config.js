const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.join(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: 'dist',
        },
        port: 3003,
        open: true,
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
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),

        new MiniCSSExtractPlugin(),
        new ModuleFederationPlugin({
            name: 'detailPage',
            filename: 'remoteEntry.js',
            exposes: {
                './DetailPage':
                    './src/components/DetailContent/DetailsContent.jsx',
            },
            remotes: {
                movieapp: 'movieapp@http://localhost:9000/remoteEntry.js',
            },
            shared: ['react', 'react-dom'],
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'async',
        },
    },
};
