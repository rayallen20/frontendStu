# 5-动态添加和删除路由

## 5.1 动态添加路由

- `router.addRoute()`方法:动态添加路由

- 准备页面`pages/CategoryPage.vue`:

```vue
<template>
    <div class="category-page">
        <h4>Category Page</h4>
    </div>
</template>

<script>
export default {
    name: 'CategoryPage',
}
</script>
```

- 动态添加路由:

```javascript
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/about?name=coder&age=20',
    },
    {
        path: '/home',
        component: () => import('@/pages/HomePage.vue'),
        children: [
            {
                // path: '', // 默认子路由
                path: '',
                redirect: '/home/shops'
            },
            {
                path: "message",
                component: () => import('@/pages/HomeMessage.vue')
            },
            {
                path: "shops",
                component: () => import('@/pages/HomeShops.vue')
            },
        ],
    },
    {
        path: '/user/:username/id/:id',
        component: () => import('@/pages/UserPage.vue')
    },
    {
        path: '/about',
        component: () => import('@/pages/AboutPage.vue'),
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import('@/pages/NotFoundPage.vue')
    }
]

const options = {
    routes,
    history: createWebHistory()
}

const router = createRouter(options)

// 动态添加路由
const categoryRoute = {
    path: '/category',
    component: () => import('@/pages/CategoryPage.vue'),
}
router.addRoute(categoryRoute)

export default router
```

- 使用路由:

```vue
<template>
    <div class="nav">
        <RouterLink class="tab" to="/user/why/id/001">用户</RouterLink>
        <RouterLink class="tab" to="/about?name=coder&age=20">关于</RouterLink>

        <RouterLink to="/home" custom v-slot="props">
            <span class="tab">
                <strong @click="props.navigate">首页: </strong>
                <span>{{props.href}}</span>
                -
                <span>{{props.isActive}}</span>
            </span>
        </RouterLink>

        <RouterLink class="tab" to="/category">品类</RouterLink>
    </div>

    <!-- <RouterView>组件的作用域插槽会传递一个props对象 该对象中包含了当前路由匹配的组件信息 -->
    <RouterView v-slot="props">
        <Transition name="why">
            <!-- props.Component 表示当前路由匹配到的组件 使用该属性可以动态渲染当前路由对应的组件 -->
            <Component :is="props.Component"></Component>
        </Transition>
    </RouterView>
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

.why-enter-from,
.why-leave-to {
    opacity: 0;
}

.why-enter-active,
.why-leave-active {
    transition: all 0.5s ease;
}

.why-enter-to,
.why-leave-from {
    opacity: 1;
}
</style>
```

## 5.2 动态添加二级路由

- 准备页面`pages/HomeComment.vue`:

```vue
<template>
    <div class="home-comment">
        <h4>Home Comment Page</h4>
    </div>
</template>

<script>
export default {
    name: 'HomeCommentPage',
}
</script>
```

- 添加路由:
  - 注意:
    - `addRoute`方法的第一个参数是父路由的名称(即父路由的`name`属性)
    - `addRoute`方法的第二个参数是子路由对象

```javascript
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/about?name=coder&age=20',
    },
    {
        path: '/home',
        // 为路由命名 后续为该路由动态添加二级路由时会使用到
        name: 'home',
        component: () => import('@/pages/HomePage.vue'),
        children: [
            {
                // path: '', // 默认子路由
                path: '',
                redirect: '/home/shops'
            },
            {
                path: "message",
                component: () => import('@/pages/HomeMessage.vue')
            },
            {
                path: "shops",
                component: () => import('@/pages/HomeShops.vue')
            },
        ],
    },
    {
        path: '/user/:username/id/:id',
        component: () => import('@/pages/UserPage.vue')
    },
    {
        path: '/about',
        component: () => import('@/pages/AboutPage.vue'),
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import('@/pages/NotFoundPage.vue')
    }
]

const options = {
    routes,
    history: createWebHistory()
}

const router = createRouter(options)

// 动态添加路由
const categoryRoute = {
    path: '/category',
    component: () => import('@/pages/CategoryPage.vue'),
}
router.addRoute(categoryRoute)

// 动态添加二级路由
const commentRoute = {
    path: 'comment',
    component: () => import('@/pages/HomeComment.vue')
}
// 通过父路由的name属性 指定二级路由的父路由
router.addRoute('home', commentRoute)

export default router
```

- 使用路由:

`pages/HomePage.vue`

```vue
<template>
    <div class="home-page">
        <h3>Home Page</h3>
        <RouterLink class="btn" to="/home/shops">商品页</RouterLink>
        <RouterLink class="btn" to="/home/message">消息页</RouterLink>
        <RouterLink class="btn" to="/home/comment">评论页</RouterLink>
        <RouterView></RouterView>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
}
</script>

<style scoped>
.btn{
    margin: 4px;
    padding: 3px 5px;
    text-decoration: none;
    border: 1px dashed #ddd;
}
</style>
```

## 5.3 动态删除路由

### a. 同名覆盖

- 注意这里的同名是指`name`属性值相同

```javascript
// 覆盖之前已存在的name属性值为about的路由
router.addRoute({path: '/about', name: 'about', component: () => import('@/pages/OtherAboutPage.vue')})
```

### b. 使用Vue Router实例`removeRoute()`方法

```javascript
// 注意此处传入的是要删除的路由的name属性值
router.removeRoute('about')
```

### c. 调用`addRoute()`方法返回的回调函数

```javascript
const removeRoute = router.addRoute(routeRecord)
removeRoute()
```

## 5.4 Vue Router实例的其他方法

- `router.hasRoute(name)`:判断路由是否存在
- `router.getRoutes()`:获取一个包含所有路由的数组