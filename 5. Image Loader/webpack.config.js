const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'images/[hash][ext]',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { modules: true } },
                ],
            },
            {
                test: /.s[ac]ss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { modules: true } },
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /.(png|jpg|svg|gif)$/,
                type: 'asset/resource',
            },
        ],
    },
};
