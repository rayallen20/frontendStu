# 15-对象解构

- 对象解构: 将对象中的属性取出,赋值给其他变量
- 注意: 
  - 变量名要和对象的属性名一致,否则变量值为undefined
  - 对象解构时,赋值与变量顺序无关
  - 一旦某个变量之前被声明过,那么解构时再声明,就会报错

```javascript
const user = {
    username: '张三',
    age: 18,
    gender: 'female'
}

const {username, age, gender} = user    // 注意: 这里的变量名要和对象的属性名一致
console.log(username, age, gender)  // 张三 18 female

const {a, b, c} = user
console.log(a, b, c) // undefined undefined undefined

const logObj = {
    date: '2020-01-01',
    content: 'some log content',
    app: 'Nginx'
}

const {app, content, date} = logObj    // 对象解构时,赋值与变量顺序无关
console.log(app, content, date) // Nginx some log content 2020-01-01
```