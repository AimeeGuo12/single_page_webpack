const webpackConfigCreator = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');
const config = {
    output: {
        filename: "[name].js",
        // publicPath: "/dist/"
    },
// 配置webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, "../dist"), //contentBase选项是server模式下的output，开启server后，webpack会实时编译代码到内存
        hot: true // 开启webpackDevServer热加载
    },
    devtool: "inline-source-map" //在打包后的文件中，如果出现异常，堆栈追踪异常不能定位到打包前的单个文件，所以使用source-map。官方推荐开发模式下使用inline-source-map, 生产模式使用source-map
}
const options = {
    mode: "development",
}
module.exports = merge(webpackConfigCreator(options), config);