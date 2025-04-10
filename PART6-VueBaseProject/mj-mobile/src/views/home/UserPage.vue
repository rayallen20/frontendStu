<template>
    <div class="user-page">
        <div class="user">
            <img :src="avatar" alt="">
            <h3>{{username}}</h3>
        </div>

        <van-grid clickable :column-num="3" :border="false">
            <van-grid-item icon="clock-o" text="历史记录" :to="{name: 'articleHome'}"></van-grid-item>
            <van-grid-item icon="bookmark-o" text="我的收藏" :to="{name: 'collectHome'}"></van-grid-item>
            <van-grid-item icon="thumb-circle-o" text="我的点赞" :to="{name: 'likeHome'}"></van-grid-item>
        </van-grid>

        <van-cell-group class="mt20">
            <van-cell title="推荐分享" is-link></van-cell>
            <van-cell title="意见反馈" is-link></van-cell>
            <van-cell title="关于我们" is-link></van-cell>
            <van-cell title="退出登录" is-link @click="logout"></van-cell>
        </van-cell-group>
    </div>
</template>

<script>
import userAPI from '@/api/user'
import {showFailToast, showSuccessToast} from "vant"

export default {
    name: "UserPage",
    data() {
        return {
            id: 0,
            username: '',
            avatar: ''
        }
    },
    async created() {
        try {
            const payload = await userAPI.userReq()
            this.id = payload.id
            this.username = payload.username
            this.avatar = payload.avatar
            await this.$nextTick()
        } catch (error) {
            if (error.response.data !== undefined) {
                showFailToast(error.response.data.data)
            } else {
                showFailToast('获取个人信息失败')
            }
        }
    },
    methods: {
        async logout() {
            try {
                await userAPI.logoutReq()
                localStorage.removeItem('token')
                this.id = 0
                this.username = ''
                this.avatar = ''
                await this.$nextTick()
                showSuccessToast('退出登录成功')
                setTimeout(() => this.$router.push({name: 'login'}), 2000)
            } catch (error) {
                if (error.response.data !== undefined) {
                    showFailToast(error.response.data.data)
                } else {
                    showFailToast('退出登录失败')
                }
            }
        }
    }
}
</script>

<style scoped lang="less">
.user-page {
    padding: 0 10px;
    background: #f5f5f5;
    height: 100vh;
    .mt20 {
        margin-top: 20px;
    }
    .user {
        display: flex;
        padding: 20px 0;
        align-items: center;
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            overflow: hidden;
        }
        h3 {
            margin: 0;
            padding-left: 20px;
            font-size: 18px;
        }
    }
}
</style>
