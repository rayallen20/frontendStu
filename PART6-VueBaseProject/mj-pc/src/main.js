import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/theme-chalk/src/index.scss'
import router from '@/router'
import store from '@/store'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn
})

app.use(store)
app.use(router)
app.mount('#app')
