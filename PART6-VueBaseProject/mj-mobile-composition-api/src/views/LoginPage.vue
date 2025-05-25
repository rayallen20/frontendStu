<template>
    <div class="login-page">
        <!-- 标题 -->
        <van-nav-bar title="面经登录" />

        <!-- 表单 -->
        <van-form @submit="login">
            <van-cell-group inset>
                <van-field
                    v-model="username"
                    name="username"
                    type="text"
                    label="用户名"
                    placeholder="请输入用户名"
                    :rules="usernameRules"
                />

                <van-field
                    v-model="password"
                    name="password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    :rules="passwordRules"
                />
            </van-cell-group>

            <div class="btn-container">
                <van-button
                    round
                    block
                    type="primary"
                    native-type="submit"
                >
                    登录
                </van-button>
            </div>
        </van-form>

        <!-- 跳转注册 -->
        <RouterLink class="link" :to="{name: 'register'}">注册账号</RouterLink>
    </div>
</template>

<script setup>
import {ref} from "vue"
import userAPI from '@/api/user'
import {showFailToast, showSuccessToast} from "vant";
import router from "@/router";

// eslint-disable-next-line
defineOptions({
    name: 'LoginPage',
})

const username = ref('')
const usernameRules = [
    {
        required: true,
        message: '请输入用户名'
    },
    {
        pattern: /^\w{5,10}$/,
        message: '用户名长度为5-10位'
    },
]

const password = ref('')
const passwordRules = [
    {
        required: true,
        message: '请输入密码'
    },
    {
        pattern: /^\S{4,10}$/,
        message: '密码长度为4-10位的非空白字符'
    },
]

const login = async (values) => {
    try {
        const payload = await userAPI.login(values)

        username.value = ''
        password.value = ''

        showSuccessToast('登录成功')

        localStorage.setItem('token', payload.token)

        setTimeout(() => {
            router.push({name: 'home'})
        }, 2000)
    } catch (error) {
        if (error.response.data !== undefined) {
            showFailToast(error.response.data.message)
            return
        }

        showFailToast('登录失败')
    }
}
</script>

<style scoped lang="less">
.btn-container {
    margin: 16px;
}

.link {
    color: #006699;
    font-size: 12px;
    margin-right: 20px;
    float: right;
}
</style>