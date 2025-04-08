<template>
    <div class="home-content">
        HomeContent
    </div>
</template>

<script>
import emitter from '../utils/eventBus'
export default {
    name: 'HomeContent',
    created() {
        // 监听全局事件总线的why事件
        emitter.on('why', (param) => {
            console.log('全局事件总线的: why事件被触发了')
            console.log(param)
            console.log('--------------------------')
        })

        // 监听全局事件总线的kobe事件
        emitter.on('kobe', (param) => {
            console.log('全局事件总线的: kobe事件被触发了')
            console.log(param)
            console.log('--------------------------')
        })

        // 监听所有事件
        emitter.on('*', (type, info) => {
            console.log('全局事件总线中监听所有事件')
            console.log('事件名:', type)
            console.log('事件参数:', info)
            console.log('--------------------------')
        })
    },
}
</script>