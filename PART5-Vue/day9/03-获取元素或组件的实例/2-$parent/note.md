# 2-$parent

- `$parent`: 访问当前组件的父组件实例,若当前组件是顶层组件,则为`null`
- `$root`: 访问根组件实例,如果当前实例没有父组件,那么这个值就是它自己

- `NavBar.vue`:

```vue
<template>
    <div class="nav-bar">
        <h4>NavBar</h4>
        <button @click="getParentAndRoot">获取父组件和根组件实例对象</button>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            message: '我是NavBar组件中的message变量'
        }
    },
    methods: {
        sayHello() {
            console.log('sayHello:Hello NavBar')
        },
        getParentAndRoot() {
            // 获取父组件实例对象
            console.log('$parent: ', this.$parent)

            // 访问父组件实例中的数据
            console.log(this.$parent.names)

            // 获取根组件实例对象
            console.log('$root: ', this.$root)
        }
    }
}
</script>

<style scoped>
.nav-bar{
    border: 1px solid #999;
    margin: 8px 0;
}
button{
    margin: 5px;
}
</style>
```

- 控制台打印:

```
$parent:  Proxy(Object) {btnClick: ƒ, …}
Proxy(Array) {0: 'coder', 1: 'why'}
$root:  Proxy(Object) {btnClick: ƒ, …}
```