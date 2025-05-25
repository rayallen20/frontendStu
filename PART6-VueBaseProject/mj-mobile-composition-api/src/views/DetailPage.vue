<template>
    <div class="detail-page">
        <div class="detail-page" v-if="Object.keys(article).length > 0">
            <van-nav-bar left-text="返回" @click-left="back" fixed title="面经详情" />
            <header class="header">
                <h1>{{article.stem}}</h1>
                <p>
                    {{article.createdAt}} | {{article.views}} 浏览量 | {{article.likeCount}} 点赞数
                </p>
                <p>
                    <img :src="article.avatar" alt />
                    <span>{{article.creator}}</span>
                </p>
            </header>

            <main class="body"  v-html="article.content"></main>

            <div class="opt">
                <van-icon
                    name="like-o"
                    :class="{active: article.likeFlag === 1}"
                    @click="like(article.id)"
                />
                <van-icon
                    name="star-o"
                    :class="{active: article.collectFlag === 1}"
                    @click="collect(article.id)"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import {useRoute} from "vue-router"
import {onMounted, reactive} from "vue"
import articleAPI from '@/api/article'
import router from "@/router"
import {showFailToast, showSuccessToast} from "vant";

// eslint-disable-next-line
defineOptions({
    name: 'DetailPage',
})

const article = reactive({})

const getArticle = async (id) => {
    const params = { id }

    try {
        const payload = await articleAPI.detail(params)
        Object.assign(article, payload)
    } catch (error) {
        if (error.response && error.response.data) {
            console.error(error.response.data.data)
        } else {
            console.error('获取文章详情失败')
        }
    }
}

const back = () => {
    router.back()
}

onMounted(async () => {
    const route = useRoute()
    const id = route.params.id
    await getArticle(id)
})

const like = async (id) => {
    try {
        await articleAPI.like(id)
        await getArticle(id)
        if (article.likeFlag === 1) {
            showSuccessToast('点赞成功')
        } else {
            showSuccessToast('取消点赞成功')
        }
    } catch (error) {
        if (error.response.data !== undefined) {
            showFailToast(error.response.data.data)
        } else {
            showFailToast('点赞失败')
        }
    }
}

const collect = async (id) => {
    try {
        await articleAPI.collect(id)
        await getArticle(id)
        if (article.collectFlag === 1) {
            showSuccessToast('收藏成功')
        } else {
            showSuccessToast('取消收藏成功')
        }
    } catch (error) {
        if (error.response.data !== undefined) {
            showFailToast(error.response.data.data)
        } else {
            showFailToast('收藏失败')
        }
    }
}
</script>

<style scoped lang="less">
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