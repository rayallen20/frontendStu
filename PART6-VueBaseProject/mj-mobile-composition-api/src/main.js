import { createApp } from 'vue'
import App from './App.vue'
import Vant, {setToastDefaultOptions} from 'vant'
import 'vant/lib/index.css'
import '@/assets/vant-variables.css'
import router from "@/router"

const toastOptions = {
    duration: 2000
}
setToastDefaultOptions(toastOptions)

const app = createApp(App)

app.use(Vant)
app.use(router)

app.mount('#app')
