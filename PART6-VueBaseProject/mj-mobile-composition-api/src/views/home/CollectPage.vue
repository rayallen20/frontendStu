<template>
    <div class="collect-page">
        <van-nav-bar title="收藏" />

        <van-pull-refresh
            v-model="refreshing"
            @refresh="refreshCollectList"
            pulling-text="下拉刷新"
            loosing-text="松开刷新"
            loading-text="正在刷新..."
        >
            <van-list
                :loading="loading"
                :finished="finished"
                finished-text="没有更多了"
                :immediate-check="true"
                @load="getCollectList"
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
import ArticleItem from "@/components/ArticleItem.vue"

// eslint-disable-next-line
defineOptions({
    name: 'CollectPage',
})

const page = ref(1)
const pageSize = ref(10)
const articleList = reactive([])

const loading = ref(false)
const finished = ref(false)
const getCollectList = async () => {
    loading.value = true

    const params = {
        page: page.value,
        pageSize: pageSize.value,
    }

    try {
        const payload = await articleAPI.getCollectList(params)
        articleList.push(...payload.rows)

        if (page.value >= payload.pageTotal) {
            finished.value = true
        }
        page.value += 1
    } catch (error) {
        if (error.response.data !== undefined) {
            showFailToast(error.response.data.data)
        } else {
            showFailToast('获取收藏列表失败')
        }
    } finally {
        loading.value = false
    }
}

const refreshing = ref(false)
const refreshCollectList = async () => {
    refreshing.value = true

    // 重置分页页数和状态 清空列表
    page.value = 1
    articleList.length = 0

    try {
        await getCollectList()
    } catch (error) {
        if (error.response.data !== undefined) {
            showFailToast(error.response.data.data)
        } else {
            showFailToast('刷新收藏列表失败')
        }
    } finally {
        refreshing.value = false
    }
}
</script>

<style scoped lang="less">

</style>