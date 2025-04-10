import axiosInstance from "@/utils/request"

function recommendReq(params) {
    const uri = '/h5/interview/query'
    return axiosInstance.get(uri, {params})
}

function detailReq(params) {
    const uri = '/h5/interview/show'
    return axiosInstance.get(uri, {params})
}

function optReq(data) {
    const uri = '/h5/interview/opt'
    return axiosInstance.post(uri, data)
}

function listReq(params) {
    const uri = '/h5/interview/opt/list'
    return axiosInstance.get(uri, {params})
}

export default {
    recommendReq,
    detailReq,
    optReq,
    listReq,
}
