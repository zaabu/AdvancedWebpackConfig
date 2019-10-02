// import { BundleAnalyzerPlugin as WebpackBundleAnalyzer } from 'webpack-bundle-analyzer';
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    plugins: [
        new WebpackBundleAnalyzer({
            analyzerMode: 'static',
            reportFilename: './report.html',
            openAnalyzer: false
        })
    ]
}
