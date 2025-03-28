# 4-Provide提供响应式数据

- 验证: 在`App.vue`中,修改`friends`数组中的数据,在`HomeContent.vue`中打印`friends`数组,观察数据是否变化

- `App.vue`:

```vue
<template>
    <div class="app">
        App
        <Home></Home>
        <button @click="addFriend">addFriend</button>
    </div>
</template>

<script>
import Home from "./components/Home.vue"
export default {
    name: 'App',
    data() {
        return {
            friends: ['lisi', 'wangWu']
        }
    },
    methods: {
        addFriend() {
            this.friends.push('zhaoLiu')
            console.log(this.friends)
        }
    },
    components: {
        Home
    },
    provide() {
        return {
            name: 'zhangSan',
            age: 18,
            friends: this.friends
        }
    },
}
</script>
```

可以看到,在`HomeContent.vue`中打印的`friends`数组也发生了变化,说明provide提供的数据是响应式的

- 新增需求: 孙子组件直接获取朋友的个数`friendLength`

- `App.vue`:

```vue
<template>
    <div class="app">
        App
        <Home></Home>
        <button @click="addFriend">addFriend</button>
    </div>
</template>

<script>
import Home from "./components/Home.vue"
export default {
    name: 'App',
    data() {
        return {
            friends: ['lisi', 'wangWu']
        }
    },
    methods: {
        addFriend() {
            this.friends.push('zhaoLiu')
            console.log(this.friends)
        }
    },
    components: {
        Home
    },
    provide() {
        return {
            name: 'zhangSan',
            age: 18,
            friends: this.friends,
            friendLength: this.friends.length
        }
    },
}
</script>
```

- `HomeContent.vue`:

```vue
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
```

- 结果: `friendLength`的值不会随着`friends`数组的变化而变化
- 原因: 虽然在`provide`中定义的`friends`是响应式的,但是`friendLength`是一个普通的值,它不会随着`friends`数组的变化而变化
- 解决办法: 在`provide`中定义一个计算属性,返回`friends`数组的长度(暂时先这么用,后边再说计算属性)

- `App.vue`:

```vue
<template>
    <div class="app">
        App
        <Home></Home>
        <button @click="addFriend">addFriend</button>
    </div>
</template>

<script>
import Home from "./components/Home.vue"
import {computed} from "vue";
export default {
    name: 'App',
    data() {
        return {
            friends: ['lisi', 'wangWu']
        }
    },
    methods: {
        addFriend() {
            this.friends.push('zhaoLiu')
            console.log(this.friends)
        }
    },
    components: {
        Home
    },
    provide() {
        return {
            name: 'zhangSan',
            age: 18,
            friends: this.friends,
            // 使用计算属性: computed()函数返回的是一个ref响应式对象
            friendLength: computed(() => this.friends.length)
        }
    },
}
</script>
```