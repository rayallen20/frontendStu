// 和用户相关的请求
import axiosInstance from "@/utils/request"

function registerReq(data) {
    const uri = '/h5/user/register'
    return axiosInstance.post(uri, data)
}

function loginReq(data) {
    const uri = '/h5/user/login'
    return axiosInstance.post(uri, data)
}

function userReq() {
    const uri = '/h5/user/currentUser'
    return axiosInstance.get(uri)
}

function logoutReq() {
    const uri = '/h5/user/logout'
    return axiosInstance.get(uri)
}

export default {
    registerReq,
    loginReq,
    userReq,
    logoutReq,
}
