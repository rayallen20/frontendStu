<template>
    <div class="home">
        Home
        <HomeContent></HomeContent>
    </div>
</template>

<script>
import HomeContent from "./HomeContent.vue"
export default {
    name: 'Home',
    components: {
        HomeContent
    },
}
</script>