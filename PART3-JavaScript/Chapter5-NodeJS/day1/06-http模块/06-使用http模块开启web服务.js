const http = require('http')
const server = http.createServer()

function hello (request, response) {
    response.setHeader('Content-Type', 'application/json')

    const respObj = {
        code: http.STATUS_CODES[200],
        message: 'success',
        data: '你好世界'
    }

    response.write(JSON.stringify(respObj))
    response.end()
}

server.on('request', hello)

server.listen(4060, () => {
    console.log('Server is running at http://localhost:4060')
})