<template>
    <div class="app">
        <About></About>
        <Home></Home>
    </div>
</template>

<script>
import About from "./components/About.vue"
import Home from "./components/Home.vue"
export default {
    name: "App",
    components: {
        About,
        Home
    }
}
</script>