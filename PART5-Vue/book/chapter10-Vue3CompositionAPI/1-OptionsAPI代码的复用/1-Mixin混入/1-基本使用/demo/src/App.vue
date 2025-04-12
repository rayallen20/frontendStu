<template>
    <div class="app">
        <h2>{{message}}</h2>
        <button @click="foo">点击调用demoMixin中定义的foo方法</button>
    </div>
</template>

<script>
import demoMixin from '@/mixins/demoMixins'
export default {
    name: 'App',
    mixins: [
        demoMixin
    ],
}
</script>