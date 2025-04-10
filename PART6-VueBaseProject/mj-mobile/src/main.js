import { createApp } from 'vue'
import Vant, { setToastDefaultOptions } from 'vant'
import App from './App.vue'
import router from "@/router"
import 'vant/lib/index.css'
import '@/assets/vant-variables.css'

const app = createApp(App)


// 设置默认的toast选项
const toastOptions = {
    duration: 2000
}
setToastDefaultOptions(toastOptions)

app.use(Vant)
app.use(router)
app.mount('#app')
