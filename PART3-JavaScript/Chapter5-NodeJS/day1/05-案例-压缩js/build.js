const fs = require('fs')
const path = require('path')

// 读取并压缩html文件
const sourceHtmlFilePath = path.join(__dirname, '/public/index.html')
// 这里由于无法预估目标文件大小 所以使用同步读取
const sourceHtmlContent = fs.readFileSync(sourceHtmlFilePath, 'utf8')
let targetHtmlContent = sourceHtmlContent.replace(/[\r\n\t]/g, '')

// 读取并压缩js文件
const sourceJsFilePath = path.join(__dirname, '/public/index.js')
const sourceJsContent = fs.readFileSync(sourceJsFilePath, 'utf8')
let targetJsContent = sourceJsContent.replace(/[\r\n\t]/g, '')
targetJsContent = targetJsContent.replace(/console.log\('.+?'\)/g, '')
targetJsContent = `<script>${targetJsContent}</script>`

// 拼接html和js
targetHtmlContent += targetJsContent

const targetFilePath = path.join(__dirname, '/dist/index.html')
fs.writeFileSync(targetFilePath, targetHtmlContent, 'utf8')