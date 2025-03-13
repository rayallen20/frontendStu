const http = require('http')
const server = http.createServer()

function hello (request, response) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8')

    const respContent = '你好,世界'

    response.write(respContent)
    response.end()
}

server.on('request', hello)

server.listen(4060, () => {
    console.log('Server is running at http://localhost:4060')
})