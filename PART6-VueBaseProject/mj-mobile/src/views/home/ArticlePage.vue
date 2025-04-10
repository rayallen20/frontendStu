<template>
    <div class="article-page">
        <nav class="my-nav van-hairline--bottom">
            <a
                href="javascript:"
               :class="{active: sorter === 'weight_desc'}"
                @click="toggleSorter"
            >
                推荐
            </a>
            <a
                href="javascript:"
                :class="{active: sorter === null}"
                @click="toggleSorter"
            >
                最新
            </a>
            <div class="logo"><img src="@/assets/logo.png" alt=""></div>
        </nav>

        <!--
        van-list组件的immediate-check: 在初始化时立即执行滚动位置检查
        -->
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
    name: "ArticlePage",
    data() {
        return {
            currentPage: 1,
            pageSize: 10,
            sorter: 'weight_desc',
            articleList: [],
            finished: false,
            loading: false,
            lastScrollDistance: 0,
            currentScrollDistance: 0,
        }
    },
    components: {
        ArticleItem,
    },
    methods: {
        async getArticleList() {
            this.loading = true
            try {
                const params = {
                    current: this.currentPage,
                    pageSize: this.pageSize,
                }

                if (this.sorter !== null) {
                    params.sorter = this.sorter
                }

                const payload = await articleAPI.recommendReq(params)
                this.articleList.push(...payload.rows)
                this.currentPage += 1
                if(this.currentPage > payload.pageTotal) {
                    this.finished = true
                }
            } catch (error) {
                if (error.response.data !== undefined) {
                    showFailToast(error.response.data.data)
                } else {
                    showFailToast('获取推荐列表失败')
                }
            } finally {
                this.loading = false
            }
        },
        async toggleSorter() {
            if (this.sorter === 'weight_desc') {
                this.sorter = null
                return
            }

            this.sorter = 'weight_desc'
        }
    },
    watch: {
        sorter: {
            handler() {
                this.currentPage = 1
                this.articleList = []
                this.finished = false
                this.getArticleList()
            },
            immediate: false,
        }
    },
    activated () {
        window.addEventListener('scroll', () => {
            this.lastScrollDistance = document.documentElement.scrollTop
        })

        document.documentElement.scrollTop = this.currentScrollDistance
    },
    deactivated () {
        this.currentScrollDistance = this.lastScrollDistance
    }
}
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
