<template>
    <div class="collect-page">
        <van-nav-bar title="收藏" />

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
            ></ArticleItem>
        </van-list>
    </div>
</template>

<script>
import articleAPI from '@/api/article'
import ArticleItem from "@/components/ArticleItem.vue"
import {showFailToast} from "vant"

export default {
    name: "CollectPage",
    components: {
        ArticleItem
    },
    data() {
        return {
            currentPage: 1,
            pageSize: 10,
            articleList: [],
            loading: false,
            finished: false,
        }
    },
    methods: {
        async getArticleList() {
            this.loading = true
            try {
                const params = {
                    page: this.currentPage,
                    pageSize: this.pageSize,
                    optType: 2,
                }
                const payload = await articleAPI.listReq(params)
                this.articleList.push(...payload.rows)
                this.currentPage += 1
                if (this.currentPage > payload.pageTotal) {
                    this.finished = true
                }
            } catch (error) {
                if (error.response.data !== undefined) {
                    showFailToast(error.response.data.data)
                } else {
                    showFailToast('获取收藏列表失败')
                }
            } finally {
                this.loading = false
            }
        }
    }
}
</script>

<style scoped lang="less">

</style>
