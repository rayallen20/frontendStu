import {createRouter, createWebHistory} from "vue-router";

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

const options = {
    routes,
    history: createWebHistory()
}

const router = createRouter(options)

export default router