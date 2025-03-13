const fs = require('fs')
const path = require('path')

function getProvince() {
    const filePath = path.join(__dirname, '../data', 'province.json')

    try {
        const content = fs.readFileSync(filePath, 'utf8')

        return {
            code: 200,
            message: 'success',
            data: JSON.parse(content)
        }
    } catch (err) {
        return {
            code: 500,
            message: err.toString(),
            data: {}
        }
    }
}

module.exports = {
    getProvince
}