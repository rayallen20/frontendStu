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
        if (token === null || token === '') {
            return '/login'
        }
    }

    // 这句只是为了使用from参数 其实用不上的可以不写
    console.log(from.path)
    return true
})

export default router