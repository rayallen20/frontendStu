# 3-编程式导航的使用

## 3.1 代码实现页面跳转

- `setup()`函数中实现跳转:

```vue
<template>
    <div class="nav">
        <RouterLink class="tab" to="/user/why/id/001">用户</RouterLink>
        <button @click="jumpToAbout">关于</button>
    </div>
    <RouterView></RouterView>
</template>

<script>
import {useRouter} from "vue-router";

export default {
    name: 'App',
    setup() {
        // 获取Vue Router实例
        const router = useRouter()
        const jumpToAbout = () => {
            // 跳转页面
            router.push('/about')
        }

        return {
            jumpToAbout
        }
    }
}
</script>

<style scoped>
.nav{
    margin: 20px 0;
}
.tab{
    border: 1px solid #ddd;
    margin-right: 8px;
    padding: 2px 20px;
    text-decoration: none;
}
</style>
```

- 注: `push()`方法是压栈操作,可以使用浏览器的返回功能返回到上一个页面,如果想要替换当前页面,可以使用`replace()`方法

- `Options API`中实现跳转(更推荐在`setup()`中实现):

```vue
<template>
    <div class="nav">
        <RouterLink class="tab" to="/user/why/id/001">用户</RouterLink>
        <button @click="jumpToAbout">关于</button>
    </div>
    <RouterView></RouterView>
</template>

<script>
export default {
    name: 'App',
    methods: {
        jumpToAbout() {
            const router = this.$router
            router.push('/about')
        }
    }
}
</script>

<style scoped>
.nav{
    margin: 20px 0;
}
.tab{
    border: 1px solid #ddd;
    margin-right: 8px;
    padding: 2px 20px;
    text-decoration: none;
}
</style>
```

- `router.push()`方法的参数可以是一个对象:

```vue
<template>
    <div class="nav">
        <RouterLink class="tab" to="/user/why/id/001">用户</RouterLink>
        <button @click="jumpToAbout">关于</button>
    </div>
    <RouterView></RouterView>
</template>

<script>
import {useRouter} from "vue-router";

export default {
    name: 'App',
    setup() {
        const router = useRouter()
        const jumpToAbout = () => {
            // push方法可以传入一个对象
            router.push({
                path: '/about',
            })
        }

        return {
            jumpToAbout
        }
    }
}
</script>

<style scoped>
.nav{
    margin: 20px 0;
}
.tab{
    border: 1px solid #ddd;
    margin-right: 8px;
    padding: 2px 20px;
    text-decoration: none;
}
</style>
```

## 3.2 query参数

### 3.2.1 `setup()`方式

```vue
<template>
    <div class="nav">
        <RouterLink class="tab" to="/user/why/id/001">用户</RouterLink>
        <button @click="jumpToAbout">关于</button>
    </div>
    <RouterView></RouterView>
</template>

<script>
import {useRouter} from "vue-router";

export default {
    name: 'App',
    setup() {
        const router = useRouter()
        const jumpToAbout = () => {
            router.push('/about?name=coder&age=20')
        }

        return {
            jumpToAbout
        }
    }
}
</script>

<style scoped>
.nav{
    margin: 20px 0;
}
.tab{
    border: 1px solid #ddd;
    margin-right: 8px;
    padding: 2px 20px;
    text-decoration: none;
}
</style>
```

- `pages/AboutPage.vue`:

```vue
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
```

- `setup()`方式使用对象类型:

```vue
<template>
    <div class="nav">
        <RouterLink class="tab" to="/user/why/id/001">用户</RouterLink>
        <button @click="jumpToAbout">关于</button>
    </div>
    <RouterView></RouterView>
</template>

<script>
import {useRouter} from "vue-router";

export default {
    name: 'App',
    setup() {
        const router = useRouter()
        const jumpToAbout = () => {
            router.push({
                path: '/about',
                query: {
                    name: 'coder',
                    age: 20
                }
            })
        }

        return {
            jumpToAbout
        }
    }
}
</script>

<style scoped>
.nav{
    margin: 20px 0;
}
.tab{
    border: 1px solid #ddd;
    margin-right: 8px;
    padding: 2px 20px;
    text-decoration: none;
}
</style>
```

### 3.2.2 Options API方式

```vue
<template>
    <div class="nav">
        <RouterLink class="tab" to="/user/why/id/001">用户</RouterLink>
        <button @click="jumpToAbout">关于</button>
    </div>
    <RouterView></RouterView>
</template>

<script>
export default {
    name: 'App',
    methods: {
        jumpToAbout() {
            const router = this.$router

            const route = {
                path: '/about',
                query: {
                    name: 'coder',
                    age: 20
                }
            }

            router.push(route)
        }
    }
}
</script>

<style scoped>
.nav{
    margin: 20px 0;
}
.tab{
    border: 1px solid #ddd;
    margin-right: 8px;
    padding: 2px 20px;
    text-decoration: none;
}
</style>
```

## 3.3 替换当前路由

- 使用方式和`push()`方法完全相同,只是使用的API为`replace()`方法:

```vue
<template>
    <div class="nav">
        <RouterLink class="tab" to="/user/why/id/001">用户</RouterLink>
        <button @click="jumpToAbout">关于</button>
    </div>
    <RouterView></RouterView>
</template>

<script>
import {useRouter} from "vue-router";

export default {
    name: 'App',
    setup() {
        const router = useRouter()
        const jumpToAbout = () => {
            // 替换当前路由 浏览器的后退功能无法后退到当前路由
            router.replace({
                path: '/about',
                query: {
                    name: 'why',
                    age: 18
                }
            })
        }

        return {
            jumpToAbout
        }
    }

}
</script>

<style scoped>
.nav{
    margin: 20px 0;
}
.tab{
    border: 1px solid #ddd;
    margin-right: 8px;
    padding: 2px 20px;
    text-decoration: none;
}
</style>
```

## 3.4 页面的前进与后退

- `router.go(1)`: 前进1个记录,相当于`router.forward()`
- `router.go(-1)`: 后退1个记录,相当于`router.back()`
- `router.go(0)`: 刷新当前页面,相当于`window.location.reload()`
- 若没有足够的记录,则默认失败