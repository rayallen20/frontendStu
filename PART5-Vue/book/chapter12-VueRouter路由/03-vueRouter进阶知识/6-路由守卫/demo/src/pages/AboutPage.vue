<template>
    <div class="about-page">
        About Page
        <!-- 模板中,$route即Vue Router实例, $route.query即为query参数对象 -->
        <p>{{$route.query.name}}-{{$route.query.age}}</p>
    </div>
</template>

<script>
export default {
    name: 'AboutPage',
}
</script>