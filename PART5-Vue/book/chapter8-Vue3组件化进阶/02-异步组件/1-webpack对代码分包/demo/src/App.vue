<template>
    <div class="app">
        App组件
    </div>
</template>

<script>
// 从语法上就可以看出来 import()函数返回一个Promise对象
import('./utils/math.js').
then(res => console.log(res.sum(10, 20))).
catch(err => console.log(err))

export default {
    name: 'App',
}
</script>

<style scoped>
.app{
    border: 1px solid #999;
    margin: 5px;
}
</style>