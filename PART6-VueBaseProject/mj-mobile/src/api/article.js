import axiosInstance from "@/utils/request"

function recommendReq(data) {
    const uri = '/h5/interview/query'
    return axiosInstance.get(uri, {params: data})
}

export default {
    recommendReq,
}
