<template>
    <div class="register-page">
        <!-- 标题 -->
        <van-nav-bar title="面经注册" />
        <!-- 表单 -->
        <!-- @submit可以自动收集表单数据 -->
        <van-form @submit="register">
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
                    type="success"
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

<script>
import userAPI from '@/api/user'
import {showFailToast, showSuccessToast} from "vant";
import router from "@/router";

export default {
    name: "RegisterPage",
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
                    pattern: /^\S{5,10}$/,
                    message: '密码长度为5-10位的非空白字符'
                },
            ],
        }
    },
    methods: {
        async register(formValue) {
            try {
                await userAPI.registerReq(formValue)
                showSuccessToast('注册成功')
                setTimeout(() => router.push({ name: 'login' }), 2000)
            } catch (error) {
                if (error.response.data !== undefined) {
                    showFailToast(error.response.data.message)
                    return
                }

                showFailToast('注册失败')
            }
        },
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
