<template>
    <div class="app">
        <button @click="toggleDialog">切换显隐</button>
        <!-- 监听自定义事件 -->
        <MyDialog :visible="visible" @hidden="closeDialog"></MyDialog>
    </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'
export default {
    data () {
        return {
            visible: false
        }
    },
    components: {
        MyDialog
    },
    methods: {
        toggleDialog () {
            this.visible = !this.visible
        },
        closeDialog () {
            this.visible = false
        }
    }
}
</script>

<style>
body {
    background-color: #b3b3b3;
}
</style>