<template>
    <div class="not-found-page">
        <h3>Page Not Found</h3>
        <p>路径页面不存在</p>
        <h4>{{$route.params.pathMatch}}</h4>
    </div>
</template>

<script>
export default {
    name: 'NotFoundPage',
}
</script>