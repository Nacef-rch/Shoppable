/* eslint-disable @typescript-eslint/no-var-requires */
const CompressionPlugin = require(`compression-webpack-plugin`);
const webpack = require('webpack');
const BrotliPlugin = require(`brotli-webpack-plugin`);
const path = require(`path`);
module.exports = {
    plugins: [
        new BrotliPlugin({
            asset: '[fileWithoutExt].[ext].br',
            test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/
        }),
        new CompressionPlugin({
            test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
            filename(info) {
                const opFile = info.path.split('.'),
                    opFileType = opFile.pop(),
                    opFileName = opFile.join('.');
                return `${opFileName}.${opFileType}.gzip`;
            }
        }),
        new webpack.NormalModuleReplacementPlugin(/(.*).mock.json/, function (resource) {
            resource.request = '@assets/mock.blank.json';
        })
    ]
};
