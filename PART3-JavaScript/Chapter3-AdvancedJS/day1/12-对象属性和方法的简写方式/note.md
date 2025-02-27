# 12-对象属性和方法的简写方式

- 在对象中:
  - 若属性名和变量名一致,可简写为属性名
  - 方法可以简写,不用写function关键字

```javascript
let username = '张三'
let age = 18

const obj1 = {
    username,
    age,
    say: function (content) {
        console.log(content)
    }
}

const obj2 = {
    username,
    age,
    say(content) {
        console.log(content)
    }
}
```