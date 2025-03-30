import { createApp } from 'vue'
import App from './App.vue'
import ButtonGlobal from "./components/ButtonGlobal.vue"

createApp(App).
component(ButtonGlobal.name, ButtonGlobal).     // 注册全局组件 第1个参数是组件名,第二个参数是组件对象
mount('#app')
