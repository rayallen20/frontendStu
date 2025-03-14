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
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/useSum.html'),
            filename: 'useSum.bundle.html',
            chunks: ['useSum'],
        }),

        // 生成 useUtils.bundle.html
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/useUtils.html'),
            filename: 'useUtils.bundle.html',
            chunks: ['useUtils'],
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}