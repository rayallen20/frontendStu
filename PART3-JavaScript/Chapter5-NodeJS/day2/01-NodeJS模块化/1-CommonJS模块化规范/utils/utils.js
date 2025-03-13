const baseURL = 'http://hmajax.itheima.net'

function getSum(arr) {
    return arr.reduce((pre, cur) => pre + cur, 0)
}

// module.exports导出的是一个对象
module.exports = {
    baseURL,
    getSum
}

// 二者等效
// exports.baseURL = baseURL
// exports.getSum = getSum