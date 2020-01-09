const path = require('path');
const commonConfig = require('./webpack.common');
const TerserJSPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const analyzerMode = process.env.ANALYZE ? 'static' : 'disabled';

module.exports = {
    ...commonConfig,
    mode: 'production',
    output: {
        ...commonConfig.output,
        filename: '[name].[hash:5].js'
    },
    resolve: {
        ...commonConfig.resolve,
        alias: {
            ...commonConfig.resolve.alias,
            'react-dom': 'react-dom'
        }
    },
    optimization: {
        minimizer: [
            new TerserJSPlugin({
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin()
        ]
    },
    devtool: false,
    module: {
        rules: [...commonConfig.module.rules]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src', 'index.html'),
            minify: {
                collapseWhitespace: true
            },
            prod: true
        }),
        new CompressionPlugin({
            exclude: ['index.html']
        }),
        new BundleAnalyzerPlugin({
            analyzerMode
        })
    ]
};
