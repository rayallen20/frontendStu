import { createApp } from 'vue'
import App from './App.vue'
// 页面的样式是在这里引入的 相当于以前页面中的<link>标签
import './styles/base.css'                  // 重置默认样式
import './styles/common.css'                // 公共样式
import './assets/iconfont/iconfont.css'     // 图标样式
import GoodItem from "./components/GoodItem.vue"

createApp(App).
component(GoodItem.name, GoodItem).
mount('#app')
