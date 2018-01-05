let path = require('path'),
    webpack = require('webpack'),
    config = require('./project.config')

let wpConfig = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, config.sourceFolder, config.entryFile)
    ],
    output: {
        path: path.join(__dirname, config.publicFolder,  config.distFolder),
        filename: config.bundleFile,
        publicPath: `/${config.distFolder}/`
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['react-hot-loader/babel', 'transform-class-properties']
                }
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, config.distFolder),
        publicPath:`/${config.publicFolder}/`,
        historyApiFallback: true,
        inline: true,
        port: config.devPort,
        hot: true
    }
}

module.exports = wpConfig