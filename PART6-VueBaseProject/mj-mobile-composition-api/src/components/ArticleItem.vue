<template>
    <van-cell class="article-item" @click="jumpToDetail(article.id)">
        <template #title>
            <div class="head">
                <img :src="article.avatar" alt="" />
                <div class="con">
                    <p class="title van-ellipsis">{{article.stem}}</p>
                    <p class="other">{{article.creator}} | {{article.createdAt}}</p>
                </div>
            </div>
        </template>

        <template #label>
            <div class="body van-multi-ellipsis--l2">
                {{removeHtmlTags(article.content)}}
            </div>

            <div class="foot">
                点赞 {{article.likeCount}} | 浏览 {{article.views}}
            </div>
        </template>
    </van-cell>
</template>

<script setup>
import router from "@/router"

// eslint-disable-next-line
defineOptions({
    name: 'ArticleItem',
})

// eslint-disable-next-line
defineProps({
    article: {
        type: Object,
        required: true,
    }
})

const removeHtmlTags = (content) => {
    return content.replace(/<[^>]+>/g, '')
}

const jumpToDetail = (id) => {
    const targetRoute = {
        name: 'detail',
        params: {
            id: id,
        }
    }

    router.push(targetRoute)
}
</script>

<style scoped lang="less">
.article-item {
    .head {
        display: flex;
        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
        }
        .con {
            flex: 1;
            overflow: hidden;
            padding-left: 10px;
            p {
                margin: 0;
                line-height: 1.5;
                &.title {
                    width: 280px;
                }
                &.other {
                    font-size: 10px;
                    color: #999;
                }
            }
        }
    }
    .body {
        font-size: 14px;
        color: #666;
        line-height: 1.6;
        margin-top: 10px;
    }
    .foot {
        font-size: 12px;
        color: #999;
        margin-top: 10px;
    }
}
</style>