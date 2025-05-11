<template>
    <div class="use-modules">
        <!-- 访问store的根模块的state -->
        <h4>root state: {{$store.state.counter}}</h4>
        <!-- 访问store的home模块的state -->
        <h4>home state: {{$store.state.home.homeCounter}}</h4>
        <!-- 访问store的user模块的state -->
        <h4>user state: {{$store.state.user.userCounter}}</h4>
    </div>
</template>

<script setup>
// eslint-disable-next-line
defineOptions({
    name: 'UseModules'
})
</script>