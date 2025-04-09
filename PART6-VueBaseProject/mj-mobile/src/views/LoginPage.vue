<template>
    <div class="login-page">
        <!-- 标题 -->
        <van-nav-bar title="面经登录" />
        <!-- 表单 -->
        <!-- @submit可以自动收集表单数据 -->
        <van-form @submit="login">
            <van-cell-group inset>
                <!--
                1. label: 表单项的标题(就是输入框左侧的文字)
                2. name: 提交表单时的字段名
                3. rules: 校验规则
                    1. required: 是否必填
                    2. message: 校验不通过时的提示信息
                -->
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
                    square
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

<script>
import userAPI from '@/api/user'
import {showFailToast, showSuccessToast} from "vant";

export default {
    name: "LoginPage",
    data() {
        return {
            username: '',
            password: '',
            usernameRules: [
                {
                    required: true,
                    message: '请输入用户名'
                },
                {
                    pattern: /^\w{5,10}$/,
                    message: '用户名长度为5-10位'
                },
            ],
            passwordRules: [
                {
                    required: true,
                    message: '请输入密码'
                },
                {
                    pattern: /^\S{4,10}$/,
                    message: '密码长度为4-10位的非空白字符'
                },
            ],
        }
    },
    methods: {
        async login(formValue) {
            try {
                const payload = await userAPI.loginReq(formValue)

                this.username = ''
                this.password = ''
                showSuccessToast('登录成功')

                const token = payload.token
                localStorage.setItem('token', token)

                // 设置请求头
                setTimeout(() => this.$router.push({ name: 'home' }), 2000)
            } catch (error) {
                if (error.response.data !== undefined) {
                    showFailToast(error.response.data.message)
                    return
                }

                showFailToast('登录失败')
            }
        },
    }
}
</script>

<style lang="less" scoped>
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
