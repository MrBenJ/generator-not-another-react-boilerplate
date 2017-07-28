const path = require('path');
const webpack = require('webpack');

// const ENV = process.env.NODE_ENV || 'development';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = {
    entry: [
        './ui/entry.js',
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /(\.woff|\.ttf|\.svg|\.eot|\.gif)/,
                use: 'url-loader'
            }
        ]
    },
    resolve: {
        alias: {
            js: path.resolve(__dirname, 'ui/js/'),
            components: path.resolve(__dirname, 'ui/js/components'),
            style: path.resolve(__dirname, 'ui/style/')
        }
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new webpack.optimize.UglifyJsPlugin()
    ]

}
