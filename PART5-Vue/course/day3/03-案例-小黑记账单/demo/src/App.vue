<template>
    <div class="app">
        <div class="contain">
            <ListBox></ListBox>
            <EchartsBox></EchartsBox>
        </div>
    </div>
</template>

<script>
import ListBox from './components/ListBox.vue'
import EchartsBox from './components/EchartsBox.vue'

export default {
    name: 'App',
    components: {
        ListBox,
        EchartsBox
    },
}
</script>

<style scoped>
.contain {
    display: flex;
    padding: 10px;
}

@media screen and (max-width: 1000px) {
    .contain {
        flex-wrap: wrap;
    }
}
</style>