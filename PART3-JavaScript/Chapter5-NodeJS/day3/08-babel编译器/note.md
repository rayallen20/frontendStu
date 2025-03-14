# 08-babel编译器

## 1. 简介

- [babel](https://babeljs.io/): 一个JavaScript编译器,可以将ES6代码转换为ES5代码
- [babel-loader](https://www.webpackjs.com/loaders/babel-loader/): 让webpack使用babel转译JS代码

## 2. 安装

- `npm install @babel/core @babel/preset-env babel-loader -D`
  - `@babel/core`: JS编译器,用于分析JS代码,生成AST,并输出新的JS代码
  - `@babel/preset-env`: 一些预设的规则,用于告诉babel如何转译代码
  - `babel-loader`: webpack使用的babel插件

## 3. 配置

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
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
```