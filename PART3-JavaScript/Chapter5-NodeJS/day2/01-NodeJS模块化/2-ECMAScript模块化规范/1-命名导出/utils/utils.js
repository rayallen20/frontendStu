export const baseURL = 'http://hmajax.itheima.net'

export function getSum(arr) {
    return arr.reduce((pre, cur) => pre + cur, 0)
}

// 二者等价 被注释的代码相当于是统一导出 未被注释的代码相当于是命名导出
// const baseURL = 'http://hmajax.itheima.net'
//
// function getSum(arr) {
//     return arr.reduce((pre, cur) => pre + cur, 0)
// }
//
// export {
//     baseURL,
//     getSum
// }