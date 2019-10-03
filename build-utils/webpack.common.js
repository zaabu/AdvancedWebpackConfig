//This file contains the shared Webpack configuration for development and build mode.


const path = require('path');
// Generate new html file with bundled js file on each build
const HtmlWebpackPlugin = require('html-webpack-plugin')
// ignore node modules folder
const nodeExternals = require("webpack-node-externals");
//Enable wiping of content in dist/ folder before creating the new src/index.html and src/bundle.js files
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    target: "node", // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    entry: './src/index.js',
    module: {
        rules: [
            {   // use babel loader for all js / jsx files
                test: /\.(js|jsx)$/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    plugins: [
        new CleanWebpackPlugin(),
        //Generates new index.html file on each build. Includes all your webpack bundles in the body  of index.html using script tags
        //Used in dev environment
        new HtmlWebpackPlugin({
            title: 'Hello webpack bundled javascript projectt',
            template: './src/index.html'
        })
    ],
    output : {
        //Put production files inside this folder. Wipe folder every time we run start script
        path: path.resolve(__dirname, '../', 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    
    devServer: {
        // directory to serve files not generated by webpack
        contentBase: './public'
    }

}