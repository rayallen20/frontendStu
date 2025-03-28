<template>
    <div class="home-content">
        HomeContent
        <p>{{name}} - {{age}} - {{friends}}</p>
    </div>
</template>

<script>
export default {
    name: 'HomeContent',
    // 孙子组件使用inject注入祖代组件提供的值
    inject: ['name', 'age', 'friends'],
}
</script>