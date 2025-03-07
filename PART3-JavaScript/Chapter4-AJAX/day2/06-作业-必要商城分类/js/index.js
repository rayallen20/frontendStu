// 获取一级分类

const primaryUrl = 'https://hmajax.itheima.net/api/category/top'
const primaryUlEle = document.querySelector('#one')

window.addEventListener('load', getPrimary)
function getPrimary() {
    const requestConfig = {
        url: primaryUrl,
        method: 'GET',
    }

    axios(requestConfig).
    then(response => renderPrimary(response.data.data)).
    catch(error => console.log(error))
}

function renderPrimary(data) {
    primaryUlEle.innerHTML = ''

    data.forEach(item => {
        const liEle = createPrimaryLi(item)
        primaryUlEle.append(liEle)
    })
}

function createPrimaryLi(item) {
    const liEle = document.createElement('li')
    liEle.innerHTML = item.name
    liEle.dataset.id = item.id
    liEle.addEventListener('click', () => {
        getSecondary(liEle.dataset.id)
    })

    return liEle
}

// 获取二级分类
const secondaryUrl = 'https://hmajax.itheima.net/api/category/sub'
const secondaryUlEle = document.querySelector('#two')

function getSecondary(primaryId) {
    const params = {
        id: primaryId
    }

    const requestConfig = {
        url: secondaryUrl,
        method: 'GET',
        params,
    }

    axios(requestConfig).
    then(response => renderSecondary(response.data.data.children)).
    catch(error => console.log(error))
}

function renderSecondary(data) {
    secondaryUlEle.innerHTML = ''
    data.forEach(item => {
        const liEle = createSecondaryLi(item)
        secondaryUlEle.append(liEle)
    })
}

function createSecondaryLi(item) {
    const liEle = document.createElement('li')
    liEle.innerHTML = item.name
    liEle.dataset.id = item.id
    return liEle
}