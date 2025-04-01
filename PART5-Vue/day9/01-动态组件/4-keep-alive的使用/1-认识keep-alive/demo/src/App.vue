<template>
    <div class="app">
        <button
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{'active': currentTab === tab}"
            @click="changeTab(tab)">
            {{tab}}
        </button>

        <keep-alive>
            <component
                :is="currentTab"
                :name="name"
                :age="age" @cpnClick="handleCpnClick"></component>
        </keep-alive>
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
            currentTab: 'HomeCpn',
            name: 'coderWhy',
            age: 18,
        }
    },
    methods: {
        changeTab(tab) {
            this.currentTab = tab
        },
        handleCpnClick(msg) {
            console.log(msg)
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
