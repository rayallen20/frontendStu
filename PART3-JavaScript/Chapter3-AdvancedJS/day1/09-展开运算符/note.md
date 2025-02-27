# 09-展开运算符

- 语法: `...arr`
- 功能: 将数组或对象展开成一系列的值
- 展开运算符与剩余参数
  - 展开运算符: 将一个"集合"性质的数据类型打散
  - 剩余参数: 将多个值"收集"为一个数组
- 使用场景: 
  - 求数组最大/最小值
    - `Math.min(...args)`
    - `Math.max(...args)`
  - 合并数组
  - 合并对象

- 合并数组

```javascript
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

function mergeArray(arr1, arr2) {
    return [...arr1, ...arr2]
}
```

- 合并对象

```javascript
let obj1 = {
    username: '张三',
    age: 18
}

let obj2 = {
    gender: 'female',
    age: 20
}

let obj3 = {
    ...obj1,
    ...obj2
}

console.log(obj3)
```