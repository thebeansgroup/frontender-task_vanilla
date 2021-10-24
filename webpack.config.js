var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
    './src/index.js'
  ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loaders: ['babel'],
            }
          ]
    },
    devServer: {
        contentBase: "./public",
        port: 3000
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
};
