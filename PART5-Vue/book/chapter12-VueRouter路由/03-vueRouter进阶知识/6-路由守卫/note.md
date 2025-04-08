# 6-路由守卫

- 作用: 在某些情况下,需要拦截路由导航.例:进入某个路由前,需判断用户是否登录,登录则放行,否则导航到登录页.这个功能就需要使用路由守卫实现
- 种类:
  - 全局路由守卫
  - [路由独享守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E8%B7%AF%E7%94%B1%E7%8B%AC%E4%BA%AB%E7%9A%84%E5%AE%88%E5%8D%AB)
  - [组件内守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E7%BB%84%E4%BB%B6%E5%86%85%E7%9A%84%E5%AE%88%E5%8D%AB)

## 6.1 全局前置守卫

```javascript
router.beforeEach((to, from) => {
  return false
})
```

- `router.beforeEach()`方法: 用于注册全局前置守卫
  - 入参:
    - to: 即将要进入的目标路由对象
    - from: 当前导航正要离开的路由对象(也就是页面当前所在的路由)
  - 返回值:
    - `false`: 取消导航
    - `undefined`或`true`: 允许导航
    - 字符串: 重定向到指定路由,例如`return '/login'`表示重定向到登录页
    - 对象: 重定向到指定路由,例如`return { path: '/login' }`表示重定向到登录页
- 使用案例:

```javascript
router.beforeEach((to, from) => {
  if (to.path !== '/login') {
    const token = sessionStorage.getItem('token')
    if (token === null || token === '') {
      return '/login'
    }
  }

  // 这句只是为了使用from参数 其实用不上的可以不写
  console.log(from.path)
  return true
})
```

- [可选的第3个参数`next`(不建议使用)](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%8F%AF%E9%80%89%E7%9A%84%E7%AC%AC%E4%B8%89%E4%B8%AA%E5%8F%82%E6%95%B0-next)

- 登录页`pages/LoginPage.vue`:

```vue
<template>
    <div class="login-page">
        <button @click="login">登录</button>
    </div>
</template>

<script>
import {useRouter} from "vue-router";

export default {
    name: 'LoginPage',
    setup() {
        const router = useRouter()
        const login = () => {
            sessionStorage.setItem('token', 'why')
            router.push({
                name: 'home',
            })
        }

        return {
            login
        }
    }
}
</script>
```

- 注册登录页路由:

```javascript
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/about?name=coder&age=20',
    },
    // 注册登录页路由
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/LoginPage.vue') 
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/HomePage.vue'),
        children: [
            {
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

router.beforeEach((to, from) => {
    if (to.path !== '/login') {
        const token = sessionStorage.getItem('token')
        if (token === undefined || token === '') {
            return '/login'
        }
    }

    // 这句只是为了使用from参数 其实用不上的可以不写
    console.log(from.path)
    return true
})

export default router
```

- 手动访问`login`路由后,点击登录按钮,会跳转到`home`路由;直接访问其他路由,则会被重定向到`login`路由