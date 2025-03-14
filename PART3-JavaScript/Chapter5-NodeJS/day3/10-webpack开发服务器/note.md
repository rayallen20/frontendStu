# 10-webpack开发服务器

## 1. 简介

- [webpack-dev-server](https://www.webpackjs.com/guides/development/#using-webpack-dev-server): 一个小型的Node.js Express服务器,它使用`webpack-dev-middleware`来服务于webpack的包.它还具有通过websocket实时重新加载(live reloading)能力

## 2. 使用

- 安装: `npm install --save-dev webpack-dev-server`
- 配置打包模式为开发模式

```json
{
  "scripts": {
    "build": "webpack --mode=development",
    "dev": "webpack serve --mode=development"
  }
}
```

- 使用`npm run dev`命令启动开发服务器即可
- 默认端口为`8080`,可以通过`--port`参数指定端口
- `--open`: 自动打开浏览器
- 通过浏览器访问时,记得访问打包后的html的文件名,如`http://localhost:8080/index.bundle.html`