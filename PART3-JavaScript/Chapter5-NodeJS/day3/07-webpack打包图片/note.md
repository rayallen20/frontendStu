# 07-webpack打包图片

## 1. 资源模块

- [资源模块](https://www.webpackjs.com/guides/asset-modules):是webpack内置的一个模块,用于处理资源文件,如图片/字体等

## 2. 使用

- 准备图片素材到`src/assets`中
- 在`index.less`中给`body`添加背景图
- 在`main.js`中给`img`标签添加`logo`图片
  - 先引入图片(引入图片和引入css/less等文件一样)
  - 再使用图片
- 配置`webpack.config.js`让Webpack拥有打包图片功能

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
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
```

- 打包后运行`dist/index.html`观察效果

## 3. type字段值的说明

- `asset/resource`: 这种类型会将文件始终作为单独的文件输出到指定目录,不会嵌入到文件中.它适用于需要确保文件始终以独立文件形式存在的情况
- `asset/inline`: 这种类型会将文件转换为base64编码,并嵌入到代码中.它适用于文件较小,以减少http请求的情况
- `asset`: 这种类型会根据文件的大小,自动选择上述两种类型的其中一种.它适用于文件大小不确定的情况
  - 这个大小的阈值是8KB,即文件大小小于8KB时,会转换为base64编码;大于8KB时,会作为单独的文件输出到指定目录