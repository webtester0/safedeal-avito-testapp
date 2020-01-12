const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { createTransformer } = require('typescript-plugin-styled-components');

const srcPath = path.resolve(__dirname, '../src', 'index.tsx');
const buildPath = path.resolve(__dirname, '../public');

const styledComponentsTransformer = createTransformer({
    getDisplayName: (filename, bindingName) => {
        const pathParts = filename.split('/');
        const componentName = pathParts[pathParts.length - 2];
        return `${componentName}__${bindingName}`;
    },
    displayName: process.env.NODE_ENV === 'development',
    minify: process.env.NODE_ENV !== 'development'
});

module.exports = {
    entry: {
        index: srcPath,
        fonts: path.resolve(__dirname, '../src/assets/fonts', 'robotocondensed')
    },
    output: {
        path: buildPath,
        filename: 'bundle.[hash].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json', '.css'],
        alias: {
            'typescript-ioc': 'typescript-ioc/es5.js',
            'react-dom': '@hot-loader/react-dom',
            '@pages': path.resolve(__dirname, '../src/components', 'pages'),
            '@molecules': path.resolve(__dirname, '../src/components', 'molecules'),
            '@organisms': path.resolve(__dirname, '../src/components', 'organisms'),
            '@containers': path.resolve(__dirname, '../src', 'containers'),
            '@store': path.resolve(__dirname, '../src', 'store'),
            '@assets': path.resolve(__dirname, '../src', 'assets'),
            '@common': path.resolve(__dirname, '../src', 'common'),
            '@device': path.resolve(__dirname, '../src', 'device'),
            'react-dom': '@hot-loader/react-dom'
        }
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /(node_modules)/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
                }
            },
            {
                test: /\.css/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(woff|woff2|ttf|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin(),
        new webpack.ProgressPlugin(),
    ],
    devServer: {
        hot: true,
        contentBase: buildPath
    }
};
