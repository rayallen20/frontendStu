<template>
    <div class="like-page">
        <van-nav-bar title="喜欢" />

        <van-pull-refresh
            v-model="refreshing"
            @refresh="refreshLikeList"
            pulling-text="下拉刷新"
            loosing-text="松开刷新"
            loading-text="正在刷新..."
        >
            <van-list
                :loading="loading"
                :finished="finished"
                finished-text="没有更多了"
                :immediate-check="true"
                @load="getLikeList"
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
import {reactive, ref} from "vue"
import articleAPI from '@/api/article'
import {showFailToast} from "vant"
import ArticleItem from "@/components/ArticleItem.vue";

// eslint-disable-next-line
defineOptions({
    name: 'LikePage',
})

const page = ref(1)
const pageSize = ref(10)
const articleList = reactive([])

const loading = ref(false)
const finished = ref(false)

const getLikeList = async () => {
    loading.value = true

    const params = {
        page: page.value,
        pageSize: pageSize.value,
    }

    try {
        const payload = await articleAPI.getLikeList(params)
        articleList.push(...payload.rows)

        if (page.value >= payload.pageTotal) {
            finished.value = true
        }
        page.value += 1
    } catch (error) {
        if (error.response.data !== undefined) {
            showFailToast(error.response.data.data)
        } else {
            showFailToast('获取点赞列表失败')
        }
    } finally {
        loading.value = false
    }
}

const refreshing = ref(false)
const refreshLikeList = async () => {
    refreshing.value = true
    page.value = 1
    articleList.length = 0 // 清空列表

    try {
        await getLikeList()
    } catch (error) {
        if (error.response.data !== undefined) {
            showFailToast(error.response.data.data)
        } else {
            showFailToast('刷新喜欢列表失败')
        }
    } finally {
        refreshing.value = false
    }
}
</script>

<style scoped lang="less">

</style>