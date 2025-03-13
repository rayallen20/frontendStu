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