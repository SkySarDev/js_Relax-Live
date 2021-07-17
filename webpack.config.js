/* eslint-disable*/
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const configObj = {
        splitChunks: {
            chunks: 'all',
        },
    };

    if (isProd) {
        configObj.minimizer = [new CssMinimizerPlugin(), new TerserWebpackPlugin()];
    }

    return configObj;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    target: isDev ? 'web' : 'browserslist',
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/js/main.js'),
        admin: path.resolve(__dirname, './src/js/admin.js'),
    },
    output: {
        clean: true,
        path: path.resolve(__dirname, './dist'),
        filename: isDev ? './js/bundle.[name].js' : './js/bundle.[name].[chunkhash].js',
    },
    optimization: optimization(),
    plugins: [
        new MiniCssExtractPlugin({
            filename: isDev ? './css/[name].css' : './css/[name].[chunkhash].css',
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
            chunks: ['main'],
            minify: {
                removeComments: isProd,
                collapseWhitespace: isProd,
            },
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './src/admin/index.html'),
            filename: 'admin/index.html',
            chunks: ['admin'],
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './src/admin/table.html'),
            filename: 'admin/table.html',
            chunks: ['admin'],
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/assets'),
                    to: path.resolve(__dirname, './dist/assets'),
                },
            ],
        }),
        new CleanWebpackPlugin(),
    ],
    devtool: isProd ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            },
                        },
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: '[path][name][ext]',
                },
            },
            {
                test: /\.(?:gif|png|jpg|jpeg|svg|ico)$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[path][name][ext]',
                },
            },
        ],
    },
    devServer: {
        port: 7777,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        hot: true,
        compress: true,
        open: false,
    },
};
