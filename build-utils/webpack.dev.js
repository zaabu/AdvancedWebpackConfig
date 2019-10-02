//Webpack configuration only used by development mode.

//Copies env variables to make them accessible in your source code 
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    plugins: [
        //Pick env variables from .env.development
        new Dotenv({
            path: './.env.development',
        })
    ],
};