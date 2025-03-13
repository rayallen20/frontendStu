# 03-path模块

- `__dirname`: 内置变量(类似于PHP中的`__DIR__`), 用于获取当前文件所在的目录的绝对路径(不包含当前文件名)
- `path.join()`: 使用特定于平台的分隔符将所有给定的路径段连接在一起, 并规范化生成的路径

```javascript
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'test.txt')   // 后续的路径中可以直接无视平台使用`../`,因为该方法会自动处理路径分隔符

function read (err, data) {
    if (err) {
        console.log('读取文件失败')
        return
    }

    console.log(data.toString())
}

fs.readFile(filePath, read)
```