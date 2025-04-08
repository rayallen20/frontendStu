import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/about?name=coder&age=20',
    },
    {
        path: '/home',
        // 为路由命名 后续为该路由动态添加二级路由时会使用到
        name: 'home',
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

export default router