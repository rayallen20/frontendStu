<template>
    <div class="dialog" v-if="visible">
        <div class="dialog-header">
            <h3>友情提示</h3>
            <span class="close" @click="close">✖️</span>
        </div>
        <div class="dialog-content">我是文本内容</div>
        <div class="dialog-footer">
            <button @click="close">取消</button>
            <button @click="close">确认</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    props: {
        visible: {
            type: Boolean,
            required: true
        }
    },
    emits: {
        // 定义自定义事件
        hidden: null
    },
    methods: {
        close() {
            // 触发自定义事件
            this.$emit('hidden')
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
.dialog {
    width: 470px;
    height: 230px;
    padding: 0 25px;
    background-color: #ffffff;
    margin: 40px;
    border-radius: 5px;
}
.dialog-header {
    height: 70px;
    line-height: 70px;
    font-size: 20px;
    border-bottom: 1px solid #ccc;
    position: relative;
}
.dialog-header .close {
    position: absolute;
    right: 0px;
    top: 0px;
    cursor: pointer;
}
.dialog-content {
    height: 80px;
    font-size: 18px;
    padding: 15px 0;
}
.dialog-footer {
    display: flex;
    justify-content: flex-end;
}
.dialog-footer button {
    width: 65px;
    height: 35px;
    background-color: #ffffff;
    border: 1px solid #e1e3e9;
    cursor: pointer;
    outline: none;
    margin-left: 10px;
    border-radius: 3px;
}
.dialog-footer button:last-child {
    background-color: #007acc;
    color: #fff;
}
</style>
