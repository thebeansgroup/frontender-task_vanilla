var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        main: ['./src/index.js', './src/css/main.scss'],
    },
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
                test: /\.png$/,
                loader: 'url-loader?8192',
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss!sass-loader'),
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loaders: ['babel'],
            }
          ]
    },
    devServer: {
        contentBase: './public',
        disableHostCheck: true,
    },
    postcss: function () {
        return [
          require('autoprefixer')
        ];
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new ExtractTextPlugin('css/styles.css'),
    ]
};