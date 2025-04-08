<template>
    <div class="nav">
        <RouterLink class="tab" to="/user/why/id/001">用户</RouterLink>
        <button @click="jumpToAbout">关于</button>
    </div>
    <RouterView></RouterView>
</template>

<script>
import {useRouter} from "vue-router";

export default {
    name: 'App',
    setup() {
        const router = useRouter()
        const jumpToAbout = () => {
            // 替换当前路由 浏览器的后退功能无法后退到当前路由
            router.replace({
                path: '/about',
                query: {
                    name: 'why',
                    age: 18
                }
            })
        }

        return {
            jumpToAbout
        }
    }

}
</script>

<style scoped>
.nav{
    margin: 20px 0;
}
.tab{
    border: 1px solid #ddd;
    margin-right: 8px;
    padding: 2px 20px;
    text-decoration: none;
}
</style>