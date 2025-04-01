<template>
    <div class="app">
        <button
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{'active': currentTab === tab}"
            @click="changeTab(tab)">
            {{tab}}
        </button>

        <HomeCpn v-if="currentTab === 'home'"></HomeCpn>
        <AboutCpn v-if="currentTab === 'about'"></AboutCpn>
        <CategoryCpn v-if="currentTab === 'category'"></CategoryCpn>
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
                'home',
                'about',
                'category',
            ],
            currentTab: 'home'
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
