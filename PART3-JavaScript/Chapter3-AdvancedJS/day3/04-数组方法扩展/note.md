# 04-数组方法扩展

## 1. 需求

- 给数组扩展求最大值方法和求和方法

```javascript
Array.prototype.max = function () {
    return Math.max(...this)
}

Array.prototype.sum = function () {
    return this.reduce((accumulate, item) => accumulate + item, 0)
}

let arr = [1, 2, 3, 4, 5]
console.log(arr.max())
console.log(arr.sum())
```