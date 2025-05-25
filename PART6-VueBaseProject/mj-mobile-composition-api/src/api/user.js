import axiosInstance from "@/utils/request"

function register(data) {
    const uri = '/h5/user/register'
    return axiosInstance.post(uri, data)
}

function login(data) {
    const uri = '/h5/user/login'
    return axiosInstance.post(uri, data)
}

function getUser() {
    const uri = '/h5/user/currentUser'
    return axiosInstance.get(uri)
}

function logout() {
    const uri = '/h5/user/logout'
    return axiosInstance.get(uri)
}

export default {
    register,
    login,
    getUser,
    logout
}