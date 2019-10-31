const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './index.jsx',
    },
    context: `${__dirname}/static_src`,
    output: {
        path: `${__dirname}/static/build`,
        filename: 'app.js',
    },

    watch: process.argv[process.argv.length - 1] === 'development',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "static_src"),
                exclude: path.resolve(__dirname, "node_modules"),
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins: [
                        [
                            "@babel/plugin-proposal-class-properties",
                            {
                                "loose": true
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
        ],
    },


    resolve: {
        modules: [path.resolve(__dirname, "static_src"), 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
};