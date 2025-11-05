const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSWebpackPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new MiniCSSWebpackPlugin(),
        new ModuleFederationPlugin({
            name: 'home',
            filename: 'remoteEntry.js',
            remotes: {
                components: 'components@http://localhost:3001/remoteEntry.js',
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, 'src'),
                exclude: path.join(__dirname, 'node_modules'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: 'defaults',
                                    },
                                ],
                                [
                                    '@babel/preset-react',
                                    {
                                        runtime: 'automatic',
                                    },
                                ],
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [MiniCSSWebpackPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCSSWebpackPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)/,
                type: 'asset/resource',
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};
