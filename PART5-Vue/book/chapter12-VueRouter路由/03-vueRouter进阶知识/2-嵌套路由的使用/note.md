# 2-嵌套路由的使用

## 1. 需求

- `HomePage.vue`页面中,包括`HomeShops.vue`和`HomeMessage.vue`两个子页面,需要实现`/home/shops`和`/home/message`两个子路由

## 2. 实现

### 2.1 页面准备

- `HomeShops.vue`:

```vue
<template>
    <div class="home-shops">
        <h4>Home Shops组件</h4>
        <div>
            商品信息...
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeShops",
}
</script>
```

- `HomeMessage.vue`:

```vue
<template>
    <div class="home-message">
        <h4>Home Message组件</h4>
        <div>
            消息信息...
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeMessage",
}
</script>
```

### 2.2 注册二级路由

```javascript
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('@/pages/HomePage.vue'),
        // 注册二级路由
        children: [
            {
                // 二级路由不支持 "/home/message"或"/message"的写法 直接写二级路由的内容即可
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
        path: '/about',
        component: () => import('@/pages/AboutPage.vue'),
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import('@/pages/NotFoundPage.vue')
    }
]
```

- 注意: 二级路由的`path`属性既不需要添加父路由前缀,也不需要添加`/`前缀,直接写二级路由的内容即可

### 2.3 `HomePage.vue`页面中添加`<RouteLink>`组件

```vue
<template>
    <div class="home-page">
        <h3>Home Page</h3>
        <!--RouterLink组件中的to属性要写全路径-->
        <RouterLink class="btn" to="/home/shops">商品页</RouterLink>
        <RouterLink class="btn" to="/home/message">消息页</RouterLink>
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

- 注意: `RouterLink`组件中的`to`属性要写全路径,即`/home/shops`和`/home/message`,否则找不到路由

### 2.4 为二级路由配置默认路由

- 问题: 此时访问`/home`时,没有显示任何子页面,应该为二级路由配置一个默认路由,即访问`/home`时,默认显示`/home/message`或`/home/shops`中的一个

```javascript
const routes = [
    {
        path: '/',
        redirect: '/home'
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
        path: '/about',
        component: () => import('@/pages/AboutPage.vue'),
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import('@/pages/NotFoundPage.vue')
    }
]
```

- 此时访问`/home`时,默认显示`/home/shops`页面,因为重定向了