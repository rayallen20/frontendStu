# 02-路由配置

- `src/router/index.js`:

```javascript
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    // 登录页 一级路由
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/LoginPage.vue')
  },
  {
    // 品字形布局页面 一级路由
    path: '/',
    redirect: {
      name: 'dashboard'
    },
    component: () => import('@/views/layout/LayoutPage.vue'),
    children: [
      {
        // 仪表盘页面 二级路由
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/DashboardPage.vue')
      },
      {
        // 文章列表页面 二级路由
        path: 'articleList',
        name: 'articleList',
        component: () => import('@/views/article/ArticleListPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

- 一级路由出口: `App.vue`:

```vue
<template>
  <div class="app">
    <!-- 一级路由出口 -->
    <RouterView></RouterView>
  </div>
</template>

<script setup>
// eslint-disable-next-line
defineOptions({
  name: 'App'
})
</script>

<style lang="scss" scoped>
</style>
```

- 二级路由出口: `views/layout/LayoutPage.vue`:

```vue
<template>
  <div class="layout-page">
    一级首页布局页
    <!-- 二级路由出口 -->
    <RouterView></RouterView>
  </div>
</template>

<script setup>
// eslint-disable-next-line
defineOptions({
  name: 'DashBoardPage'
})
</script>

<style scoped>

</style>
```