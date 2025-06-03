import axiosInstance from "@/utils/request";

function getList() {
    const uri = '/list'
    return axiosInstance.get(uri)
}

function patchItem(item) {
    const uri = `/list/${item.id}`
    return axiosInstance.patch(uri, {count: item.count})
}

export default {
    getList,
    patchItem,
}