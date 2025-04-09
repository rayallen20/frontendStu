import axios from 'axios'
import {showFailToast} from "vant";
import router from "@/router";

const baseURL = 'http://interview-api-t.itheima.net'
const timeout = 5000
const options = {
    baseURL,
    timeout,
}
const axiosInstance = axios.create(options)

// 请求拦截器
axiosInstance.interceptors.request.use((config) => {
    const token = getToken()
    if (token !== '') {
        config.headers['Authorization'] = 'Bearer ' + token
    }

    return config
})

function getToken() {
    const token = localStorage.getItem('token')
    if (token !== null) {
        return token
    }

    return ''
}

// 响应拦截器
axiosInstance.interceptors.response.use(response => {
    return extractPayload(response)
}, error => {
    if (error.response.status === 401) {
        showFailToast('登录已失效, 请重新登录')
        setTimeout(() => redirectToLogin(),3000)
    }

    return Promise.reject(error)
})

function extractPayload(response) {
    if (response.data.data !== undefined) {
        return response.data.data
    }

    return response.data
}

function redirectToLogin() {
    try {
        return router.push({'name': 'login'})
    } catch (error) {
        console.error(error)
    }
}

export default axiosInstance
