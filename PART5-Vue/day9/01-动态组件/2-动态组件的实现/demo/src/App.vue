<template>
    <div class="app">
        <button
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{'active': currentTab === tab}"
            @click="changeTab(tab)">
            {{tab}}
        </button>

        <!--
        1. <component>是Vue提供的一个内置组件 用于动态渲染组件
        2. :is属性指定要渲染的组件
            <component :is="HomeCpn"></component> 表示渲染HomeCpn组件
        -->
        <component :is="currentTab"></component>
    </div>
</template>

<script>
import HomeCpn from "@/components/HomeCpn.vue"
import AboutCpn from "@/components/AboutCpn.vue"
import CategoryCpn from "@/components/CategoryCpn.vue"

export default {
    name: 'App',
    components: {
        HomeCpn,
        AboutCpn,
        CategoryCpn,
    },
    data() {
        return {
            tabs: [
                'HomeCpn',
                'AboutCpn',
                'CategoryCpn',
            ],
            currentTab: 'HomeCpn'
        }
    },
    methods: {
        changeTab(tab) {
            this.currentTab = tab
        }
    }
}
</script>

<style scoped>
button{
    border: none;
    margin: 10px 5px;
    padding: 7px;
    cursor: pointer;
}
.active {
    color: red;
    border-bottom: 2px solid red;
}
</style>
