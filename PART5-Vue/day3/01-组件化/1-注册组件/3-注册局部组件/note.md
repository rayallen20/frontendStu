# 3-注册局部组件

- 在组件的`components`选项中注册局部组件(该选项和`template`/`data`等选项同级)
- 在`components`选项中注册的局部组件只能在当前组件中使用
- `components`对象:
  - 键: 组件名
  - 值: 组件对象

```html
<template id="my-app">
    <h4>{{message}}</h4>
    <component-a></component-a>
</template>

<template id="component-a">
    <p>{{content}}</p>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const componentA = {
        template: '#component-a',
        data() {
            return {
                content: `
                我是在根组件App中局部注册的ComponentA组件
                (ComponentA组件只能在当前根组件的template中使用)
                `,
            }
        },
    }

    const rootComponent = {
        template: '#my-app',
        data() {
            return {
                message: '我是根组件APP',
            }
        },
        components: {
            ComponentA: componentA,
        },
    }
    
    const app = Vue.createApp(rootComponent)
    app.mount('#app')
</script>
```