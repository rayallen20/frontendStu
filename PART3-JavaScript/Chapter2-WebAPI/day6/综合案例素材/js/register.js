// 1. 验证码发送
const codeEle = document.querySelector('.code')
let countDownNum = 5
let timer = 0
let isCountingDown = false

codeEle.addEventListener('click', codeClickHandle)
function codeClickHandle() {
    if (!isCountingDown) {
        controlCountDown()
    }
}

function controlCountDown() {
    isCountingDown = true
    codeEle.innerText = countDownNum + '秒后重新获取'
    timer = setInterval(countDown, 1000)
}

function countDown() {
    if (countDownNum === 0) {
        countDownNum = 5
        codeEle.innerText = '重新获取'
        isCountingDown = false
        clearInterval(timer)
        return
    }

    countDownNum--
    codeEle.innerText = countDownNum + '秒后重新获取'
}

const nameInput = document.querySelector('input[name="username"]')
const nameMsgEle = nameInput.nextElementSibling
const usernameReg = /^[a-zA-Z0-9\u4e00-\u9fa5\-_]{6,10}$/

nameInput.addEventListener('change', renderUsername)

function renderUsername() {
    let result = verifyUsername()
    if (!result) {
        nameMsgEle.innerText = '请输入6-10个字符,支持中文、字母、数字、中划线、下划线'
        return
    }

    nameMsgEle.innerText = ''
}

function verifyUsername() {
    return usernameReg.test(nameInput.value)
}

const phoneInput = document.querySelector('input[name="phone"]')
const phoneMsgEle = phoneInput.nextElementSibling
const phoneReg = /^1(?:3\d|4[5-79]|5[0-35-9]|6[5-7]|7[0-8]|8\d|9[1589])\d{8}$/

phoneInput.addEventListener('change', renderPhone)
function renderPhone() {
    let result = verifyPhone()
    if (!result) {
        phoneMsgEle.innerText = '请输入正确的手机号'
        return
    }

    phoneMsgEle.innerText = ''
}

function verifyPhone() {
    return phoneReg.test(phoneInput.value)
}

const codeInput = document.querySelector('input[name="code"]')
const codeMsgEle = codeInput.nextElementSibling
const codeReg = /^\d{6}$/

codeInput.addEventListener('change', renderCode)
function renderCode() {
    let result = verifyCode()
    if (!result) {
        codeMsgEle.innerText = '请输入6位数字验证码'
        return
    }

    codeMsgEle.innerText = ''
}

function verifyCode() {
    return codeReg.test(codeInput.value)
}

const passwordInput = document.querySelector('input[name="password"]')
const passwordMsgEle = passwordInput.nextElementSibling
const passwordReg = /^(?=.*[!@#$%^&*()\-_+=\[\]\\|,<.>?/])(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z!@#$%^&*()\-_+=\[\]\\|,<.>?/]{6,16}$/

passwordInput.addEventListener('change', renderPassword)
function renderPassword() {
    let result = verifyPassword()
    if (!result) {
        passwordMsgEle.innerText = '请输入6-16位字母、数字、特殊字符组合密码,要求至少包含1个特殊字符'
        return
    }

    passwordMsgEle.innerText = ''
}

function verifyPassword() {
    return passwordReg.test(passwordInput.value)
}

const confirmInput = document.querySelector('input[name="confirm"]')
const confirmMsgEle = confirmInput.nextElementSibling

confirmInput.addEventListener('change', renderConfirm)
function renderConfirm() {
    let result = verifyConfirm()
    if (!result) {
        confirmMsgEle.innerText = '两次输入密码不一致'
        return
    }

    confirmMsgEle.innerText = ''
}

function verifyConfirm() {
    return confirmInput.value === passwordInput.value
}


const confirmBtn = document.querySelector('.iconfont.icon-queren')
confirmBtn.addEventListener('click', clickConfirmHandle)
let hasConfirm = false

function clickConfirmHandle() {
    if (!confirmBtn.classList.contains('icon-queren2')) {
        confirmBtn.classList.remove('icon-queren')
        confirmBtn.classList.add('icon-queren2')
        hasConfirm = true
        return
    }

    confirmBtn.classList.remove('icon-queren2')
    confirmBtn.classList.add('icon-queren')
    hasConfirm = false
}

const formEle = document.querySelector('.xtx-form')
formEle.addEventListener('submit', formSubmitHandle)

function formSubmitHandle(event) {
    if (!verifyUsername()) {
        alert('用户名不合规')
        event.preventDefault()
        return
    }

    if (!verifyPhone()) {
        alert('手机号不合规')
        event.preventDefault()
        return
    }

    if (!verifyCode()) {
        alert('验证码不合规')
        event.preventDefault()
        return
    }

    if (!verifyPassword()) {
        alert('密码不合规')
        event.preventDefault()
        return
    }

    if (!verifyConfirm()) {
        alert('两次输入密码不一致')
        event.preventDefault()
        return
    }

    if (!hasConfirm) {
        alert('请先同意用户协议')
        event.preventDefault()
        return
    }
}