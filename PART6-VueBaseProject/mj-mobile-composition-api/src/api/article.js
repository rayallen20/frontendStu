import axiosInstance from "@/utils/request";

function recommend(params) {
    const uri = '/h5/interview/query'
    const config = {
        params,
    }
    return axiosInstance.get(uri, config)
}

function detail(params) {
    const uri = '/h5/interview/show'
    const config = {
        params,
    }
    return axiosInstance.get(uri, config)
}

function like(id) {
    const uri = '/h5/interview/opt'
    const data = {
        id,
        optType: 1,
    }
    return axiosInstance.post(uri, data)
}

function collect(id) {
    const uri = '/h5/interview/opt'
    const data = {
        id,
        optType: 2,
    }
    return axiosInstance.post(uri, data)
}

function getCollectList(params) {
    const uri = '/h5/interview/opt/list'
    params.optType = 2 // 2表示收藏
    const config = {
        params,
    }
    return axiosInstance.get(uri, config)
}

function getLikeList(params) {
    const uri = '/h5/interview/opt/list'
    params.optType = 1 // 1表示喜欢
    const config = {
        params,
    }
    return axiosInstance.get(uri, config)
}

export default {
    recommend,
    detail,
    like,
    collect,
    getCollectList,
    getLikeList,
}