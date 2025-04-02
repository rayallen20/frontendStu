<template>
    <div class="home-content">
        HomeContent
        <p>{{name}} - {{age}} - {{friends}} - {{friendLength}}</p>
    </div>
</template>

<script>
export default {
    name: 'HomeContent',
    inject: ['name', 'age', 'friends', 'friendLength'],
}
</script>