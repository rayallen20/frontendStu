# 3-全局混入Mixin

- 若所有组件都需要某些选项,可以使用全局混入

- `main.js`:

```javascript
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
```

- `Mixin`的缺陷:
  - 容易发生冲突.因为每个Mixin对象的属性都会被合并到同一个组件中,为了避免冲突,还需要了解其他Mixin的属性
  - Mixin的可复用性有限.组件无法向Mixin传递任何参数来改变Mixin的逻辑,这一点降低了Mixin在抽取逻辑方面的灵活性