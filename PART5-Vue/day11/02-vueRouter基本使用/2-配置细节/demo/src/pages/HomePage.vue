<template>
    <div class="home-page">
        Home Page
    </div>
</template>

<script>
import {useRoute} from "vue-router";

export default {
    name: 'HomePage',
    setup() {
        // 注意: useRoute() 只能在 setup() 中使用
        const route = useRoute()
        console.log(route.name)     // home
        console.log(route.meta)     // { name: 'why', age: 18 }
    }
}
</script>