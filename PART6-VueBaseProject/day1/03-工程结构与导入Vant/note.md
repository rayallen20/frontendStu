# 03-工程结构与导入Vant

## 1. `view`目录和`components`目录的区别

- `view`目录: 用于存放页面级组件,即路由组件
- `components`目录: 用于存放非路由组件,即可复用的公共组件

## 2. Vant组件库的使用

- 安装组件: `npm install vant`
- 按需导入组件: `npm i @vant/auto-import-resolver unplugin-vue-components unplugin-auto-import -D`(没用这种用法)
- 完整导入:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import Vant from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(router)
app.use(Vant)
app.mount('#app')
```