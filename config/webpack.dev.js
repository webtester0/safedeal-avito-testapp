const path = require('path');
const commonConfig = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    ...commonConfig,
    mode: 'development',
    output: {
        ...commonConfig.output,
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        rules: [...commonConfig.module.rules]
    },
    plugins: [
        ...commonConfig.plugins,
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src', 'index.html'),
            filename: 'index.html'
        })
    ],
    stats: {
        all: false,
        colors: true,
        env: false,
        errors: true,
        errorDetails: true,
        timings: true,
        warnings: true
    }
};
