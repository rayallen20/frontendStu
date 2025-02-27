# 10-箭头函数的基本使用

- 箭头函数更适用于那些本来需要匿名函数的地方,写法更简单

## 1. 基本语法

```javascript
const fn = () => {
    console.log('箭头函数')
}

fn()
```

## 2. 省略`()`

- 当箭头函数只有1个参数时,可以省略形参的`()`

```javascript
const fn = x => {
    let added = 5
    return x + added
}

console.log(fn(2))
```

## 3. 省略`{}`

- 当箭头函数只有1条语句时,可以省略`{}`,且这条语句就是函数的返回值

```javascript
const fn = x => x + 5

console.log(fn(2))
```

## 4. 返回对象

- 使用条件:
  - 箭头函数只有1条语句
  - 箭头函数返回的是一个对象

```javascript
const fn = (name, age) => ({ name: name, age: age })

console.log(fn('张三', 20))
```

## 5. 剩余参数

- 箭头函数中没有`arguments`对象,可以使用剩余参数

```javascript
const sum = (...args) => {
    let result = 0
    
    for (let i = 0; i < args.length; i++) {
        result += args[i]
    }
    
    return result
}

console.log(sum(1, 2, 3))
```