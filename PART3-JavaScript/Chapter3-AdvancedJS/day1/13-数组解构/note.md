# 13-数组解构

- 解构赋值: 将数组中的元素或对象中的属性提取出来,赋值给变量
- 解构: 就是把一个事物的结构进行拆解

## 1. 基本使用

```javascript
const arr = [100, 60, 80]

const [max, min, avg] = arr
console.log(max, min, avg)
```

## 2. 应用: 交换2个变量的值

```javascript
let a = 1
let b = 3;  // 注意这里必须有;
[a, b] = [b, a]
console.log(a, b)
```

## 3. JS中必须加`;`的场景

- 立即执行函数

```javascript
let a = 3;  // 这里必须加; 否则会报错

(function () {
    console.log("hello")
})()
```

- 解构赋值时,`=`左侧是数组或对象时,必须加`;`

- 结论: `(`或`[`开头的语句前面必须加`;`