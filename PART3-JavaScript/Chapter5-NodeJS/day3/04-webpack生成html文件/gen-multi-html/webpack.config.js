const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        useSum: './src/useSum.js',
        useUtils: './src/useUtils.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        // 生成 useSum.bundle.html
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/useSum.html'),
            // 输出的文件名
            filename: 'useSum.bundle.html',
            // 指定引入的js文件
            chunks: ['useSum'],
        }),

        // 生成 useUtils.bundle.html
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/useUtils.html'),
            filename: 'useUtils.bundle.html',
            chunks: ['useUtils'],
        })
    ]
}