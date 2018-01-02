let path = require('path'),
    config = require('./project.config')

let wpConfig = {
    entry: path.resolve(__dirname, config.sourceFolder, config.entryFile),
    output: {
        path: path.resolve(config.globalPath, config.distFolder),
        fileName: config.bundleFile,
        publicPath: config.globalPath
    }
} 

module.exports = wpConfig