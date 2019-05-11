const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    mode: process.env.NODE_ENV,
    target: 'node',
    entry: './server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                loader: 'css-loader',
                options: {
                    exportOnlyLocals: true
                }
            }
        ]
    },
    externals: [webpackNodeExternals()]
};
