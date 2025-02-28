# 07-Array实例的常用方法

- `forEach()`
- `filter()`
- `map()`: 返回按照回调函数处理后的新数组
- `reduce()`: 返回累计处理的结果,通常用于求和
- `join(separator)`: 将数组元素拼接字符串,并用`separator`作为连接符
- `find()`: 返回第一个符合条件的元素,找不到返回`undefined`
- `every()`: 判断数组中所有元素是否符合条件,都符合返回`true`,否则返回`false`
- `some()`: 判断数组中是否有元素符合条件,只要有元素符合则返回`true`,否则返回`false`
- `concat()`: 合并2个数组,返回新数组
- `sort()`: 对原数组排序
- `splice()`: 删除元素,并返回删除的元素
- `reverse()`: 反转数组
- `findIndex()`: 返回第一个符合条件的元素的索引,找不到返回`-1`

## 1. `reduce()`方法

- `reduce()`: 返回累计处理的结果,通常用于求和
    - `arr.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)`
        - `accumulator`: 累计器,初始值为`initialValue`,如果没有传入`initialValue`,则默认为数组的第一个元素
            - `accumulator`的值是上一次调用回调函数时返回的值
        - `currentValue`: 当前值
            - 没有传入`initialValue`时,第一次调用回调函数时,`currentValue`为数组的第二个元素
        - `currentIndex`: 当前索引
        - `array`: 数组本身
        - `initialValue`: 初始值

```javascript
  const arr = [1, 2, 3, 4, 5]

let sum = arr.reduce((accumulator, item) => accumulator + item , 0)
console.log(sum) // 15
```

## 2. `find()`方法

- `find()`: 返回第一个符合条件的元素,找不到返回`undefined`
    - `arr.find(callback(element, index, array))`
        - `element`: 当前元素
        - `index`: 当前索引
        - `array`: 数组本身

```javascript
const arr = [1, 2, 3, 4, 5]

let firstCompliantEle = arr.find( ele => ele > 3 )
console.log(firstCompliantEle) // 4
```

## 3. `every()`方法

- `every()`: 判断数组中所有元素是否符合条件,都符合返回`true`,否则返回`false`
    - `arr.every(callback(element, index, array))`
        - `element`: 当前元素
        - `index`: 当前索引
        - `array`: 数组本身

```javascript
const arr1 = [1, 2, 3, 4, 5]

let isAllCompliant = arr1.every(item => item > 3)
console.log(isAllCompliant) // false

const arr2 = [4, 5, 6, 7, 8]
isAllCompliant = arr2.every(item => item > 3)
console.log(isAllCompliant) // true
```

## 4. `some()`方法

- `some()`: 判断数组中是否有元素符合条件,只要有元素符合则返回`true`,否则返回`false`
    - `arr.some(callback(element, index, array))`
        - `element`: 当前元素
        - `index`: 当前索引
        - `array`: 数组本身

```javascript
const arr1 = [1, 2, 3, 4, 5]

let hasCompliant = arr1.some(item => item > 3)
console.log(hasCompliant) // true

const arr2 = [5, 6, 7, 8, 9]
hasCompliant = arr2.some(item => item > 10)
console.log(hasCompliant) // false
```

## 5. `sort()`方法

- `sort()`: 对原数组排序
  - `arr.sort(compareFunction)`
    - `compareFunction`: 比较函数,可选
      - 如果不传入`compareFunction`,则按照Unicode码点进行排序
      - `compareFunction(a, b)`: 
        - 返回值小于0,则`a`排在`b`前面
        - 返回值大于0,则`b`排在`a`前面
        - 返回值等于0,则`a`和`b`位置不变

### 5.1 升序排序

```javascript
const arr = [1, 4, 3, 5, 2]

// 升序排序
arr.sort((prev, next) => prev - next)
console.log(arr)
```

### 5.2 降序排序

```javascript
const arr = [1, 4, 3, 5, 2]

// 降序排序
arr.sort((prev, next) => next - prev)
console.log(arr)
```

## 6. `findIndex()`方法

- `findIndex()`: 返回第一个符合条件的元素的索引,找不到返回`-1`
    - `arr.findIndex(callback(element, index, array))`
        - `element`: 当前元素
        - `index`: 当前索引
        - `array`: 数组本身

```javascript
const arr = [1, 4, 3, 5, 2]

let firstCompliantIndex = arr.findIndex(item => item > 3)
console.log(firstCompliantIndex) // 1
```