# 04-安装element-plus

- `pnpm install element-plus`: 安装Element Plus组件库
- `pnpm install @element-plus/icons-vue`: 安装Element Plus的图标库
- vue2的项目用`element-ui`;vue3的项目用`element-plus`

- `src/main.js`:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(ElementPlus)

app.use(store)
app.use(router)
app.mount('#app')
```