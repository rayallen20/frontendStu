# 1-注册全局组件

## 1.1 注册根组件

注册根组件:

```html
<div id="app"></div>

<template id="my-app">
    <div class="comps-b">
        <input type="text" v-model="message">
        <h4>{{message}}</h4>
    </div>

    <div class="comps-a">
        <h4>{{title}}</h4>
        <p>{{desc}}</p>
        <button @click="btnClick()">按钮单击</button>
    </div>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                message: 'Hello',
                title: '我是标题',
                desc: '内容显示区域......'
            }
        },
        methods: {
            btnClick() {
                console.log('按钮发生单击')
            },
        },
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

- 注: Vue3的`template`中支持多个根元素,而Vue2不支持

Vue3中,有2种组件:

- 全局组件: 在任何其他组件中都可以使用的组件,通过`app.component()`方法注册
- 局部组件: 只有在注册的组件中才能使用的组件

## 1.2 注册全局组件

```html
<template id="my-app">
    <div class="comps-b">
        <input type="text" v-model="message">
        <h4>{{message}}</h4>
    </div>

    <!-- step3. 使用组件 -->
    <!-- 此处的标签名是 调用app.component()时注册的组件名 -->
    <component-a></component-a>
</template>

<!-- step1. 编写组件模板 -->
<template id="component-a">
    <div class="comps-a">
        <h4>{{title}}</h4>
        <p>{{desc}}</p>
        <button @click="btnClick()">按钮单击</button>
    </div>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const rootArgs = {
        template: '#my-app',
        data() {
            return {
                message: 'Hello',
            }
        },
    }

    const app = Vue.createApp(rootArgs)

    // step2. 注册全局组件
    const componentAArgs = {
        template: '#component-a',
        data() {
            return {
                title: '我是标题',
                desc: '内容显示区域......',
            }
        },
        methods: {
            btnClick() {
                console.log('按钮发生单击')
            },
        },
    }

    app.component('component-a', componentAArgs)

    // step4. 挂载
    app.mount('#app')
</script>
```

- `app.component(组件名称, 组件对象)`

## 1.3 注册多个全局组件

```html
<template id="my-app">
    <component-b></component-b>
    <component-a></component-a>
</template>

<template id="component-b">
    <div class="comps-b">
        <input type="text" v-model="message">
        <h4>{{message}}</h4>
    </div>
</template>

<template id="component-a">
    <div class="comps-a">
        <h4>{{title}}</h4>
        <p>{{desc}}</p>
        <button @click="btnClick()">按钮单击</button>
    </div>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const rootArgs = {
        template: '#my-app',
    }
    const app = Vue.createApp(rootArgs)

    const componentBArgs = {
        template: '#component-b',
        data() {
            return {
                message: 'Hello',
            }
        },
    }
    app.component('component-b', componentBArgs)

    const componentAArgs = {
        template: '#component-a',
        data() {
            return {
                title: '我是标题',
                desc: '内容显示区域......',
            }
        },
        methods: {
            btnClick() {
                console.log('按钮发生单击')
            },
        },
    }
    app.component('component-a', componentAArgs)

    app.mount('#app')
</script>
```

## 1.4 在Vue工程中注册全局组件

- step1. 定义组件

```vue
<template>
    <button>按钮</button>
</template>

<script>
export default {
    name: 'ButtonGlobal',
}
</script>

<style lang="less" scoped>
button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
}
</style>
```

- step2. 注册组件

`main.js`:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import ButtonGlobal from "./components/ButtonGlobal.vue"

createApp(App).
component(ButtonGlobal.name, ButtonGlobal).     // 注册全局组件 第1个参数是组件名,第二个参数是组件对象
mount('#app')
```

- step3. 在组件中使用全局组件

`App.vue`:

```vue
<template>
    <div class="box">
        <p>一段文本</p>
    </div>
    <!-- 在组件中的任何位置都可以访问全局组件 -->
    <ButtonGlobal></ButtonGlobal>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style lang="less" scoped>
.box {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
    text-align: center;

    p {
        color: #333;
        font-size: 16px;
        margin: 0;
    }
}
</style>
```