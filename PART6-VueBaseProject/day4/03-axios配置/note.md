# 03-axios配置

- `src/utils/request.js`:

```javascript
import axios from 'axios'
import router from '@/router'

const baseURL = 'http://interview-api-t.itheima.net'

const timeout = 5000

const options = {
  baseURL,
  timeout
}

const axiosInstance = axios.create(options)

// 请求拦截器
axiosInstance.interceptors.request.use(config => {
  // 在请求头中添加 token
  const token = getToken()
  if (token !== '') {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

function getToken () {
  const token = localStorage.getItem('mj-pc-token')
  if (token !== null) {
    return token
  }
  return ''
}

// 响应拦截器
axiosInstance.interceptors.response.use(response => {
  return extractPayload(response.data)
}, error => {
  if (error.response !== undefined && error.response.status === 401) {
    // 如果响应状态码是401 则表示未授权 应清除token
    localStorage.removeItem('mj-pc-token')
    router.push({ name: 'login' })
  }
  return Promise.reject(error)
})

function extractPayload (response) {
  if (response.data !== undefined) {
    return response.data
  }
  return response
}

export default axiosInstance
```