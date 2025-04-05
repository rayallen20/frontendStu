# 1-基本使用

## step1.创建路由组件

- `pages/HomePage.vue`:

```vue
<template>
    <div class="home-page">
        Home Page
    </div>
</template>
```

这种作为页面使用的组件,被称为路由组件或页面

- `pages/AboutPage.vue`:

```vue
<template>
    <div class="about-page">
        About Page
    </div>
</template>
```

## step2. 配置路由映射

- `router/index.js`:

```javascript
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";

// 配置路由映射表(从路径到组件的映射)
const routes = [
    {
        path: '/home',
        component: HomePage,
    },
    {
        path: '/about',
        component: AboutPage,
    }
]
```

## step3. 创建路由对象

```javascript
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import {createRouter, createWebHashHistory} from "vue-router";

// 配置路由映射表(从路径到组件的映射)
const routes = [
    {
        path: '/home',
        component: HomePage,
    },
    {
        path: '/about',
        component: AboutPage,
    }
]

// 创建路由对象
const option = {
    routes,
    // 指定使用history路由
    // history: createWebHistory(),

    // 指定使用hash路由
    history: createWebHashHistory(),
}

const router = createRouter(option)

export default router
```

## step4. 将路由对象挂载到Vue实例上

- `main.js`:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";

const app = createApp(App)

// 挂载路由对象到Vue实例
app.use(router)

// 挂载Vue实例到页面
app.mount('#app')
```

## step5. 通过`<RouterLink>`组件实现路由跳转,通过`<RouterView>`组件渲染路由组件

```vue
<template>
    <div class="nav">
        <!--
        <RouterLink>组件: 用于定义导航链接,点击该组件时,可实现路由切换(即URL路径切换)
        <RouterLink>组件的to属性: 用于指定单击切换后的路径 也就是在router/index.js中定义的路由路径
        -->
        <RouterLink class="tab" to="/home">首页</RouterLink>
        <RouterLink class="tab" to="/about">关于</RouterLink>
    </div>

    <!--
    <RouterView>组件: 用于渲染路由匹配到的组件 放在这里相当于组件的占位符
    -->
    <RouterView></RouterView>
</template>

<script>
export default {
    name: 'App',
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

- 注意:此时访问` http://localhost:8080/#/ `时,控制台会报错:`Vue Router warn]: No match found for location with path "/"`