<template>
    <div class="article-page">
        <nav class="my-nav van-hairline--bottom">
            <a
                href="javascript:"
                :class="{active: sorter === 'weight_desc'}"
                @click="toggleSorter('weight_desc')"
            >
                推荐
            </a>
            <a
                href="javascript:"
                :class="{active: sorter === null}"
                @click="toggleSorter(null)"
            >
                最新
            </a>
            <div class="logo">
                <img src="@/assets/logo.png" alt="">
            </div>
        </nav>

        <van-pull-refresh
            v-model="refreshing"
            @refresh="refreshArticleList"
            pulling-text="下拉刷新"
            loosing-text="松开刷新"
            loading-text="正在刷新..."
        >
            <van-list
                :loading="loading"
                :finished="finished"
                finished-text="没有更多了"
                :immediate-check="true"
                @load="getArticleList"
            >
                <ArticleItem
                    v-for="article in articleList"
                    :key="article.id"
                    :article="article"
                >
                </ArticleItem>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script setup>
import {onActivated, onDeactivated, reactive, ref, watch} from "vue"
import articleAPI from '@/api/article'
import ArticleItem from "@/components/ArticleItem.vue"
import {showFailToast} from "vant"

// eslint-disable-next-line
defineOptions({
    name: 'ArticlePage',
})

const current = ref(1)
const pageSize = ref(10)
const sorter = ref('weight_desc')
const articleList = reactive([])

const loading = ref(false)
const finished = ref(false)
const getArticleList = async () => {
    loading.value = true

    const params = {
        current: current.value,
        pageSize: pageSize.value,
        sorter: sorter.value,
    }

    try {
        const payload = await articleAPI.recommend(params)
        articleList.push(...payload.rows)

        if (current.value >= payload.pageTotal) {
            finished.value = false
        }

        current.value += 1
    } catch (error) {
        if (error.response.data !== undefined) {
            showFailToast(error.response.data.data)
        } else {
            showFailToast('获取推荐列表失败')
        }
    } finally {
        loading.value = false
    }
}

const refreshing = ref(false)
const refreshArticleList = async () => {
    refreshing.value = true

    // 重置分页页数和状态 清空列表
    current.value = 1
    finished.value = false
    articleList.length = 0

    try {
        await getArticleList()
    } catch (error) {
        showFailToast('刷新失败')
    } finally {
        refreshing.value = false
    }
}

const toggleSorter = (value) => {
    sorter.value = value
}

watch(sorter, () => {
    current.value = 1
    articleList.length = 0
    finished.value = false
    getArticleList()
})

const lastScrollDistance = ref(0)
const currentScrollDistance = ref(0)

window.addEventListener('scroll', () => {
    lastScrollDistance.value = document.documentElement.scrollTop
})

onActivated(() => {
    document.documentElement.scrollTop = currentScrollDistance.value
})

onDeactivated(() => {
    currentScrollDistance.value = lastScrollDistance.value
})
</script>

<style scoped lang="less">
.article-page {
    margin-bottom: 50px;
    margin-top: 44px;
    .my-nav {
        height: 44px;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 999;
        background: #fff;
        display: flex;
        align-items: center;
        /* >: 直接子元素 */
        > a {
            color: #999;
            font-size: 14px;
            line-height: 44px;
            margin-left: 20px;
            position: relative;
            transition: all 0.3s;
            &::after {
                content: '';
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: 0;
                width: 0;
                height: 2px;
                background: #222;
                transition: all 0.3s;
            }
            /*
            &:父选择器
            &.active: 定义当父元素有.active类时的样式
             */
            &.active {
                color: #222;
                &::after {
                    width: 14px;
                }
            }
        }
        .logo {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            > img {
                width: 64px;
                height: 28px;
                display: block;
                margin-right: 10px;
            }
        }
    }
}
</style>