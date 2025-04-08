# 1-认识keep-alive

- 为`AboutCpn`组件增加功能: 
  - 新增一个按钮
  - 点击该按钮可以增加计数

- `AboutCpn.vue`:

```vue
<template>
    <div class="about-cpn">
        About组件
        <button @click="add">点击递增: {{counter}}</button>
    </div>
</template>

<script>
export default {
    name: 'AboutCpn',
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        add() {
            this.counter++
        },
    },
}
</script>

<style scoped>

</style>
```

- 现象: 切换组件之后,`AboutCpn`组件的计数器会被重置为0
- 原因: `AboutCpn`组件被销毁了,计数器的值也被销毁了
- 解决方案: 使用`<keep-alive>`来缓存组件
- `<keep-alive>`: Vue3中内置的一个组件,用于缓存组件

- 父组件`App.vue`:

```vue
<template>
    <div class="app">
        <button
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{'active': currentTab === tab}"
            @click="changeTab(tab)">
            {{tab}}
        </button>

        <keep-alive>
            <component
                :is="currentTab"
                :name="name"
                :age="age" @cpnClick="handleCpnClick"></component>
        </keep-alive>
    </div>
</template>

<script>
import HomeCpn from "@/components/HomeCpn.vue"
import AboutCpn from "@/components/AboutCpn.vue"
import CategoryCpn from "@/components/CategoryCpn.vue"

export default {
    name: 'App',
    components: {
        HomeCpn,
        AboutCpn,
        CategoryCpn,
    },
    data() {
        return {
            tabs: [
                'HomeCpn',
                'AboutCpn',
                'CategoryCpn',
            ],
            currentTab: 'HomeCpn',
            name: 'coderWhy',
            age: 18,
        }
    },
    methods: {
        changeTab(tab) {
            this.currentTab = tab
        },
        handleCpnClick(msg) {
            console.log(msg)
        }
    }
}
</script>

<style scoped>
button{
    border: none;
    margin: 10px 5px;
    padding: 7px;
    cursor: pointer;
}
.active {
    color: red;
    border-bottom: 2px solid red;
}
</style>
```