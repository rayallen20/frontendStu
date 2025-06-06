# 07-分页

- `@size-change`: `page-size`变化时触发的函数
  - 触发时自动传入新的`page-size`
- `@current-change`: `current-page`变化时触发的函数
  - 触发时自动传入新的`current-page`
- **这两个修改事件一旦触发,都应该按照修改后的参数重新请求数据,并更新页面显示**
- `:current-page`: 当前页码
- `:page-sizes`: 每页条数的选项
- `:page-size`: 每页条数
- `:total`: 数据总数
- `layout`: 布局选项,包含:
  - `total`: 总条数控件
  - `sizes`: 每页条数选择器
  - `prev`: 上一页按钮控件
  - `pager`: 页码按钮控件
  - `next`: 下一页按钮控件
  - `jumper`: 跳转页码控件
  - 这些控件将按照`layout`中书写的顺序显示

- 控件在容器中水平居中显示:

```css
.el-pagination {
    margin-top: 20px;
    text-align: center;
    /*分页器水平居中显示*/
    display: flex;
    justify-content: center;
}
```

- 控件内容为中文:

- `main.js`:

```javascript
import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
// 引入中文语言包
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/theme-chalk/src/index.scss'
import router from '@/router'
import store from '@/store'

const app = createApp(App)

// 使用中文语言包
app.use(ElementPlus, {
  locale: zhCn
})

app.use(store)
app.use(router)
app.mount('#app')

```