import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        redirect: {
            name: 'discover',
        },
    },
    {
        path: '/discover',
        name: 'discover',
        component: () => import('@/components/DiscoverMusic.vue'),
        // 二级路由的默认路由
        redirect: {
            name: 'discoverRecommend'
        },
        children: [
            {
                path: 'recommend',
                name: 'discoverRecommend',
                component: () => import('@/components/discover/RecommendCpn.vue')
            },
            {
                path: 'rank',
                name: 'discoverRank',
                component: () => import('@/components/discover/RankList.vue')
            },
            {
                // 路径参数后边加? 表示可选路径参数
                path: 'singer/:singerId?',
                name: 'discoverSinger',
                component: () => import('@/components/discover/SingerCpn.vue')
            },
        ]
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
    {
        path: '/:pathMatch(.*)',
        name: 'notFound',
        component: () => import('@/components/NotFoundPage.vue')
    },
]

const options = {
    routes,
    history: createWebHistory()
}

const router = createRouter(options)

export default router