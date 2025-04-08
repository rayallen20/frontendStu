# 5-vueCli配置文件说明

## 1. outputDir

- 作用: 指定打包输出的目录名,默认是`dist`
  - 支持`a/b`的写法

```javascript
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    outputDir: 'myDist',
    transpileDependencies: true
})
```

- 注: `transpileDependencies: true`表示对依赖也使用Babel进行转译

## 2. assetsDir

- 作用: 指定静态资源(JS/CSS/Fonts/图片等)的存放目录.该属性是相对于`outputDir`的路径

```javascript
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    outputDir: 'myDist',
    assetsDir: 'myAssets',
    transpileDependencies: true
})
```

## 3. publicPath

- 作用: 指定打包后的资源引用路径
  - 所谓资源引用路径,就是打包后的html在引用打包后的css/js时的路径
  - 默认是`/`
  - 一般用于生产环境,如果你的应用部署在一个子路径下,可以使用这个选项指定这个子路径
  - 例如,如果你的应用部署在`https://www.my-app.com/my-app/`,则设置`publicPath`为`/my-app/`

```javascript
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/my-app/',
  transpileDependencies: true
})
```

则打包后的html,引用css/js的路径就是`/my-app/js/xxx.js`和`/my-app/css/xxx.css`,大概如下:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>1-注册根组件</title>
  <link rel="stylesheet" href="/my-app/css/xxx.css" />
</head>
<body>
<div id="app"></div>
...
<script src="/my-app/js/xxx.js"></script>
</body>
```

通常该选项的做法是:

```javascript
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/my-app/' : '/',
  transpileDependencies: true
})
```

## 4. alias

- 作用: 配置导包路径的别名

看一下Vue创建的App根组件的代码:

```vue
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
```

如果想把`'./components/HelloWorld.vue'`改成`@/components/HelloWorld.vue`,可以在`vue.config.js`中配置`alias`:

```javascript
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))
  },
  transpileDependencies: true
})
```

- 可以连续设置别名:

```javascript
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.resolve.alias.
            // 指定@符号代表当前项目的src目录
            set('@', resolve('src')).
            // 指定components为src/components目录 
            set('components', resolve('src/components'))
  },
  transpileDependencies: true
})
```

那么此时,例子中的`'./components/HelloWorld.vue'`就可以修改为`'components/HelloWorld.vue'`