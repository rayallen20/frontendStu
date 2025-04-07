import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/discover',
    },
    {
        path: '/discover',
        name: 'discover',
        component: () => import('@/components/DiscoverMusic.vue'),
    },
    {
        path: '/myMusic',
        name: 'myMusic',
        component: () => import('@/components/MyMusic.vue')
    },
    {
        path: '/myFollow',
        name: 'myFollow',
        component: () => import('@/components/MyFollow.vue')
    },
]

const options = {
    routes,
    history: createWebHashHistory()
}

const router = createRouter(options)

export default router