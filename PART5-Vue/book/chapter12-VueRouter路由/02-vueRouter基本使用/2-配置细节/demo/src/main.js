import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";

const app = createApp(App)

// 挂载路由对象到Vue实例
app.use(router)

// 挂载Vue实例到页面
app.mount('#app')
