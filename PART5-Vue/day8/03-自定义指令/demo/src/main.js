import { createApp } from 'vue'
import App from './App.vue'

// 自定义指令的钩子函数
// const focusDirective = {
//     mounted(el) {
//         el.focus()
//     }
// }

createApp(App).
// directive('focus', focusDirective).     // 注册自定义指令
mount('#app')
