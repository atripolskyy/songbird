/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPLugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

function NothingPLugin() {
    this.apply = function () {};
}

const config = (env) => ({
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader',
            },
            {
              test: /\.(css|scss|sass)$/,
              exclude: /\.module\.(css|scss|sass)$/,
              use: [
                env && env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                  },
                },
                'postcss-loader',
                'sass-loader'
              ]
            },
            {
                test: /\.module\.(css|scss|sass)$/,
                use: [
                  env && env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPLugin({
            template: 'public/index.html'
        }),
        env && env.analyze ? new BundleAnalyzerPlugin() : new NothingPLugin(),
        env && env.NODE_ENV === 'production'
          ? new MiniCssExtractPlugin({ chunkFilename: '[id].css', filename: '[name].css' })
          : new NothingPLugin(),
    ]
});

module.exports = (env) => config(env);
