<template>
    <h4>App Title</h4>
    <Hello class="hello"></Hello>
</template>


<script>
import Hello from './components/Hello.vue'

export default {
    name: 'App',
    components: {
        Hello,
    }
}
</script>

<style scoped>
h4 {
    text-decoration: underline;
}

.hello ::v-global(.msg) {
    color: red;
}
</style>