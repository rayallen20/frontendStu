// PART1. 获取数据并渲染

const creator = '老瘪'
const getUrl = 'https://hmajax.itheima.net/api/settings'

window.addEventListener('load', getSettings)
function getSettings() {
    const params = {
        creator
    }

    const requestConfig = {
        url: getUrl,
        method: 'GET',
        params,
    }

    axios(requestConfig).
    then(response => renderSetting(response.data.data)).
    catch(error => console.log(error))
}

const emailInput = document.querySelector('#email')
const nicknameInput = document.querySelector('#nickname')
const genderOptions = document.querySelectorAll(`input[name="gender"]`)
const descTextarea = document.querySelector('#desc')
const avatarImg = document.querySelector('.prew')

function renderSetting(setting) {
    renderEmail(setting.email)
    renderNickName(setting.nickname)
    renderGender(setting.gender)
    renderDesc(setting.desc)
    renderAvatar(setting.avatar)
}

function renderEmail(email) {
    emailInput.value = email
}

function renderNickName(nickName) {
    nicknameInput.value = nickName
}

function renderGender(gender) {
    const targetOption = chooseOptions(gender)
    targetOption.checked = true
}

function chooseOptions(gender) {
    gender += ''
    return Array.from(genderOptions).find(option => option.value === gender)
}

function renderDesc(desc) {
    descTextarea.value = desc
}

function renderAvatar(avatar) {
    avatarImg.src = avatar
}

// PART2. 修改头像

const fileInput = document.querySelector('#upload')
const uploadUrl = 'https://hmajax.itheima.net/api/avatar'
const maxSize = 2 * 1024 * 1024
fileInput.addEventListener('change', upload)

function upload(event) {
    const file = event.target.files[0]
    if (!isImage(file.type)) {
        alert('请选择图片文件')
        return
    }

    if (isExceeded(file.size)) {
        alert('图片大小不能超过2M')
        return
    }

    const formData = new FormData()
    formData.append('avatar', file)
    formData.append('creator', creator)

    const requestConfig = {
        url: uploadUrl,
        method: 'PUT',
        data: formData,
    }

    axios(requestConfig).
    then(response => {
        renderAvatar(response.data.data.avatar)
        alertSuccess(response.data.message)
    }).
    catch(error => console.log(error))
}

function isImage(type) {
    return type.startsWith('image')
}

function isExceeded(size) {
    return size >= maxSize
}

// PART3. 修改个人信息

const modifyUrl = 'https://hmajax.itheima.net/api/settings'
const submitBtn = document.querySelector('.submit')
const toastEle = document.querySelector('.toast')
const alertSuccessEle = document.querySelector('.alert-success')
const toast = new bootstrap.Toast(toastEle)
submitBtn.addEventListener('click', modifySettings)

function modifySettings() {
    const data = {
        desc: descTextarea.value,
        email: emailInput.value,
        gender: Number(findCheckedOptionValue()),
        nickname: nicknameInput.value,
        creator,
    }

    const requestConfig = {
        url: modifyUrl,
        method: 'PUT',
        data,
    }

    axios(requestConfig).
    then(response => {
        renderSetting(response.data.data)
        alertSuccess(response.data.message)
    }).
    catch(error => console.log(error))
}

function findCheckedOptionValue() {
    const checkedOption = Array.from(genderOptions).find(option => option.checked)
    return checkedOption.value
}

function alertSuccess(message) {
    alertSuccessEle.innerHTML = message
    toast.show()
}