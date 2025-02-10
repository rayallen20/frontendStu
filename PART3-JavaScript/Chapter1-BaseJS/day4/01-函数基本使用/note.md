# 01-函数基本使用

- **JS中function也是一种数据类型**
- JS无法像PHP7.4那样,直接在函数参数上写类型,TS可以
- **JS中,实参和形参的数量可以不一致**
    - 形参过多(就是调用的时候参数写少了),则多余的形参为undefined
    - 实参过多(就是调用的时候参数写多了),则多余的实参会被忽略

## 1. 计算两数之和

JSDoc基本书写:

```javascript
/**
 * 本函数用于计算两数之和
 * @param {number} a 第一个数
 * @param {number} b 第二个数
 * @returns {number} 两数之和
 * @throws {Error} a和b必须是数字
 * @example
 * sum(1, 2) // 3
 * */
function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('a和b必须是数字')
    }
    
    return a + b
}
```

## 2. 针对自定义类型的JSDoc

```javascript
/**
 * 本类用于指代用户实体
 * */
class User {
    /**
     * 本方法用于创建一个用户实例
     * @param {string} name 用户名
     * @param {number} age 年龄
     * */
    constructor(name, age) {
        /** @type {string} 用户姓名 */
        this.name = name
        
        /** @type {number} 用户年龄 */
        this.age = age
    }
    
    /**
     * 本方法用于返回用户姓名
     * @return {string} 用户姓名
     * */
    getName() {
        return this.name
    }
    
    /**
     * 本方法用于返回用户年龄
     * @return {number} 用户年龄
     * */
    getAge() {
        return this.age
    }
    
    /**
     * 本方法用于设定用户年龄
     * @param {number} newAge 新年龄
     * @throws {Error} 年龄必须是数字
     * @throws {Error} 年龄不能小于0
     * @return {void}
     * */
    setAge(newAge) {
        if (typeof newAge !== 'number') {
            throw new Error('年龄必须是数字')
        }
        
        if (newAge < 0) {
            throw new Error('年龄不能小于0')
        }
        
        this.age = newAge
    }
}
```

## 3. 计算1到100的累加和

```javascript
/**
 * 本方法用于计算从start到end的累加和
 * @param {number} start - 起始值 默认为1
 * @param {number} end - 结束值 默认为100
 * @throws {Error} - 参数类型错误
 * @throws {Error} - 起始值不能大于结束值
 * @returns {number} - 返回累加和
 * @example
 * accumulate(1, 100) // 5050
 * */
function accumulate(start = 1, end = 100) {
    if (typeof start !== 'number' || typeof end !== 'number') {
        throw new Error('参数类型错误')
    }
    
    if (start > end) {
        throw new Error('起始值不能大于结束值')
    }
    
    let sum = 0
    
    for (let i = start; i <= end ; i++) {
        sum += i
    }
    
    return sum
}
```

## 4. 默认参数问题

- 默认参数仅在**实参缺失或实参值为`undefined`时**生效

## 5. 求数组中的元素和

- 针对Array的JSDoc写法

```javascript
/**
 * 本函数用于求一个数组中所有元素的和
 * @param {Array<number>} nums 元素为number类型的数组
 * @throws {Error} 如果nums不是数组,则抛出错误
 * @throws {Error} 如果nums中有元素不是number类型,则抛出错误
 * @returns {number} 返回数组中所有元素的和
 * @example
 * sum([1, 2, 3, 4, 5]) // 15
 * */
function sum(nums) {
  if (!Array.isArray(nums)) {
    throw new Error('参数类型必须为数组')
  }

  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] !== 'number') {
      throw new Error('数组元素必须为数字')
    }
    sum += nums[i]
  }

  return sum
}
```

## 6. 函数返回值

- 函数没有返回值时,返回`undefined`

## 7. 求数组中的最大值和最小值

```javascript
/**
 * 本函数用于求一个数组中的最大值
 * @params {Array<number>} nums 元素为number类型的数组
 * @throws {Error} 如果nums不是数组,则抛出错误
 * @throws {Error} 如果nums为空数组,则抛出错误
 * @throws {Error} 如果nums中有元素不是number类型,则抛出错误
 * @returns {number} 返回数组中的最大值
 * */
function max(nums) {
    if (!Array.isArray(nums)) {
        throw new Error('参数类型必须为数组')
    }
    
    if (nums.length === 0) {
        throw new Error('数组不能为空')
    }
    
    let max = nums[0]
    
    if (nums.length === 1) {
        return max
    }
    
    for (let i = 1; i < nums.length; i++) {
        if (typeof nums[i] !== 'number') {
            throw new Error('数组元素必须为数字')
        }
        
        if (nums[i] > max) {
            max = nums[i]
        }
    }
    
    return max
}
```

```javascript
/**
 * 本函数用于求一个数组中的最小值
 * @params {Array<number>} nums 元素为number类型的数组
 * @throws {Error} 如果nums不是数组,则抛出错误
 * @throws {Error} 如果nums为空数组,则抛出错误
 * @throws {Error} 如果nums中有元素不是number类型,则抛出错误
 * @returns {number} 返回数组中的最小值
 * */
function min(nums) {
    if (!Array.isArray(nums)) {
        throw new Error('参数类型必须为数组')
    }
    
    if (nums.length === 0) {
        throw new Error('数组不能为空')
    }
    
    let min = nums[0]
    
    if (nums.length === 1) {
        return min
    }
    
    for (let i = 1; i < nums.length; i++) {
        if (typeof nums[i] !== 'number') {
            throw new Error('数组元素必须为数字')
        }
        
        if (nums[i] < min) {
            min = nums[i]
        }
    }
    
    return min
    
}
```

## 8. 判断数组中是否存在某个元素

- 参数类型为任意类型的JSDoc写法

```javascript
/**
 * 本函数用于判断数组中是否存在某个元素
 * @param {Array} arr 要判断的数组
 * @param {any} target 要判断的元素
 * @throws {Error} arr必须是一个数组
 * @returns {boolean} 如果存在则返回true，否则返回false
 * */
function exist(arr, target) {
    if (!Array.isArray(arr)) {
        throw new Error('arr必须是一个数组')
    }
    
    let flag = false
    
    if (arr.length === 0) {
        return flag
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            flag = true
            break
        }
    }
    
    return flag
}
```

## 9. 查找元素在数组中的索引

```javascript
/**
 * 本函数用于查找元素在数组中的索引
 * @param {Array} arr 要查找的数组
 * @param {any} target 要查找的元素
 * @throws {Error} 如果第一个参数不是数组,则抛出错误
 * @returns {number} 返回元素在数组中的索引，如果没有找到则返回-1
 * */
function index(arr, target) {
    if (!Array.isArray(arr)) {
        throw new Error('第一个参数必须是数组')
    }
    
    let index = -1
    
    if (arr.length === 0) {
        return index
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            index = i
            break
        }
    }
    
    return index
}
```