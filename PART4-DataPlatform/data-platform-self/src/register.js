import '@/css/login.css'

import common from "@/common.js"
import serialize from "form-serialize"

const registerBtn = document.querySelector('#btn-register')
registerBtn.addEventListener('click', register)

async function register() {
    const form = document.querySelector('.register-form')
    const data = serialize(form, {hash: true, empty: true})

    if (!common.checkUser(data.username, data.password)) {
        return
    }

    try {
        await common.axiosInstance.post('/register', data)
        common.showToast('注册成功,请登录')
        setTimeout(() => location.href = './login.html', 800)
    }catch (error) {
        common.showToast(error.response.data.message)
    }
}