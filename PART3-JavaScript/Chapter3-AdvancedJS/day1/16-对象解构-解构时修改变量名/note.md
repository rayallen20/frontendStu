# 16-对象解构-解构时修改变量名

## 1. 同名变量导致解构失败

```javascript
let username = '张三'

const user = {
    username: '李四',
    age: 18,
    gender: 'male'
}

let {username, age, gender} = user
console.log(username, age, gender) // Uncaught SyntaxError: Identifier 'username' has already been declared
```

## 2. 16-对象解构-解构时修改变量名-解构时修改变量名

```javascript
let username = '张三'

const user = {
    username: '李四',
    age: 18,
    gender: 'male'
}

let {username: newName, age, gender} = user
console.log(newName, age, gender) // 李四 18 male
console.log(username) // 张三
```