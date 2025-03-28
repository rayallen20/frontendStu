<template>
    <div class="about">
        About
        <button @click="btnClick">单击按钮 触发事件</button>
    </div>
</template>

<script>
import emitter from '../utils/eventBus'
export default {
    name: 'About',
    methods: {
        btnClick() {
            console.log('1. About组件的: 单击按钮 -> 触发全局why事件')
            const param1 = {
                name: 'why',
                age: 18,
            }
            // 触发全局事件总线的why事件
            emitter.emit('why', param1)

            console.log('2. About组件的: 单击按钮 -> 触发全局kobe事件')
            const param2 = {
                name: 'kobe',
                age: 24,
            }
            // 触发全局事件总线的kobe事件
            emitter.emit('why', param2)
        },
    },
}
</script>