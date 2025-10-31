const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index.js',
        product: './src/products.js',
    },
    output: {
        filename: '[name]_bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: './dist',
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['index'],
            inject: true,
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/products.html',
            chunks: ['product'],
            inject: true,
            filename: 'products.html',
        }),
    ],
};
