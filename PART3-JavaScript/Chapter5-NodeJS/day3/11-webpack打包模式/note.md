# 11-webpack打包模式

## 1. 简介

- [模式](https://www.webpackjs.com/configuration/mode/)

- 开发模式: `development`
  - 可调试代码
  - 实时加载
  - 模块热替换
- 生产模式: `production`
  - 压缩代码
  - 资源优化
  - 体积较小
- 不使用任何优化: `none`
- 默认值为`production`

## 2. 配置方式

### 2.1 在`webpack.config.js`中配置

```javascript
module.exports = {
    mode: 'development'
}
```

这种方式很不灵活,不推荐使用

### 2.2 在`package.json`中配置

```json
{
    "scripts": {
        "dev": "webpack --mode development",
        "build": "webpack --mode production"
    }
}
```

- 这种方式的本质是使用命令行参数,其优先级高于配置文件方式