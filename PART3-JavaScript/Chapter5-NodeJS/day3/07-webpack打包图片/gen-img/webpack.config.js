const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.bundle.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                // 将匹配到的文件作为单独的文件输出到指定目录
                // 实际的过程是:
                // 1. 若文件大小小于8KB,则将文件转换为base64编码,直接打包到js文件中
                // 2. 若文件大小大于8KB,则复制文件到指定目录
                // 3. 生成一个供代码引用的URL
                // 这样可以确保图片等资源文件在打包后仍然可以被正确引用和使用
                type: 'asset',
                generator: {
                    // asset/: 表示将资源文件输出到asset目录下
                    // [name]: 表示原文件名
                    // [hash:6]: 表示文件内容的hash值 [hash:6]则表示取前6位
                    // [ext]: 表示文件扩展名
                    filename: 'asset/[name].[hash:6][ext]'
                }
            }
        ]
    }
}