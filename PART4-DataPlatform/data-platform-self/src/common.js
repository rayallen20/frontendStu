import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/css/common.css'
import {Toast} from "bootstrap"
import axios from "axios"

// 全局配置基地址 该配置在其他js文件引入axios包时不会生效
// axios.defaults.baseURL = 'https://hmajax.itheima.net'

// 因此需要创建一个可导出的axios实例
export const axiosInstance = axios.create({
    baseURL: 'https://hmajax.itheima.net'
})

// 设置请求拦截器
axiosInstance.interceptors.request.use(config => {
    config = injectToken(config)
    return injectJsonContentType(config)
}, error => {
    return Promise.reject(error)
})

function injectToken(config) {
    const user = getUser()
    if (user !== null) {
        config.headers['Authorization'] = user.token
    }

    return config
}

function injectJsonContentType(config) {
    config.headers['Content-Type'] = 'application/json'
    return config
}

// 设置响应拦截器
axiosInstance.interceptors.response.use(response => {
    return extractPayload(response)
}, error => {
    if (error.response.status === 401) {
        handleUnAuthorizedError()
        return
    }

    return Promise.reject(error)
})

function extractPayload(response) {
    return response.data.data
}

function handleUnAuthorizedError() {
    showToast('登录过期,请重新登录')
    destroyUser()
    setTimeout(() => location.href = './login.html', 800)
}

export function showToast(content) {
    const toastEle = document.querySelector('.my-toast')
    const toastObj = new Toast(toastEle)

    const toastBodyEle = toastEle.querySelector('.my-toast .toast-body')
    toastBodyEle.innerText = content

    toastObj.show()
}

export function checkUser(username, password) {
    if (username === '') {
        showToast('用户名不能为空')
        return false
    }

    if (password === '') {
        showToast('密码不能为空')
        return false
    }

    if (username.length < 8) {
        showToast('用户名长度不能小于8位')
        return false
    }

    if (username.length > 30) {
        showToast('用户名长度不能大于30位')
        return false
    }

    if (password.length < 6) {
        showToast('密码长度不能小于6位')
        return false
    }

    if (password.length > 30) {
        showToast('密码长度不能大于30位')
        return false
    }

    return true
}

export function storageUser(id, token, username) {
    const user = {
        id,
        token,
        username
    }

    localStorage.setItem('user', JSON.stringify(user))
}

export function getUser() {
    const userStr = localStorage.getItem('user')
    if (userStr === null || userStr === '') {
        return null
    }

    return JSON.parse(userStr)
}

export function renderUser(usernameEle) {
    usernameEle.innerText = getUser().username
}

export function logout() {
    destroyUser()
    showToast('退出成功')
    setTimeout(() => location.href = './login.html', 800)
}

function destroyUser() {
    localStorage.removeItem('user')
}

export default {
    axiosInstance,
    showToast,
    checkUser,
    storageUser,
    getUser,
    renderUser,
    logout,
}