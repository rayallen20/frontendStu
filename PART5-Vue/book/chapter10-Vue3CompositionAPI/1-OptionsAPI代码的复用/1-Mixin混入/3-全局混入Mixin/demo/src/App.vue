<template>
    <div class="app">
        <h2>{{message}}</h2>
        <button @click="foo">点击调用组件对象中定义的foo方法</button>
    </div>
</template>

<script>
import demoMixin from '@/mixins/demoMixins'
export default {
    name: 'App',
    mixins: [
        demoMixin
    ],
    data() {
        return {
            // message和Mixin中的message属性同名 最终使用该组件的message
            message: 'Hello App',
            title: 'Hello World',
        }
    },
    methods: {
        // foo方法和Mixin中的foo同名 最终使用该组件的foo
        foo() {
            console.log('App foo')
        }
    },
    // 生命周期钩子函数和Mixin中的created同名 最终二者会被合并到一个数组中 都会被调用
    created() {
        console.log('App created')
    }
}
</script>