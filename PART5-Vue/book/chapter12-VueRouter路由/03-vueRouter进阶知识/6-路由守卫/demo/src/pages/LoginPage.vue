<template>
    <div class="login-page">
        <button @click="login">登录</button>
    </div>
</template>

<script>
import {useRouter} from "vue-router";

export default {
    name: 'LoginPage',
    setup() {
        const router = useRouter()
        const login = () => {
            sessionStorage.setItem('token', 'why')
            router.push({
                name: 'home',
            })
        }

        return {
            login
        }
    }
}
</script>