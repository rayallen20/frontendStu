<template>
    <div class="show-message">
        <h4>{{title}}</h4>
        <h4>{{content}}</h4>
    </div>
</template>

<script>
export default {
    name: 'ShowMessage',
    // 表示子组件需要接收父组件传递的title和content属性
    props: ['title', 'content']
}
</script>