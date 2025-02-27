# 18-多级对象解构

```javascript
const user = {
    username: '张三',
    family: {
        father: '张二',
        mother: '李四'
    },
    age: 18,
    gender: 'male'
}

const {username, family: {father, mother}, age, gender} = user

console.log(username, father, mother, age, gender) // 张三 张二 李四 18 male
```