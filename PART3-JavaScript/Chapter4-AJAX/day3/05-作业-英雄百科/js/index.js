window.addEventListener('load', showDefault)

function showDefault() {
    const url = 'https://hmajax.itheima.net/api/lol/search'
    const requestConfig = {
        url,
        method: 'GET'
    }

    axios(requestConfig).
    then(response => renderHeroList(response.data.data)).
    catch(error => {console.log(error)})
}

const heroList = document.querySelector('.list')

function renderHeroList(heroes) {
    heroList.innerHTML = ''
    heroes.forEach(hero => {
        const liEle = createLi(hero)
        heroList.appendChild(liEle)
    })
}

function createLi(hero) {
    const liEle = document.createElement('li')
    liEle.dataset.id = hero.heroId

    const imgEle = document.createElement('img')
    imgEle.src = hero.icon
    imgEle.alt = ""
    liEle.appendChild(imgEle)

    const pEle = document.createElement('p')
    pEle.textContent = hero.title
    liEle.appendChild(pEle)

    liEle.addEventListener('mouseenter', showDetail)

    // 鼠标移出时需要重新绑定事件
    liEle.addEventListener('mouseleave', () => {
        liEle.addEventListener('mouseenter', showDetail)
    })

    return liEle
}

function showDetail() {
    const id = this.dataset.id

    const params = {
        id
    }

    const url = `https://hmajax.itheima.net/api/lol/info`
    const requestConfig = {
        url,
        method: 'GET',
        params,
    }

    axios(requestConfig).
    then(response => renderDetail(response.data.data)).
    catch(error => {console.log(error)})

    this.removeEventListener('mouseenter', showDetail)
}

const modalEle = document.querySelector('#infoModal')
const model = new bootstrap.Modal(modalEle)

function renderDetail(data) {
    const modalTitleEle = modalEle.querySelector('.modal-title')
    modalTitleEle.innerHTML = data.hero.name + ' ' + data.hero.title

    const modalImgEle = modalEle.querySelector('.modal-body .img-thumbnail')
    modalImgEle.src = data.hero.icon

    const attackEle = modalEle.querySelector('.modal-body .attack')
    attackEle.style.width = `${data.hero.attack * 10}%`

    const defenseEle = modalEle.querySelector('.modal-body .defense')
    defenseEle.style.width = `${data.hero.defense * 10}%`

    const magicEle = modalEle.querySelector('.modal-body .magic')
    magicEle.style.width = `${data.hero.magic * 10}%`

    const difficultyEle = modalEle.querySelector('.modal-body .difficulty')
    difficultyEle.style.width = `${data.hero.difficulty * 10}%`

    const pEle = modalEle.querySelector('.modal-body p')
    pEle.innerHTML = data.hero.keywords

    model.show()
}

const searchInput = document.querySelector('.hero-container .search')
searchInput.addEventListener('input', _.debounce(searchHero, 1000))

function searchHero() {
    const q = searchInput.value.trim()
    if (q.length === 0) {
        alert('请输入搜索内容')
        return
    }

    const url = 'https://hmajax.itheima.net/api/lol/search'

    const params = {
        q,
    }

    const requestConfig = {
        url,
        method: 'GET',
        params,
    }
    axios(requestConfig).
    then(response => {
        if (response.data.code === 400) {
            return
        }

        renderHeroList(response.data.data)
    }).
    catch(error => {console.log(error)})
}

