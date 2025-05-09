import { createApp } from 'vue'
import App from './App.vue'
import store from "@/store"

const app = createApp(App)

// 安装vuex插件
app.use(store)
app.mount('#app')
