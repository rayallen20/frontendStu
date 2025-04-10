import {createRouter, createWebHistory} from "vue-router"
import {showFailToast} from "vant"

const routes = [
    {
        path: '/',
        name: 'index',
        redirect: {
            name: 'articleHome'
        },
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('@/views/DetailPage.vue'),
    },
    {
        path: '/home',
        name: 'home',
        // Tips: 同一个路由若同时定义了component和redirect,则component会被忽略
        // 但是此处由于重定向的目标路由是该路由的子路由,所以component会被渲染
        component: () => import('@/views/HomePage.vue'),
        redirect: {
            name: 'articleHome'
        },
        children: [
            {
                path: 'article',
                name: 'articleHome',
                component: () => import('@/views/home/ArticlePage.vue'),
            },
            {
                path: 'collect',
                name: 'collectHome',
                component: () => import('@/views/home/CollectPage.vue'),
            },
            {
                path: 'like',
                name: 'likeHome',
                component: () => import('@/views/home/LikePage.vue'),
            },
            {
                path: 'user',
                name: 'userHome',
                component: () => import('@/views/home/UserPage.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginPage.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/RegisterPage.vue'),
    }
]

const options = {
    routes,
    history: createWebHistory(),
}

const router = createRouter(options)

router.beforeEach((to) => {
    if (to.name === 'login' || to.name === 'register') {
        return true
    }

    const token = localStorage.getItem('token')
    if (token === null) {
        showFailToast('请先登录')
        return {name: 'login'}
    }

    return true
})

export default router
