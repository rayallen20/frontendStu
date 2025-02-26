const navUl = document.querySelector('.xtx_navs')

window.addEventListener('load', renderUsername)
function renderUsername() {
    let username = loadUsername()
    if (username === null) {
        return
    }

    render(username)
}

function render(username) {
    const liCollection = navUl.children
    const usernameLi = createUsernameLi(username)
    navUl.replaceChild(usernameLi, liCollection[0])

    const logoutLi = createLogoutLi()
    navUl.replaceChild(logoutLi, liCollection[1])
}

function loadUsername() {
    let dataStr = localStorage.getItem('username')
    if (dataStr !== null && dataStr !== '') {
        let data = JSON.parse(dataStr)
        return data.username
    }

    return null
}

function createUsernameLi(username) {
    const liEle = document.createElement('li')

    const linkEle = document.createElement('a')
    linkEle.href = 'javascript:'

    const iconEle = document.createElement('i')
    iconEle.classList.add('iconfont', 'icon-user')
    iconEle.innerText = username

    linkEle.append(iconEle)

    liEle.append(linkEle)
    return liEle
}

function createLogoutLi() {
    const liEle = document.createElement('li')

    const linkEle = document.createElement('a')
    linkEle.href = 'javascript:'
    linkEle.innerText = '退出登录'
    linkEle.addEventListener('click', logout)

    liEle.append(linkEle)
    return liEle
}

function logout() {
    localStorage.removeItem('username')
    window.location.reload()
}