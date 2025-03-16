import '@/css/login.css'
import common from '@/common.js'
import serialize from "form-serialize"

const loginBtn = document.querySelector('#btn-login')
loginBtn.addEventListener('click', login)

async function login() {
    const loginForm = document.querySelector('.login-form')
    const data = serialize(loginForm, {hash: true, empty: true})
    try {
        const payload = await common.axiosInstance.post('/login', data)
        common.storageUser(payload.id, payload.token, payload.username)
        common.showToast('登录成功')
        setTimeout(() => location.href = './index.html', 800)
    } catch (error) {
        common.showToast(error.response.data.message)
    }
}

