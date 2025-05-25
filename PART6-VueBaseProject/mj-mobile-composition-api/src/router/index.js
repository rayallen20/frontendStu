import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        name: 'index',
        redirect: {
            name: 'articleHome',
        }
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
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('@/views/DetailPage.vue'),
    },
    {
        path: '/home',
        name: 'home',
        redirect: {
            name: 'articleHome'
        },
        component: () => import('@/views/HomePage.vue'),
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
            }
        ],
    }
]

const option = {
    routes,
    history: createWebHistory(),
}

const router = createRouter(option)

router.beforeEach((to) => {
    // 如果访问的路由是登录或注册页面 则不需要校验token
    if (to.name === 'login' || to.name === 'register') {
        return true
    }

    // 如果访问的路由不是登录或注册页面 则需要校验token
    const token = localStorage.getItem('token')
    if (token === null || token === '') {
        return {name: 'login'}
    }

    return true
})

export default router