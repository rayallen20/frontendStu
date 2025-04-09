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

export default {
    registerReq,
    loginReq,
}
