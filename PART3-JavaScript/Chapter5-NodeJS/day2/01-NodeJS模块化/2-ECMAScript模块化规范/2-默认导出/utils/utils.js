const baseURL = 'http://hmajax.itheima.net'

function getSum(arr) {
    return arr.reduce((pre, cur) => pre + cur, 0)
}

// 默认导出 导出的是一个对象
export default {
    baseURL,
    getSum
}