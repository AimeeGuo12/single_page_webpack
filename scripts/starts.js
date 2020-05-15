const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack.dev.js');

// var express = require('express');
// var app = express();

// webpack 编译器
const compiler = webpack(webpackConfig);
const options = Object.assign({}, webpackConfig.devServer, {
    open: true
})
const server = new webpackDevServer(compiler, options);
server.listen(3008, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:8080');
})