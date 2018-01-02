let path = require('path'),
    config = require('./project.config')

let wpConfig = {
    entry: path.join(__dirname, config.sourceFolder, config.entryFile),
    output: {
        path: path.join(__dirname, config.distFolder),
        filename: config.bundleFile
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-class-properties']
                }
            },
        ]
    },
    devServer: {
        contentBase: `./${config.distFolder}`,
        historyApiFallback: true,
        inline: true,
        port: config.devPort
    }
}

module.exports = wpConfig