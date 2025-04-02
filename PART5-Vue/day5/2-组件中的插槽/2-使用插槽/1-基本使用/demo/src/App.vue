<template>
    <div class="app">
        <!-- 1. 默认不插入内容 -->
        <MySlotCpn></MySlotCpn>

        <!-- 2. 插入一个元素 -->
        <MySlotCpn>
            <button>我是按钮</button>
        </MySlotCpn>

        <!-- 3. 插入一段文本 -->
        <MySlotCpn>
            我是普通文本
        </MySlotCpn>

        <!-- 4. 插入一个组件 -->
        <MySlotCpn>
            <MyButton></MyButton>
        </MySlotCpn>

        <!-- 5. 插入多个内容(可以是组件/DOM/文本等) -->
        <MySlotCpn>
            <span>我是span</span>
            <button>我是button</button>
            <MyButton></MyButton>
            我是文本
        </MySlotCpn>
    </div>
</template>

<script>
import MySlotCpn from "./components/MySlotCpn.vue"
import MyButton from "./components/MyButton.vue"

export default {
    name: 'App',
    components: {
        MySlotCpn,
        MyButton
    }
}
</script>