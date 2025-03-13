# 01-NodeJS模块化

- `CommonJS`语法规范: 为Node.js打包JS代码提供了规范.Node.js**默认遵循**(也可以遵循其他规范)`CommonJS`规范, 通过`require`引入模块,通过`module.exports`导出模块
  - `require`: 引入模块,内置的模块写模块名即可;自定义模块需要写路径
  - `module.exports{...}`: 导出的是一个对象,该对象中包含了需要导出的内容(变量/函数等)
- 在Node.js中,每个文件都被视为一个单独的模块

## 1. CommonJS模块化规范

## 1.1 需求

- 需求: 
  - 定义`utils.js`模块,该模块需封装基地址和一个用于求数组总和的函数
  - 在`index.js`中引入`utils.js`模块,并使用模块中的函数

## 1.2 实现

```
tree ./
./
├── index.js
└── utils
    └── utils.js

1 directory, 2 files
```

- `utils/utils.js`:

```javascript
const baseURL = 'http://hmajax.itheima.net'

function getSum(arr) {
    return arr.reduce((pre, cur) => pre + cur, 0)
}

// module.exports导出的是一个对象
module.exports = {
    baseURL,
    getSum
}

// 二者等效
// exports.baseURL = baseURL
// exports.getSum = getSum
```

- `index.js`:

```javascript
const utils = require('./utils/utils')

console.log(utils.baseURL)

const arr = [1, 2, 3]
const sum = utils.getSum(arr)
console.log(sum)
```

## 2. ECMAScript模块化规范

- 前置条件: 需要在工程根目录下创建`package.json`文件,并在其中添加`"type": "module"`字段,表示该工程使用的是ECMAScript模块化规范

```json
{
  "type": "module"
}
```

- 导出: 使用`export`关键字导出模块中的内容,也可以使用`export default {}`的方式导出默认内容(这种方式导出的内容在导入时可以自定义名称)
- 导入: 使用`import`关键字导入模块中的内容

### 2.1 命名导出

```
tree ./
./
├── index.js
├── package.json
└── utils
    └── utils.js

1 directory, 3 files
```

- `utils/utils.js`:

```javascript
export const baseURL = 'http://hmajax.itheima.net'

export function getSum(arr) {
    return arr.reduce((pre, cur) => pre + cur, 0)
}

// 二者等价 被注释的代码相当于是统一导出 未被注释的代码相当于是命名导出
// const baseURL = 'http://hmajax.itheima.net'
//
// function getSum(arr) {
//     return arr.reduce((pre, cur) => pre + cur, 0)
// }
//
// export {
//     baseURL,
//     getSum
// }
```

- `index.js`:

```javascript
// 命名导出需要在导入时使用解构赋值
import {baseURL, getSum} from "./utils/utils.js"

console.log(baseURL)

console.log(getSum([1, 2, 3, 4, 5]))
```

- 命名导出的特点:
  - 1个模块可以导出多个命名内容(变量/函数/类等)
  - 导出时需要明确指定名称
  - 导入时需要解构或按名称引用

- 命名导出的优点:
  - 可以导出多个内容,适合模块中有多个独立功能的情况
  - 导入时可以按需选择,减少不必要的代码加载

- 命名导出的缺点:
  - 导入时需要明确知道导出的名称,否则无法解构

### 2.2 默认导出

```
tree ./
./
├── index.js
├── package.json
└── utils
    └── utils.js

1 directory, 3 files
```

- `utils/utils.js`:

```javascript
const baseURL = 'http://hmajax.itheima.net'

function getSum(arr) {
    return arr.reduce((pre, cur) => pre + cur, 0)
}

// 默认导出 导出的是一个对象
export default {
    baseURL,
    getSum
}
```

- `index.js`:

```javascript
// 导入时可以指定导入的模块名
import utilsModule from './utils/utils.js'

console.log(utilsModule.baseURL)

console.log(utilsModule.getSum([1, 2, 3, 4, 5]))
```

- 默认导出的特点:
  - 1个模块只能有1个默认导出
  - 导出时不需要指定名称
  - 导入时可以自定义名称(只是本例中没有自定义)

- 默认导出的优点:
  - 导入时可以自定义名称,不需要知道导出的名称
  - 适合模块的主要功能或单一功能导出

- 默认导出的缺点:
  - 1个模块只能有1个默认导出
  - 如果模块需要导出多个内容,则需要将它们包装成一个对象或类

### 2.3 如何选择

- 如果需要**按需加载**,则使用**命名导出**
- 如果需要**全部加载**,则使用**默认导出**
- 二者可以混用