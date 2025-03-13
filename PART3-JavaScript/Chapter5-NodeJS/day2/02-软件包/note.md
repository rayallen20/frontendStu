# 02-软件包

## 1. 包的概念

- 项目包: 自己写的代码
- 软件包: 别人写的代码
- 要求: 根目录下有一个`package.json`文件,该文件记录了软件包的信息

```json
{
  "name": "my_utils",
  "version": "1.0.0",
  "description": "软件包描述",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": {
    "name": "作者"
  },
  "license": "MIT"
}
```

- `name`: 包名
- `version`: 版本号
- `description`: 描述
- `main`: 入口文件.当导入该软件包时,默认导入的文件.该文件用于导出软件包的内容
- `scripts`: 脚本.可以通过`npm run 脚本名`执行
- `author`: 作者
- `license`: 许可证

## 2. 实现一个软件包

### 2.1 需求

- 封装数组求和函数的模块,判断用户名和密码长度函数的模块,形成成一个软件包

### 2.2 实现

#### step1. 定义软件包

```
tree ./
./
├── index.js
├── lib
│         ├── arr.js
│         └── str.js
└── package.json

1 directory, 4 files
```

- `lib/arr.js`:

```javascript
function getSum(arr) {
    return arr.reduce((pre, cur) => pre + cur, 0)
}

export default {
    getSum
}
```

- `lib/str.js`:

```javascript
function checkLength(str) {
    return str.length > 5
}

export default {
    checkLength
}
```

- `index.js`:

```javascript
import arr from './lib/arr.js'
import str from './lib/str.js'

export default {
    arr,
    str
}
```

- 注意: 
  - 该软件包的入口文件是`index.js`,该文件导出了`arr`和`str`两个模块
  - 该文件中的`arr`和`str`其实是对象,因为`arr.js`和`str.js`中使用的是默认导出的方式
  - 该文件导出的也是一个对象,因为该文件使用的也是默认导出的方式

- `package.json`:

```json
{
  "name": "myutils",
  "version": "1.0.0",
  "description": "本包用于数组求和以及判断用户名密码长度",
  "main": "index.js",
  "author": "roach",
  "license": "MIT",
  "type": "module"
}
```

#### step2. 安装软件包

- 创建`package.json`文件:

```json
{
  "type": "module"
}

```

- 安装软件包: `npm install ./myUtils`
- 安装完成后,会:
  - 多一个`node_modules`文件夹,里面存放了软件包
  - 多一个`package-lock.json`文件,记录了软件包的依赖关系
  - `package.json`文件中多了一个`dependencies`字段,记录了软件包的依赖关系

```
tree ./
./
├── myUtils
│         ├── index.js
│         ├── lib
│         │         ├── arr.js
│         │         └── str.js
│         └── package.json
├── node_modules
│         └── myutils -> ../myUtils
├── package-lock.json
├── package.json
└── server.js

4 directories, 7 files
```

#### step3. 使用软件包

- `server.js`:

```javascript
import myUtils from 'myUtils'

console.log(myUtils.arr.getSum([1, 2, 3, 4, 5]))
console.log(myUtils.str.checkLength('hello'))
```