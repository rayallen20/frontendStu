const maxSize = 2 * 1024 * 1024
const uploadUrl = 'https://hmajax.itheima.net/api/uploadimg'
const bodyEle = document.body

const uploadInput = document.querySelector('#bg')
uploadInput.addEventListener('change', uploadImg)

function uploadImg(event) {
    const file = event.target.files[0]
    if (isExceeded(file.size)) {
        alert('文件大小不得超过2MB')
        return
    }

    if (!isImage(file.type)) {
        alert('请上传图片文件')
        return
    }

    const formData = new FormData()
    formData.append('img', file)

    upload(formData)
}

function isExceeded(size) {
    return size > maxSize
}

function isImage(type) {
    return type.startsWith('image')
}

function upload(formData) {
    const requestConfig = {
        url: uploadUrl,
        method: 'POST',
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    axios(requestConfig).
    then(response => {
        const url = response.data.data.url
        setBodyBackground(url)
        saveBackground(url)
    }).
    catch(error => console.log(error))
}

function setBodyBackground(url) {
    bodyEle.style.background = `url(${url}) no-repeat center / cover`
}

function saveBackground(url) {
    localStorage.setItem('bg', url)
}

window.addEventListener('load', loadBackground)
function loadBackground() {
    const url = localStorage.getItem('bg')
    if (url !== null && url !== '') {
        setBodyBackground(url)
    }
}