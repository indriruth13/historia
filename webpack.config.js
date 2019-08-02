const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        'historia-root-application': 'historia.js',
        'common-dependencies': [
            'react',
            'react-dom',
        ],
    },
    output: {
        publicPath: '/dist/',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
            test: /\.js?$/,
            exclude: [path.resolve(__dirname, 'node_modules')],
            loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    { loader : process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                        options: { sourceMap: true }},
                    { loader : "css-loader",
                        options: { sourceMap: true }},
                    { loader : "sass-loader",
                        options: { sourceMap: true }}
                ]
            },
            {
                test: /\.(gif|svg|jpg|png)$/,
                use : [
                    {loader : "file-loader"},
                ]
            }
        ]
    },
    node: {
        fs: 'empty'
    },
    resolve: {
        modules: [
            __dirname,
            'node_modules',
        ],
        extensions: ['.js', '.jsx', '.scss']
    },
    optimization: {
        splitChunks: {
            name: 'common-dependencies.js',
        },
    },
    devtool: 'source-map',
    externals: [],
    devServer: {
        historyApiFallback: true
    }
};