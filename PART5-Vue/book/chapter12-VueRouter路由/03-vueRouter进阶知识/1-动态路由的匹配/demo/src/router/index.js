import {createRouter, createWebHistory} from "vue-router";

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

const options = {
    routes,
    history: createWebHistory()
}

const router = createRouter(options)

export default router