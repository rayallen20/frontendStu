<template>
    <h4>App Title</h4>
    <Hello></Hello>
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
</style>