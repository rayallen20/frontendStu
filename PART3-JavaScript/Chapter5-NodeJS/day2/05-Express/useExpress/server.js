const express = require('express')
const cors = require('cors')

const provinceController = require('./controller/province.js')

const allowOrigin = ['http://127.0.0.1:63342', 'http://localhost:63342']
const corsConfig = {
    origin: checkOrigin
}

const server = express()
server.use(cors(corsConfig))
const port = 4060

function checkOrigin(origin, callback) {
    // 同源请求时 请求头中不包含 Origin 字段 因此此时origin字段值为null或undefined
    if (origin === null || origin === undefined || allowOrigin.indexOf(origin) !== -1) {
        callback(null, true)
        return
    }

    // 拒绝跨域
    callback(new Error('Not allowed by CORS'))
}

server.get('/',(req,res)=>{
    res.send('Welcome')
})
server.get('/api/province', (req, res) => {
    const respBody = provinceController.getProvince()
    res.setHeader('Content-Type', 'application/json')
    res.send(respBody)
})

server.use(express.static('public'))

server.all('*',(req,res)=>{
    res.status(404)
    res.send('Not Found')
})

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})