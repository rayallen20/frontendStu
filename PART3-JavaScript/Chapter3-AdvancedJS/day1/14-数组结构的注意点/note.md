# 14-数组结构的注意点

## 1. 变量多值少

- 多出来的变量会被赋值为`undefined`

```javascript
const pc = ['联想', 'IBM', '苹果', '小米']
const [a, b, c, d, e] = pc
console.log(a, b, c, d, e) // 联想 IBM 苹果 小米 undefined
```

- 为避免出现`undefined`，可以使用默认值
  - 若变量没有对应的值,则使用默认值
  - 反之,则使用对应的值

```javascript
const pc = ['联想', 'IBM', '苹果', '小米']
const [a, b, c, d = '索尼', e = '三星'] = pc
console.log(a, b, c, d, e) // 联想 IBM 苹果 小米 三星
```

## 2. 值多变量少

- 多出来的值会被忽略

```javascript
const pc = ['联想', 'IBM', '苹果', '小米']
const [a, b, c] = pc
console.log(a, b, c) // 联想 IBM 苹果
```

- 使用剩余参数获取多余的值

```javascript
const pc = ['联想', 'IBM', '苹果', '小米']
const [a, b, ...other] = pc
console.log(a, b, other) // 联想 IBM ['苹果', '小米']
```

## 3. 按需赋值

```javascript
const pc = ['联想', 'IBM', '苹果', '小米']
const [, a, b] = pc
console.log(a, b) // IBM 苹果

const [c, ,d] = pc
console.log(c, d) // 联想 苹果
```

## 4. 多维数组的解构

```javascript
const pc = ['联想', 'IBM', '苹果', ['小米', 'SONY', '松下']]
const [a, b, c, [d, e, f]] = pc
console.log(a, b, c, d, e, f) // 联想 IBM 苹果 小米 SONY 松下
```