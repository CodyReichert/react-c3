var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        main: "./src/main.js"
    },
    output: {
        path: "./dist",
        filename: "react-c3.js"
    },
    resolve: {
        alias: {
            c3: path.join(__dirname, "./node_modules/c3")
        }
    },
    resolveLoader: {
        modulesDirectories: [
            './node_modules'
        ]
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: [/vendor\//, /node_modules\//],
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0']
            }
        }]
    },
    externals: {
        react: {
            'commonjs': 'react',
            'commonjs2': 'react',
            'amd': 'react',
            'root': 'React'
        }
    },
};
