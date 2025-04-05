# 1-动态路由的匹配

## 1. 需求

- 当访问`/user/why`时,渲染why用户的信息
- 当访问`/user/kobe`时,渲染kobe用户的信息

## 2. 实现

- step1. 实现页面组件

`pages/UserPage.vue`

```vue
<template>
    <div class="user-page">
        User Page
    </div>
</template>

<script>
export default {
    name: 'UserPage',
}
</script>
```

- step2. 配置动态路由

```javascript
const routes = [
    {
        path: '/',
        redirect: '/about'
    },
    {
        // 动态路径参数 以`:`开头
        path: '/user/:username',
        component: () => import('@/pages/UserPage.vue')
    },
    {
        path: '/about',
        component: () => import('@/pages/AboutPage.vue')
    }
]
```

此时,访问`/user/why`时,会渲染`UserPage`组件,但是没有显示用户的信息

手动访问`user/kobe`路由也是同样的效果

## 3. 在组件中获取动态路由参数

### 3.1 在`<template>`中获取动态路由参数

```vue
<template>
    <div class="user-page">
        <!-- 在模板中获取路径参数 -->
        User Page: {{$route.params.username}}
    </div>
</template>

<script>
    export default {
        name: 'UserPage',
    }
</script>
```

- 在模板中获取路径参数: `$route.params.username`

### 3.2 在`setup()`中使用`useRoute()`函数

```vue
<template>
    <div class="user-page">
        <!-- 在模板中获取路径参数 -->
        User Page: {{$route.params.username}}
    </div>
</template>

<script>
import {useRoute} from "vue-router";

export default {
    name: 'UserPage',
    setup() {
        // 在setup中使用useRoute()获取路径参数
        const route = useRoute()
        console.log(route.params.username)
    }
}
</script>
```

### 3.3 在`created()`等生命周期中使用`this.$route.params`

```vue
<template>
    <div class="user-page">
        <!-- 在模板中获取路径参数 -->
        User Page: {{$route.params.username}}
    </div>
</template>

<script>
import {useRoute} from "vue-router";

export default {
    name: 'UserPage',
    created() {
        // 在created中获取路径参数
        console.log(this.$route.params.username)
    },
    setup() {
        // 在setup中使用useRoute()获取路径参数
        const route = useRoute()
        console.log(route.params.username)
    }
}
</script>
```

## 4. 配置多个动态路由参数

```javascript
const routes = [
    {
        path: '/',
        redirect: '/about'
    },
    {
        path: '/user/:username/id/:id',
        component: () => import('@/pages/UserPage.vue')
    },
    {
        path: '/about',
        component: () => import('@/pages/AboutPage.vue')
    }
]
```

`App.vue`中,修改`<RouterLink>`的`to`属性

```vue
<template>
    <div class="nav">
        <RouterLink class="tab" to="/about">关于</RouterLink>
        <!-- 传递多个路径参数 -->
        <RouterLink class="tab" to="/user/why/id/0001">用户</RouterLink>
    </div>
    <RouterView></RouterView>
</template>
```

- `pages/UserPage.vue`中,获取多个动态路由参数

```vue
<template>
    <div class="user-page">
        <!-- 在模板中获取多个路径参数 -->
        User Page: {{$route.params.username}}-{{$route.params.id}}
    </div>
</template>

<script>
import {useRoute} from "vue-router";

export default {
    name: 'UserPage',
    created() {
        // 在created中获取多个路径参数
        const params = this.$route.params       // {username: 'why', id: '0001'}
        console.log(params.username)
        console.log(params.id)
    },
    setup() {
        // 在setup中使用useRoute()获取多个路径参数
        const route = useRoute()
        console.log(route.params.username)
        console.log(route.params.id)
    }
}
</script>
```

## 5. 跳转到NotFound页面

### 5.1 配置通配符路由

```javascript
const routes = [
    {
        path: '/',
        redirect: '/about'
    },
    {
        path: '/user/:username/id/:id',
        component: () => import('@/pages/UserPage.vue')
    },
    {
        path: '/about',
        component: () => import('@/pages/AboutPage.vue')
    },
    // 注意: 通配符路由应该放在最后
    {
        // `:pathMatch`是路径参数 后边的(.*)表示该路径参数匹配任意字符
        path: "/:pathMatch(.*)",
        component: () => import('@/pages/NotFoundPage.vue')
    }
]
```

- 注意: 通配符路由应该放在路由树的最后
- `/:pathMatch(.*)`: `:pathMatch`是路径参数名,`(.*)`表示任何匹配到的任意字符将作为该路径参数的值

### 5.2 `pages/NotFoundPage.vue`

```vue
<template>
    <div class="not-found-page">
        <h3>Page Not Found</h3>
        <p>路径页面不存在</p>
        <h4>{{$route.params.pathMatch}}</h4>
    </div>
</template>

<script>
export default {
    name: 'NotFoundPage',
}
</script>
```

- 此时访问`/product/001`路由,则`$route.params.pathMatch`的值为`product/001`

### 5.3 匹配所有页面的另一种规则

```javascript
const routes = [
    {
        path: '/',
        redirect: '/about'
    },
    {
        path: '/user/:username/id/:id',
        component: () => import('@/pages/UserPage.vue')
    },
    {
        path: '/about',
        component: () => import('@/pages/AboutPage.vue')
    },
    // 注意: 通配符路由应该放在最后
    {
        // `:pathMatch`是路径参数 后边的(.*)*表示将路径参数按/分割为数组
        path: "/:pathMatch(.*)*",
        component: () => import('@/pages/NotFoundPage.vue')
    }
]
```

- 此时访问`/product/001`路由,则`$route.params.pathMatch`的值为`["product", "001"]`