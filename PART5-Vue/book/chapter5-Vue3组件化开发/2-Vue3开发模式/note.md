# 2-Vue3开发模式

- Vue官方推荐使用单文件组件(Single-File Components, SFC)的方式编写组件,然后使用webpack/Vite/rollup等构建工具进行编译打包

```html
<template>
    <h4>{{title}}</h4>
    <p>{{desc}}</p>
    <button @click="btnClick()">按钮单击</button>
</template>

<script>
export default {
        data() {
            return {
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
</script>

<style scoped>
    
    
</style>
```