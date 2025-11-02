const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    mode: 'development',
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
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
        //new BundleAnalyzerPlugin({}),
    ],
});
