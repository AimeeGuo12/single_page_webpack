// 编写开发者模式运行脚本

const webpack = require('webpack');
const webpackConfig = require('../config/webpack.prod.js');
webpack(webpackConfig, (err, stats) => {
    if(err || stats.hasErrors()){  // https://www.webpackjs.com/api/node/
        console.log(err)
        console.log(stats)
        console.log('编译失败');
        if (err) {
            console.error(err.stack || err);
            if (err.details) {
              console.error(err.details);
            }
            return;
          }
        
          const info = stats.toJson();
        
          if (stats.hasErrors()) {
            console.error(info.errors);
          }
        
          if (stats.hasWarnings()) {
            console.warn(info.warnings);
          }
    }else{
        console.log('哇咔咔，成功了！');
    }
})