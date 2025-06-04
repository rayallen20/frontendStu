# 06-替换主题样式

- `src/styles/element-variables.scss`: 自定义主题样式文件

```scss
@use 'element-plus/theme-chalk/src/common/var.scss' as * with (
  $colors: (
    'primary': (
      'base': green,
    ),
  )
);
```

- `@use 'element-plus/theme-chalk/src/common/var.scss' as * with`
  - `@use`: 用于引入其他样式文件,功能类似于 `@import`
  - `as *`: 将引入的样式文件中的所有变量和混合宏导入到当前作用域
  - `with`: 用于覆盖引入的样式文件中的变量,也就是说`with`后面定义的变量会覆盖引入的样式文件中的同名变量
- `$colors`: element plus的scss中,`$colors`是一个包含主题颜色的map对象,可以通过修改这个对象来改变主题颜色
- `'primary'`: 也是一个map对象,所以`$colors`和`'primary'`看起来都是键值对形式

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
    }
})
```

这段css配置项的含义为:

- 自动为每个`.scss`文件前面插入自定义内容
  - `additionalData`: 用于在每个scss文件编译前自动插入一些内容,这里插入的就是自定义的主题样式文件`element-variables.scss`
  - 这样配置后,在每个scss文件(包括`<style lang="scss">`标签)中都可以直接使用自定义的主题变量,而不需要手动引入`element-variables.scss`文件

- `main.js`:

```javascript
import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/src/index.scss'
import router from '@/router'
import store from '@/store'

const app = createApp(App)

app.use(ElementPlus)

app.use(store)
app.use(router)
app.mount('#app')
```

- `main.js`中引入element plus的全部样式入口即可,因为已经配置了`vue.config.js`中的`additionalData`
- 所以引入`element-plus/theme-chalk/src/index.scss`,就等于也引入了自定义的主题样式文件`element-variables.scss`,这样就可以在整个项目中使用自定义的主题样式了