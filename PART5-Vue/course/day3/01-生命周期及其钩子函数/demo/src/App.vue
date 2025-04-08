<template>
    <div class="app">
        <h3>{{ title }}</h3>
        <div>
            <button @click="count--">-</button>
            <span>{{ count }}</span>
            <button @click="count++">+</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 100,
            title: '计数器'
        }
    },
    methods: {
        myMethod() {
            console.log('myMethod 方法被调用')
        }
    },
    // 组件创建之前
    beforeCreate() {
        // 此时数据还没有被初始化 也不能调用methods中的方法
        console.log('beforeCreate 组件创建之前: ', this.count)
    },
    // 组件创建之后
    created() {
        // 此时数据已经被初始化 方法也可以被调用
        console.log('created 组件创建之后: ', this.count)
        this.myMethod()
    },
    // 组件挂载之前
    beforeMount() {
        // 此时DOM尚未被渲染
        console.log('beforeMount 组件挂载之前: ', document.querySelector('h3'))
    },
    // 组件挂载之后
    mounted() {
        // 此时DOM已经被渲染
        console.log('mounted 组件挂载之后: ', document.querySelector('h3'))
    },
    // 组件更新之前
    beforeUpdate() {
        // 此时DOM尚未被更新 但数据已经被更新
        console.log('beforeUpdate 组件更新之前: ', this.count, document.querySelector('span').innerHTML)
    },
    // 组件更新之后
    updated() {
        // 此时DOM已经被更新
        console.log('updated 组件更新之后: ', document.querySelector('span').innerHTML)
    },
    // 组件卸载之前
    beforeUnmount() {
        // 此时DOM尚未被卸载
        console.log('beforeUnmount 组件卸载之前: ', document.querySelector('h3'))
    },
    // 组件卸载之后
    unmounted() {
        // 此时DOM已经被卸载
        console.log('unmounted 组件卸载之后: ', document.querySelector('h3'))
    },
}
</script>