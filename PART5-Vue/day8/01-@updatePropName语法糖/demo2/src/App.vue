<template>
    <div>
        <button @click="toggleDialog">控制显隐</button>
        <!-- 监听自定义事件 -->
        <MyDialog :visible="visible" @update:visible="closeDialog"></MyDialog>
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
        closeDialog (val) {
            this.visible = val
        }
    }
}
</script>

<style>
body {
    background-color: #b3b3b3;
}
</style>