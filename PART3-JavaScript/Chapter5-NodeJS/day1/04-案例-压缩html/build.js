const fs = require('fs')
const path = require('path')

const sourceFilePath = path.join(__dirname, '/public/index.html')

// 这里由于无法预估目标文件大小 所以使用同步读取
const sourceContent = fs.readFileSync(sourceFilePath, 'utf8')

const targetContent = sourceContent.replace(/[\r\n\t]/g, '')

const targetFilePath = path.join(__dirname, '/dist/index.html')
fs.writeFileSync(targetFilePath, targetContent, 'utf8')