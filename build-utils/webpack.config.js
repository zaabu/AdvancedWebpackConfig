// shared config file for start and build scripts
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

const getAddons = addonsArgs => {
    const addons = Array.isArray(addonsArgs) ? addonsArgs : [addonsArgs];

    return addons
        .filter(Boolean)
        .map(name => require(`./addons/webpack.${name}.js`));
}
/*
The function receives our env environment flag from the npm script. 
That way, we can dynamically require an environment specific Webpack configuration file
with JavaScript template literals and merge it with a common Webpack configuration.
*/

module.exports = ({ env, addon }) => {
    const envConfig = require(`./webpack.${env}.js`);

    return webpackMerge(commonConfig, envConfig, ...getAddons(addon));
};


