import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: () => import(/* webpackChunkName: "home-page-chunk" */'@/pages/HomePage.vue'),
        // 指定路由名称
        name: 'home',
        // 为路由添加元数据
        meta: {
            name: 'why',
            age: 18,
        }
    },
    {
        path: '/about',
        component: () => import(/* webpackChunkName: "about-page-chunk" */'@/pages/AboutPage.vue'),
        name: 'about',
    }
]

// 创建路由对象
const option = {
    routes,
    // 指定使用history路由
    history: createWebHistory(),

    // 指定使用hash路由
    // history: createWebHashHistory(),
}

const router = createRouter(option)

export default router