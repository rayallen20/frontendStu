import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'
import { ElMessage } from 'element-plus'

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
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.name === 'login') {
    // 如果是登录页 直接放行
    return true
  }

  const token = store.state.user.token
  if (token === '') {
    ElMessage.error('请先登录!')
    // 如果没有token 重定向到登录页
    return { name: 'login' }
  }

  return true
})

export default router
