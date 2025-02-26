const loginBtnCollection = document.querySelectorAll('.tab-nav a')
const accountLoginBtn = loginBtnCollection[0]
const qrCodeLoginBtn = loginBtnCollection[1]

const loginTabCollection = document.querySelectorAll('.tab-pane')
const accountLoginTab = loginTabCollection[0]
const qrCodeLoginTab = loginTabCollection[1]

accountLoginBtn.addEventListener('click', accountLoginClickHandle)
function accountLoginClickHandle() {
    accountLoginTab.style.display = 'block'
    accountLoginBtn.style.borderBottom = '2px solid #17bb9b'

    qrCodeLoginTab.style.display = 'none'
    qrCodeLoginBtn.style.borderBottom = 'none'
}

qrCodeLoginBtn.addEventListener('click', qrCodeLoginClickHandle)
function qrCodeLoginClickHandle() {
    accountLoginTab.style.display = 'none'
    accountLoginBtn.style.borderBottom = 'none'

    qrCodeLoginTab.style.display = 'block'
    qrCodeLoginBtn.style.borderBottom = '2px solid #17bb9b'
}

const usernameInput = document.querySelector('input[name="username"]')
const passwordInput = document.querySelector('input[name="password"]')
const agreeCheckBox = document.querySelector('input[name="agree"]')
const formEle = document.querySelector('.xtx-login-main form')
let isAgree = false

agreeCheckBox.addEventListener('click', agreeCheckBoxClickHandle)

function agreeCheckBoxClickHandle() {
    isAgree = agreeCheckBox.checked
}

formEle.addEventListener('submit', formSubmitHandle)
function formSubmitHandle(event) {
    let username = usernameInput.value
    let password = passwordInput.value

    if (username.length === 0) {
        alert('请输入用户名')
        event.preventDefault()
        return
    }

    if (password.length === 0) {
        alert('请输入密码')
        event.preventDefault()
        return
    }

    if (!isAgree) {
        alert('请同意用户协议')
        event.preventDefault()
        return
    }

    storeUserName(username)
    locateToIndexPage()
}

function storeUserName(username) {
    let data = {
        username: username
    }

    let dataStr = JSON.stringify(data)
    localStorage.setItem('username', dataStr)
}

function locateToIndexPage() {
    location.href = './index.html'
}