let path = require('path'),
    webpack = require('webpack'),
    HtmlWebPackPlugin = require('html-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist'),
    main: path.join(__dirname, 'src/main.js')
}

let wpConfig = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        PATHS.main
    ],
    output: {
        path: PATHS.dist,
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
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
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({ 
            title: 'React Native Starter Kit',
            template: './src/index.html'
        })
    ],
    devServer: {
        port: 3000,
        overlay: {
            errors: true,
            warnings: true,
        }
    },
}

module.exports = wpConfig