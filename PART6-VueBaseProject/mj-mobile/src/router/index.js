import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        redirect: {
            name: 'articleHome'
        },
    },
    {
        path: '/detail',
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

export default router
