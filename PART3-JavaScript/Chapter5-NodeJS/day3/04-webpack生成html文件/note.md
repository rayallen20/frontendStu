# 04-webpack生成html文件

## 1. html-webpack-plugin插件

- 默认情况下,webpack是无法识别html文件的,所以我们需要安装一个插件来帮助我们生成html文件
- [html-webpack-plugin](https://www.webpackjs.com/plugins/html-webpack-plugin)

## 2. 基本使用

- 安装插件: `npm install html-webpack-plugin -D`
- 配置使用插件: 在webpack.config.js中配置

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.bundle.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ]
}
```

- 指定模板文件: 默认情况下,html-webpack-plugin会自动生成一个html文件,但是这个文件是空的,我们可以通过指定模板文件来生成html文件

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.bundle.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
        }),
    ]
}
```

- 生成的html文件中会自动引入打包后的js文件
- 同时打包多个html文件与js文件,并指定其引入关系的示例:

```javascript
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
```