const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()
const port = 4060

server.on('request', fetchRequest)

function fetchRequest(req, res) {
    const url = req.url
    res.setHeader('Content-Type', 'application/json')

    if (url === '/api/province') {
        getProvince(req, res)
        return
    }

    const obj = {
        code: 404,
        message: 'not found',
        data: {}
    }
    res.write(JSON.stringify(obj))
    res.end()
}

function getProvince(req, res) {
    const filePath = path.join(__dirname, 'data', 'province.json')
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err !== null) {
            res.statusCode = 500
            const obj = {
                code: 500,
                msg: err.toString(),
                data: {}
            }

            res.write(JSON.stringify(obj))
            res.end()
            return
        }

        const obj = {
            code: 200,
            message: 'success',
            data: JSON.parse(data),
        }
        res.write(JSON.stringify(obj))
        res.end()
    })
}

server.listen(port, () => {
    console.log(`服务器启动成功，可以通过 http://localhost:${port} 访问`)
})