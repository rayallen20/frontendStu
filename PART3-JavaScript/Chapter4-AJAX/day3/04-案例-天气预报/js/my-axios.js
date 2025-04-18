function myAxios(config) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        // 设置默认请求方式
        if (!config.hasOwnProperty('method')) {
            config.method = 'GET'
        }

        // 处理查询参数
        if (config.hasOwnProperty('params')) {
            const urlParams = new URLSearchParams(config.params)
            config.url += '?' + urlParams.toString()
        }

        // 处理响应头设置
        if (config.hasOwnProperty('headers')) {
            for (const key in config.headers) {
                xhr.setRequestHeader(key, config.headers[key])
            }
        }

        xhr.open(config.method, config.url)

        xhr.addEventListener('loadend', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve({
                    data: JSON.parse(xhr.responseText)
                })
            } else {
                reject(new Error(xhr.response))
            }
        })

        // 处理请求体
        if (config.hasOwnProperty('data')) {
            // 若存在请求体 则设置请求头
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.send(JSON.stringify(config.data))
            return
        }
        xhr.send()
    })
}