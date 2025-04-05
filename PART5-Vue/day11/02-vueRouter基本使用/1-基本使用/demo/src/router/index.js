import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import {createRouter, createWebHashHistory} from "vue-router";

// 配置路由映射表(从路径到组件的映射)
const routes = [
    {
        path: '/home',
        component: HomePage,
    },
    {
        path: '/about',
        component: AboutPage,
    }
]

// 创建路由对象
const option = {
    routes,
    // 指定使用history路由
    // history: createWebHistory(),

    // 指定使用hash路由
    history: createWebHashHistory(),
}

const router = createRouter(option)

export default router