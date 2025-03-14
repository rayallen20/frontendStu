import logo from '@/asset/logo.png'
import '@/css/index.css'
import {checkUsername, checkPassword} from "MyUtils/utils"
import {makeOption} from "MyUtils/request.js"
import axios from "axios"

const btn = document.querySelector('.login-btn')
const usernameInput = document.querySelector('.username')
const passwordInput = document.querySelector('.password')

btn.addEventListener('click', check)

function check() {
    const username = usernameInput.value
    const password = passwordInput.value
    if (!checkUsername(username) || !checkPassword(password)) {
        alert('登录失败')
        return
    }

    const option = makeOption(username, password)
    axios(option).
    then(res => console.log(res)).
    catch(err => console.log(err))
}

const imgEle = document.querySelector('img')
imgEle.src = logo

console.log(123)
console.log(234)