# 3-动态组件的传参

动态组件的传参和普通组件一样,还是:

- 父组件通过props传递数据给子组件
- 子组件通过$emit向父组件传递数据

- 例: 
  - 父组件向动态组件传递`name`和`age`props
  - 子组件触发自定义事件`cpnClick`向父组件传递数据

- 子组件`HomeCpn.vue`:

```vue
<template>
    <div class="home-cpn" @click="handleClick">
        Home组件: {{name}} - {{age}}
    </div>
</template>

<script>
export default {
    name: 'HomeCpn',
    props: {
        name: {
            type: String,
            default: '',
            required: true,
        },
        age: {
            type: Number,
            default: 0,
            required: true,
        },
    },
    emits: ['cpnClick'],
    methods: {
        handleClick() {
            this.$emit('cpnClick', 'HomeCpn组件被点击了')
        }
    }
}
</script>

<style scoped>
div{
    cursor: pointer;
}
</style>
```

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

        <!--
        1. 父组件通过props向动态组件传递数据
        2. 子组件通过$emit向父组件传递数据
        -->
        <component
            :is="currentTab"
            :name="name"
            :age="age" @cpnClick="handleCpnClick"></component>
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