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