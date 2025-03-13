# 02-fs模块

- fs模块: 文件系统模块,用于读写文件

## 1. 写入内容

- 注意: 使用绝对路径来指定目标文件位置,因为node中的相对路径是相对于执行`node`命令所处的路径(这和通常意义上后端理解的相对路径不同)

```javascript
const fs = require('fs')

const filePath = '/Users/yanglei/Desktop/frontendStu/PART3-JavaScript/Chapter5-NodeJS/day1/02-fs模块/test.txt'
const content = '这是要写入的内容\n'

function handleErr (err) {
    if (err !== null) {
        console.log(err)
        return
    }

    console.log('写入文件成功')
}

fs.writeFile(filePath, content, handleErr)
```

- `fs.writeFile`方法: 无论目标文件是否存在,都会直接写入内容,如果目标文件不存在,则会创建一个新文件并写入内容,如果目标文件已存在,则会覆盖原有内容

## 2. 追加内容

```javascript
const fs = require('fs')

const filePath = '/Users/yanglei/Desktop/frontendStu/PART3-JavaScript/Chapter5-NodeJS/day1/02-fs模块/test.txt'
const appendContent = '这是追加的内容\n'

if (!fs.existsSync(filePath)) {
    console.log('文件不存在')
    return
}

function handleError(err) {
    if (err !== null) {
        console.log(err)
        return
    }

    console.log('追加内容成功')
}

fs.appendFile(filePath, appendContent, handleError)
```

## 3. 读取内容

```javascript
const fs = require('fs')

const filePath = '/Users/yanglei/Desktop/frontendStu/PART3-JavaScript/Chapter5-NodeJS/day1/02-fs模块/test.txt'

function read (err, data) {
    if (err) {
        console.log('读取文件失败')
        return
    }

    console.log(data.toString()) // data本身是一个Buffer对象,该对象中存储的是文件内容的二进制表示形式,需要转换为字符串
}

fs.readFile(filePath, read) // 读取文件
```

- node.js中遵循**错误优先**规则,即回调函数的第一个参数是错误对象,如果没有错误则为`null`,第二个参数是返回的数据