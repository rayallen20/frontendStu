# 12-开发环境调试-sourceMap

## 1. source map

- [source map](https://www.webpackjs.com/guides/development/#using-source-maps): 一个映射文件,它存储了源代码和编译代码之间的映射关系
- 问题:代码被压缩和混淆,无法正确定位源代码位置(行数和列数)

## 2. 配置

```javascript
module.exports = {
    devtool: 'inline-source-map',
}
```

- 注意: `source map`仅适用于开发环境,不要在生产环境使用(防止被轻易查看源码位置)