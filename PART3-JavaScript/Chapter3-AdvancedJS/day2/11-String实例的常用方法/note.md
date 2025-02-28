# 11-String实例的常用方法

- `length()`: 返回字符串的长度
- `spilt(separator, limit)`: 将字符串分割成数组
- `substring(start, end)`: 返回一个新的字符串，包含`[start, end)`的字符串
- `startsWith(searchString, position)`: 判断字符串是否以`searchString`开头
- `endsWith(searchString, position)`: 判断字符串是否以`searchString`结尾
- `includes(searchString, position)`: 判断字符串是否包含`searchString`
- `trim()`: 去除字符串两端的空格
- `toUpperCase()`: 将字符串转换为大写
- `toLowerCase()`: 将字符串转换为小写
- `indexOf(searchValue, fromIndex)`: 返回`searchValue`在字符串中的位置，从`fromIndex`开始查找
- `replace(regexp|substr, newSubStr|function)`: 替换字符串
- `match(regexp)`: 返回匹配的字符串

## 1. `spilt()`方法

- `split(separator, limit)`: 将字符串分割成数组
  - `limit`: 限制返回的数组的长度

```javascript
const str = 'Hello World'
const strArr = str.split('')
console.log(strArr) // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

const strArr2 = str.split('', 3)
console.log(strArr2) // ["H", "e", "l"]
```

## 2. `substring()`方法

```javascript
const str = 'Hello World'
const helloStr = str.substring(0, 5)
console.log(helloStr) // Hello
```

## 3. `startsWith()`方法

```javascript
const str = 'Hello World'
console.log(str.startsWith('H')) // true
console.log(str.startsWith('H', 1)) // false
```

