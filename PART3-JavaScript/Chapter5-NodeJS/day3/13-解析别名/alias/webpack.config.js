const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.bundle.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.bundle.html',
            chunks: ['main']
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
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset',
                generator: {
                    filename: 'asset/[name].[hash:6][ext]'
                }
            }
        ]
    },
    // 表示把源码信息映射到打包后的代码中
    devtool: 'inline-source-map',
    // 配置解析别名
    resolve: {
        alias: {
            // MyUtils此时就等价于 src/utils 这个路径
            MyUtils: path.resolve(__dirname, './src/utils'),
            // @ 此时等价于 src 这个路径
            '@': path.resolve(__dirname, 'src')
        }
    }
}