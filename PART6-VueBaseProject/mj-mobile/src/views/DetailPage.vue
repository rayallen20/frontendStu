<template>
    <div class="detail-page">
        <van-nav-bar left-text="返回" @click-left="$router.back()" fixed title="面经详细" />
        <header class="header">
            <h1>{{article.stem}}</h1>
            <p>
                {{article.createdAt}} | {{article.views}} 浏览量 |
                {{article.likeCount}} 点赞数
            </p>
            <p>
                <img :src="article.avatar" alt="" />
                <span>{{article.creator}}</span>
            </p>
        </header>
        <main class="body" v-html="article.content"></main>
        <div class="opt">
            <van-icon
                name="like-o"
                :class="{active: article.likeFlag === 1}"
                @click="like"
            />
            <van-icon
                name="star-o"
                :class="{active: article.collectFlag === 1}"
                @click="collect"
            />
        </div>
    </div>
</template>

<script>
import articleAPI from '@/api/article'
import {showSuccessToast, showFailToast} from "vant"

export default {
    name: 'DetailPage',
    data() {
        return {
            article: {},
        }
    },
    async created() {
        const params = {
            id: this.$route.params.id
        }

        try {
            const payload = await articleAPI.detailReq(params)
            this.article = payload
            await this.$nextTick()
        } catch (error) {
            if (error.response.data !== undefined) {
                showFailToast(error.response.data.data)
            } else {
                showFailToast('获取文章详情失败')
            }
        }
    },
    methods: {
        async like() {
            const params = {
                id: this.article.id,
                optType: 1,
            }

            try {
                await articleAPI.optReq(params)
                if (this.article.likeFlag === 1) {
                    this.article.likeFlag = 0
                    this.article.likeCount = Number(this.article.likeCount) - 1
                    showSuccessToast('取消成功')
                    return
                }

                this.article.likeFlag = 1
                this.article.likeCount = Number(this.article.likeCount) + 1
                showSuccessToast('点赞成功')
            } catch (error) {
                if (error.response.data !== undefined) {
                    showFailToast(error.response.data.data)
                } else {
                    showFailToast('点赞失败')
                }
            }
        },
        async collect() {
            const params = {
                id: this.article.id,
                optType: 2,
            }

            try {
                await articleAPI.optReq(params)
                if (this.article.collectFlag === 1) {
                    this.article.collectFlag = 0
                    showSuccessToast('取消成功')
                    return
                }

                this.article.collectFlag = 1
                showSuccessToast('收藏成功')
            } catch (error) {
                if (error.response.data !== undefined) {
                    showFailToast(error.response.data.data)
                } else {
                    showFailToast('收藏失败')
                }
            }
        },
    }
}
</script>

<style lang="less" scoped>
.detail-page {
    margin-top: 44px;
    overflow: hidden;
    padding: 0 15px;
    .header {
        h1 {
            font-size: 24px;
        }
        p {
            color: #999;
            font-size: 12px;
            display: flex;
            align-items: center;
        }
        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
        }
    }
    .opt {
        position: fixed;
        bottom: 100px;
        right: 0;
        > .van-icon {
            margin-right: 20px;
            background: #fff;
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            border-radius: 50%;
            box-shadow: 2px 2px 10px #ccc;
            font-size: 18px;
            &.active {
                background: #fec635;
                color: #fff;
            }
        }
    }
}
</style>
