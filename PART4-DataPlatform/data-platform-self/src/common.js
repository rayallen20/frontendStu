import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/css/common.css'
import {Toast} from "bootstrap"
import axios from "axios"

// 全局配置基地址 该配置在其他js文件引入axios包时不会生效
// axios.defaults.baseURL = 'https://hmajax.itheima.net'

// 因此需要创建一个可导出的axios实例
export let axiosInstance = axios.create({
    baseURL: 'https://hmajax.itheima.net'
})

export function showToast(content) {
    const toastEle = document.querySelector('.my-toast')
    const toastObj = new Toast(toastEle)

    const toastBodyEle = toastEle.querySelector('.my-toast .toast-body')
    toastBodyEle.innerText = content

    toastObj.show()
}

export default {
    axiosInstance,
    showToast
}