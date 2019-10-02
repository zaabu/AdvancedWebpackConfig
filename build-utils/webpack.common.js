//Shared Webpack configuration for development and build mode.
const path = require('path');
// generate new html file on each build
const HtmlWebpackPlugin = require('html-webpack-plugin')
// ignore node modules folder
const nodeExternals = require("webpack-node-externals");
//Enable wiping of content in public/ folder before creating the new public/index.html and public/bundle.js files
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    devtool: "source-map",
    target: "node", // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello webpack bundled javascript project',
            template: './public/index.html'
        })
    ],
    output : {
        path: path.resolve(__dirname, '../', 'public'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: './public'
    }

}