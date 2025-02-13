# 03-对象操作-[]形式

- 属性名中如果包含`-`,则`对象.属性`的方式无法访问,只能使用`对象['属性']`的方式访问

```javascript
let pig = {
    'user-name': '小猪佩奇',
    age: 4
}

console.log(pig.user-name)  // NaN
```

值为`NaN`是因为解释器把`-`解释为减号,即`pig.user - name`了

```javascript
let pig = {
    'user-name': '小猪佩奇',
    age: 4
}

console.log(pig.user-name)  // NaN
console.log(pig['user-name'])  // 小猪佩奇
```