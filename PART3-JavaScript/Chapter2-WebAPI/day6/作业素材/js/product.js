const htmlDoc = document.documentElement
const stickyHeader = document.querySelector('.sticky')
const mainNav = document.querySelector('.xtx-wrapper .container')

window.addEventListener('scroll', showStickyHeader)
function showStickyHeader() {
    let mainNavTop = mainNav.offsetTop
    let scrollDistance = htmlDoc.scrollTop

    if (scrollDistance > mainNavTop) {
        stickyHeader.classList.add('show')
        return
    }

    if (stickyHeader.classList.contains('show')) {
        stickyHeader.classList.remove('show')
    }
}

const colorImgCollection = document.querySelector('#color').children
for (let i = 0; i < colorImgCollection.length; i++) {
    const colorImg = colorImgCollection[i]
    colorImg.addEventListener('click', colorImgClickHandle)
}

function colorImgClickHandle() {
    for (let i = 0; i < colorImgCollection.length; i++) {
        colorImgCollection[i].classList.remove('active')
    }
    this.classList.add('active')
}

const sizeSpanCollection = document.querySelector('#size').children
for (let i = 0; i < sizeSpanCollection.length; i++) {
    const sizeSpan = sizeSpanCollection[i]
    sizeSpan.addEventListener('click', sizeSpanClickHandle)
}

function sizeSpanClickHandle() {
    for (let i = 0; i < sizeSpanCollection.length; i++) {
        sizeSpanCollection[i].classList.remove('active')
    }
    this.classList.add('active')
}

const numEle = document.querySelector('.num')
const numBtnCollection = numEle.querySelectorAll('a')
const reduceBtn = numBtnCollection[0]
const addBtn = numBtnCollection[1]
const valueInput = numEle.querySelector('input')

reduceBtn.addEventListener('click', reduceClickHandle)
function reduceClickHandle() {
    let value = parseInt(valueInput.value)
    if (value === 1) {
        this.classList.add('disabled')
        return
    }

    value--
    valueInput.value = value + ''
}

addBtn.addEventListener('click', addClickHandle)
function addClickHandle() {
    let value = parseInt(valueInput.value)
    value++
    valueInput.value = value + ''

    if (reduceBtn.classList.contains('disabled')) {
        reduceBtn.classList.remove('disabled')
    }
}

valueInput.addEventListener('change', valueChangeHandle)
function valueChangeHandle() {
    let value = valueInput.value
    if (!isInt(value)) {
        alert('请输入整数')
        valueInput.value = 1 + ''
        return
    }

    let valueNum = Number(value)
    if (valueNum < 1) {
        alert('请输入大于0的整数')
        valueInput.value = 1 + ''
        return
    }

    if (valueNum === 1) {
        reduceBtn.classList.add('disabled')
    } else {
        reduceBtn.classList.remove('disabled')
    }

    valueInput.value = valueNum + ''
}

function isInt(value) {
    if (value === '') {
        return false
    }

    let valueNum = Number(value)
    return Number.isInteger(valueNum)
}

const tabBtnCollection = document.querySelectorAll('.cont .tab-head a')
const tabContentCollection = document.querySelectorAll('.cont .tab-pane')

for (let i = 0; i < tabBtnCollection.length; i++) {
    tabBtnCollection[i].addEventListener('click', tabBtnClickHandle)
}

function tabBtnClickHandle() {
    for (let i = 0; i < tabBtnCollection.length; i++) {
        tabBtnCollection[i].classList.remove('active')
        tabContentCollection[i].style.display = 'none'
    }

    this.classList.add('active')
    let targetIndex = Array.from(tabBtnCollection).indexOf(this)
    tabContentCollection[targetIndex].style.display = 'block'
}

const backTopEle = document.querySelector('.backTop')

backTopEle.addEventListener('click', backTopClickHandle)
function backTopClickHandle() {
    htmlDoc.scrollTop = 0
}