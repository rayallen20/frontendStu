import '@/css/login.css'

import common from "@/common.js"
import serialize from "form-serialize"

const registerBtn = document.querySelector('#btn-register')
registerBtn.addEventListener('click', register)

async function register() {
    const form = document.querySelector('.register-form')
    const data = serialize(form, {hash: true, empty: true})

    if (!checkRegister(data.username, data.password)) {
        return
    }

    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const response = await common.axiosInstance.post('/register', data, options)
        common.showToast(response.data.message)
        setTimeout(() => location.href = './login.html', 800)
    }catch (error) {
        common.showToast(error.response.data.message)
    }
}

function checkRegister(username, password) {
    if (username === '') {
        common.showToast('用户名不能为空')
        return false
    }

    if (password === '') {
        common.showToast('密码不能为空')
        return false
    }

    return true
}