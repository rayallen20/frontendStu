# 04-打包

- `publicPath`: 允许以文件形式提供静态资源的路径
  - 路由设置hash模式时,能直接用静态文件的形式访问
  - 路由设置为history模式时,需要服务器配置重定向,否则浏览器会将路由识别为路径

- `vue.config.js`:

```javascript
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        loaderOptions: {
            scss: {
                additionalData: '@use "@/styles/element-variables.scss" as *;'
            }
        }
    },
    publicPath: './'
})
```

- 打包之后的`.js.map`文件: 记录源代码和编译后代码之间的映射关系,方便调试
  - 生产环境可以去掉

- `vue.config.js`:

```javascript
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        loaderOptions: {
            scss: {
                additionalData: '@use "@/styles/element-variables.scss" as *;'
            }
        }
    },
    // 允许以文件形式访问
    publicPath: './',
    // 生产环境打包时不生成.map文件
    productionSourceMap: false
})
```

- 生成打包报告:
- `package.json`:

```json
{
    "scripts": {
        "build": "vue-cli-service build --report"
    }
}
```

- 组件使用CDN,不参与打包
  - [这里](https://www.jsdelivr.com/)可以找到很多npm的包的CDN地址
  - [这个](https://unpkg.com/)可能在国内稍微快点.这个网站在url后边直接跟包名,就是CDN地址
- `public/index.html`: 在该文件中引入CDN
  - JS放`</body>`标签之前
  - CSS放`<head>`标签中

```html
<!DOCTYPE html>
<html lang="">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link rel="icon" href="<%= BASE_URL %>favicon.ico">
  <title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
<noscript>
  <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
</noscript>
<div id="app"></div>
<!-- built files will be auto injected -->
<script src="https://cdn.jsdelivr.net/npm/echarts@5.6.0/dist/echarts.min.js"></script>
</body>
</html>
```

- 在`vue.config.js`中,配置不参与打包的包

```javascript
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@use "@/styles/element-variables.scss" as *;'
      }
    }
  },
  // 允许以文件形式访问
  publicPath: './',
  // 生产环境打包时不生成.map文件
  productionSourceMap: false,
  configureWebpack: {
    // 配置不参与打包的第三方库
    externals: {
      // 键: 包名 和package.json中的dependencies一致
      // 值: 引入CDN后,window对象上会挂载的变量名
      // 例如: 引入CDN后,window.echarts
      echarts: 'echarts'
    }
  }
})
```