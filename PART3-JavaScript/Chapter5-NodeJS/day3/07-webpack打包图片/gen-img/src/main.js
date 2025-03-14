import logo from './asset/logo.png'
import './less/index.less'
import './css/index.css'
import {checkUsername, checkPassword} from "./utils/utils"

const btn = document.querySelector('.login-btn')
const usernameInput = document.querySelector('.username')
const passwordInput = document.querySelector('.password')

btn.addEventListener('click', check)

function check() {
    const username = usernameInput.value
    const password = passwordInput.value
    if (checkUsername(username) && checkPassword(password)) {
        alert('登录成功')
    } else {
        alert('登录失败')
    }
}

const imgEle = document.querySelector('img')
imgEle.src = logo