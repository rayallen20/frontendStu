# 02-webpack入口和出口修改

## 1. 入口与出口

- [webpack入口](https://www.webpackjs.com/concepts/#entry)
- [webpack出口](https://www.webpackjs.com/concepts/#output)

- webpack入口: 简单理解就是要打包哪些文件
- webpack出口: 简单理解就是打包后的文件放在哪里

## 2. 实现

- step1. 项目根目录下新建`webpack.config.js`
  - 该配置文件会被node.js解析,因此使用CommonJS规范书写即可
- step2. 在该文件中配置入口和出口

```javascript
const path = require('path')

module.exports = {
  entry: {
    // 配置多个入口文件
    useSum: './src/useSum.js',
    useUtils: './src/useUtils.js',
  },
  output: {
    // 这里的[name]会被替换为entry中的key 实现每个入口文件对应一个出口文件的效果
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    // 清空dist目录
    clean: true,
  },
}
```