<template>
    <div class="user-page">
        <!-- 在模板中获取多个路径参数 -->
        User Page: {{$route.params.username}}-{{$route.params.id}}
    </div>
</template>

<script>
import {useRoute} from "vue-router";

export default {
    name: 'UserPage',
    created() {
        // 在created中获取多个路径参数
        const params = this.$route.params       // {username: 'why', id: '0001'}
        console.log(params.username)
        console.log(params.id)
    },
    setup() {
        // 在setup中使用useRoute()获取多个路径参数
        const route = useRoute()
        console.log(route.params.username)
        console.log(route.params.id)
    }
}
</script>