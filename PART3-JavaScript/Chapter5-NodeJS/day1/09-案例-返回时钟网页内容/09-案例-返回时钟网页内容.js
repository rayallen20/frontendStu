const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()
const port = 4060

function fetchRequest(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    if (req.url === '/index.html') {
        handleIndexHtml(req, res)
        return
    }

    res.write('404')
    res.end()
}

function handleIndexHtml (req, res) {
    const filePath = path.resolve(__dirname, 'dist', 'index.html')
    const content = fs.readFileSync(filePath)
    res.write(content)
    res.end()
}

server.on('request', fetchRequest)

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})