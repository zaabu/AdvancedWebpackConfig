//webpack.prod.js: Webpack configuration only used by production mode.
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        //Pick env variables from .env.production
        new Dotenv({
            path: './.env.production',
        })
    ],
};