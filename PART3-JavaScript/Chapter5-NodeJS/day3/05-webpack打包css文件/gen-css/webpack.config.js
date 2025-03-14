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
            template: path.resolve(__dirname, './public/index.html'),
        })
    ],
    module: {
        rules: [
            {
                // 匹配所有以.css结尾的文件
                test: /\.css$/,
                // 使用style-loader和css-loader处理.css文件
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}