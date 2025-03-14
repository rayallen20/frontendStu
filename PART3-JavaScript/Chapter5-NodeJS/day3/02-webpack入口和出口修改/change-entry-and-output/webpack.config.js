const path = require('path')

module.exports = {
    entry: {
        // 配置多个入口文件
        useSum: './src/useSum.js',
        useUtils: './src/useUtils.js',
    },
    output: {
        // 这里的[name]会被替换为entry中的key 实现每个入口文件对应一个出口文件的效果
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        // 清空dist目录
        clean: true,
    },
}