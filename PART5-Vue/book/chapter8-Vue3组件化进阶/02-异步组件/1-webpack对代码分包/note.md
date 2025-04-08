# 1-webpack对代码分包

- webpack打包过程:
  - step1. 在构建整个组件树的过程中,组件和组件之间通过模块化直接依赖
  - step2. webpack会将组件模块打包到一起,比如打包到1个名为`app.js`的文件中
  - step3. 随着项目不断增大,打包生成的`app.js`也会过大,导致首屏渲染速度变慢

为解决这个问题,可以在打包时进行分包.对于一些不需要立即使用的组件,进行拆分,将它们拆分成小的代码块.

这些代码块会在需要时从服务端动态加载,而不是在初始加载时就全部下载.这样可以减少首屏加载的时间,提高用户体验.

- `utils/math.js`:

```javascript
export function sum(num1, num2) {
  return num1 + num2
}
```

- 组件`App.vue`:

```vue
<template>
    <div class="app">
        App组件
    </div>
</template>

<script>
import {sum} from './utils/math.js'
console.log(sum(10, 20))
export default {
    name: 'App',
}
</script>

<style scoped>
.app{
    border: 1px solid #999;
    margin: 5px;
}
</style>
```

- 打包:

```
npm run build
...

  File                                 Size                                                                                           Gzipped

  dist/js/chunk-vendors.f8ba3ee4.js    91.92 KiB                                                                                      33.80 KiB
  dist/js/app.4cd6986d.js              1.87 KiB                                                                                       1.01 KiB
  dist/css/app.169b915a.css            0.05 KiB                                                                                       0.07 KiB

...
```

```
tree ./dist/js
./dist/js
├── app.4cd6986d.js
├── app.4cd6986d.js.map
├── chunk-vendors.f8ba3ee4.js
└── chunk-vendors.f8ba3ee4.js.map

0 directories, 4 files
```

在默认情况下,直接使用`import`导入的模块,不会被分包

- `app.4cd6986d.js`: 这个文件包含了我们自己编写的代码
- `chunk-vendors.f8ba3ee4.js`: 这个文件包含了第三方库的代码,比如Vue和Vue Router等

如果我们希望webpack对打包的`math.js`进行分包,可以使用`import()`语法,将其改为异步加载的方式:

```vue
<template>
    <div class="app">
        App组件
    </div>
</template>

<script>
// 从语法上就可以看出来 import()函数返回一个Promise对象
import('./utils/math.js').
then(res => console.log(res.sum(10, 20))).
catch(err => console.log(err))

export default {
    name: 'App',
}
</script>

<style scoped>
.app{
    border: 1px solid #999;
    margin: 5px;
}
</style>
```

- 打包:

```
npm run build
...
  File                                 Size                                                                                           Gzipped

  dist/js/chunk-vendors.f8ba3ee4.js    91.92 KiB                                                                                      33.80 KiB
  dist/js/app.3c9eeed6.js              3.52 KiB                                                                                       1.71 KiB
  dist/js/131.e4c2e311.js              0.21 KiB                                                                                       0.17 KiB
  dist/css/app.d8ed81ac.css            0.05 KiB                                                                                       0.07 KiB
...
```

```
tree ./dist/js
./dist/js
├── 131.e4c2e311.js
├── 131.e4c2e311.js.map
├── app.3c9eeed6.js
├── app.3c9eeed6.js.map
├── chunk-vendors.f8ba3ee4.js
└── chunk-vendors.f8ba3ee4.js.map

0 directories, 6 files
```

可以看到,`math.js`被分包成了`131.e4c2e311.js`,并且在`app.3c9eeed6.js`中,会自动引入这个分包的代码,这样就可以实现按需加载了

- 注: `import()`函数返回的是一个Promise对象,可以使用`then()`和`catch()`方法来处理异步加载的结果