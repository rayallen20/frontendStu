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