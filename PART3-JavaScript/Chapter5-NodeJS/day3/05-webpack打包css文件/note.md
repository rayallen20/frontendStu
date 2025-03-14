# 05-webpack打包css文件

## 1. 加载器介绍

- webpack默认只识别js和json文件内容,因此需要使用加载器,让webpack识别其他类型的文件内容
- [css-loader](https://www.webpackjs.com/loaders/css-loader): 用于解析CSS代码
- [style-loader](https://www.webpackjs.com/loaders/style-loader): 用于将CSS代码注入到HTML页面中(实际上是注入到DOM元素上)

## 2. 使用

- 准备css文件引入到`src/main.js`中
  - 这一步之所以要把CSS引入到JS中,是为了让CSS文件和入口文件产生依赖关系,以便CSS能够参与打包
  - 在JS文件中直接引入CSS文件的路径即可
- 下载`css-loader`和`style-loader`本地软件包
  - `npm install css-loader style-loader --save-dev`
- 配置`webpack.config.js`让Webpack拥有该加载器功能

```javascript
module.exports = {
    module: {
        rules: [
            {
                // 匹配css文件
                test: /\.css$/,
                // 使用何种加载器
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
```

- 打包后运行dist/index.html`观察效果
- 完整的`webpack.config.js`配置如下

```javascript
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
```