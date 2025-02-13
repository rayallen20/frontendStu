# 04-遍历对象

```javascript
let pig = {
    username: '佩奇',
    age: 5,
    gender: 'female',
    sing: function (content) {
        console.log(content)
    }
}

for (let key in pig) {
    console.log(key)
    console.log(pig[key])
    console.log('----------------')
}
```

- 遍历对象只能使用`对象[属性名]`的方式访问属性值,因为`key`的类型是`string`,不能直接使用`.`访问属性值