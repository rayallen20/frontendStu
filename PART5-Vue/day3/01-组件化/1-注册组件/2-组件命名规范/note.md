# 2-组件命名规范

## 2.1 `kebab-case`

- `kebab-case`形式:即单词全小写并以连字符分隔
- 之前写的注册全局组件的例子就是`kebab-case`形式的命名

## 2.2 PascalCase

- `PascalCase`形式:即首字母大写的驼峰命名法

```html
<template id="my-app">
    <component-b></component-b>
    <component-a></component-a>
    <!--在DOM中直接引用组件,则不支持PascalCase语法-->
    <component-c></component-c>
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

<template id="component-c"></template>

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
    
    const componentCArgs = {
        template: '#component-c',
    }
    // PascalCase命名规范
    app.component('ComponentC', componentCArgs)
    
    app.mount('#app')
</script>
```

## 2.3 注意事项

- **直接在DOM中使用,则只支持`kebab-case`形式语法**
- **在前端工程化项目中使用组件,则同时支持`kebab-case`形式和PascalCase**