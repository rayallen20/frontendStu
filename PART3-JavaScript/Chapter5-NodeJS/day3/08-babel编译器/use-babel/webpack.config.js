const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            chunks: ['index'],
        })
    ],
    module: {
        rules: [
            {
                // 匹配.js和.mjs文件 (.mjs是默认支持ECMAScript模块的文件扩展名)
                test: /\.m?js$/,
                // 排除node_modules和bower_components目录
                // node_modules是webpack存储依赖的目录
                // bower_components是bower存储依赖的目录
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // 定义使用的规则集
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            }
        ]
    },
}