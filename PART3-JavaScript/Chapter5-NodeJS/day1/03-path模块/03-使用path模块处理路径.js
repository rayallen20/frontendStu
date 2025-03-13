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