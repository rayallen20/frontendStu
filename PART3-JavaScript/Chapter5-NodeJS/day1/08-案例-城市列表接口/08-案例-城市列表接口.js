const http = require('http')
const fs = require('fs')
const path = require('path')
const querystring = require('querystring')

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

    if (url.startsWith('/api/city')) {
        getCity(req, res)
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

function getCity(req, res) {
    const url = req.url
    const query = url.split('?')[1]
    const queryObj = querystring.parse(query)

    const province = queryObj.pname

    if (province === null || province === undefined || province.length === 0) {
        const obj = {
            code: 400,
            message: 'province is required',
            data: {}
        }
        res.write(JSON.stringify(obj))
        res.end()
        return
    }

    const filePath = path.join(__dirname, 'data', 'city.json')

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err !== null) {
            const obj = {
                code: 500,
                msg: err.toString(),
                data: {}
            }

            res.write(JSON.stringify(obj))
            res.end()
            return
        }

        const cityList = JSON.parse(data)
        let city = []

        if (cityList[province] !== null && cityList[province] !== undefined) {
            city = cityList[province]
        }

        if (city.length === 0) {
            const obj = {
                code: 404,
                message: 'not found',
                data: {}
            }
            res.write(JSON.stringify(obj))
            res.end()
            return
        }

        const obj = {
            code: 200,
            message: 'success',
            data: city,
        }
        res.write(JSON.stringify(obj))
        res.end()
    })
}

server.listen(port, () => {
    console.log(`服务器启动成功，可以通过 http://localhost:${port} 访问`)
})