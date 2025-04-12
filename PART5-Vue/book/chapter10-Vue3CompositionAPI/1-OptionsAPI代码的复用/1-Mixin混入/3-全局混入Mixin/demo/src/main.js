import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

const globalMixin = {
    created() {
        console.log('global Mixin created')
    }
}

app.mixin(globalMixin)

app.mount('#app')
