# 1-v-if指令的实现

- 子组件`HomeCpn.vue`:

```vue
<template>
    <div class="home-cpn">
        Home组件
    </div>
</template>

<script>
export default {
    name: 'HomeCpn',
}
</script>

<style scoped>
div{
    cursor: pointer;
}
</style>
```

- 子组件`AboutCpn.vue`:

```vue
<template>
    <div class="about-cpn">
        About组件
    </div>
</template>

<script>
export default {
    name: 'AboutCpn',
}
</script>

<style scoped>

</style>
```

- 子组件`ContactCpn.vue`:

```vue
<template>
    <div class="category-cpn">
        Category组件
    </div>
</template>

<script>
export default {
    name: 'CategoryCpn',
}
</script>

<style scoped>

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

        <HomeCpn v-if="currentTab === 'home'"></HomeCpn>
        <AboutCpn v-if="currentTab === 'about'"></AboutCpn>
        <CategoryCpn v-if="currentTab === 'category'"></CategoryCpn>
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
                'home',
                'about',
                'category',
            ],
            currentTab: 'home'
        }
    },
    methods: {
        changeTab(tab) {
            this.currentTab = tab
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