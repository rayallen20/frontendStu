# 12-发版相关操作

- 区分环境
  - 根目录下创建`.env.development`和`.env.production`文件
  - 项目中使用`process.env.VUE_APP_API_BASE_URL`就可以读到不同环境下的变量

- 配置`publicPath`
  - 在`vue.config.js`中配置`publicPath`
  - 我猜测这么配完了之后,nginx一转发应该就通了

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