<template>
    <div class="register-page">
        <!-- 标题 -->
        <van-nav-bar title="面经注册" />

        <!-- 表单 -->
        <van-form @submit="register">
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
                    注册
                </van-button>
            </div>
        </van-form>

        <!-- 跳转登录 -->
        <RouterLink class="link" :to="{name: 'login'}">去登录</RouterLink>
    </div>
</template>

<script setup>
import {ref} from "vue"
import {showFailToast, showSuccessToast} from "vant"
import userAPI from '@/api/user'
import router from "@/router"

// eslint-disable-next-line
defineOptions({
    name: 'RegisterPage',
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

const register = async (values) => {
    try {
        await userAPI.register(values)

        showSuccessToast('注册成功')

        username.value = ''
        password.value = ''

        setTimeout(() => {
            router.push({name: 'login'})
        }, 2000)
    } catch (error) {
        if (error.response.data !== undefined) {
            showFailToast(error.response.data.message)
            return
        }

        showFailToast('注册失败')
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