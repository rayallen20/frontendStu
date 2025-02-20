const htmlDoc = document.documentElement
const stickyHeaderElement = document.querySelector('.productnav-box')

window.addEventListener('scroll', stickyHeader)
function stickyHeader() {
    let scrollDistance = htmlDoc.scrollTop
    if (scrollDistance > 80) {
        stickyHeaderElement.style.position = 'fixed'
        stickyHeaderElement.style.top = '0'
        stickyHeaderElement.style.left = '0'
        stickyHeaderElement.style.zIndex = '1000'
        stickyHeaderElement.style.width = '1520px'
        return
    }

    // 元素的position属性的默认值为static
    stickyHeaderElement.style.position = 'static'
}

const lineElement = document.querySelector('.line')
const listElement = document.querySelector('.productnav-items')
const liCollection = listElement.querySelectorAll('li')
const iconImgCollection = document.querySelectorAll('.productnav-icon_img')
const titleCollection = document.querySelectorAll('.productnav-size-title')
const scrollMagicCollection = document.querySelectorAll('.js-scroll-magic')

listElement.addEventListener('click', moveLine)

function moveLine(event) {
    const targetElement = event.target

    let targetIndex = -1

    if (targetElement.tagName === 'IMG') {
        targetIndex = Array.from(iconImgCollection).indexOf(targetElement)
    }

    if (targetElement.tagName === 'SPAN') {
        targetIndex = Array.from(titleCollection).indexOf(targetElement)
    }
    console.log("moveLine: " + targetIndex)

    if (targetIndex !== -1) {
        const targetScrollMagic = scrollMagicCollection[targetIndex]
        htmlDoc.scrollTop = targetScrollMagic.offsetTop - stickyHeaderElement.offsetHeight

        lineElement.style.width = liCollection[targetIndex].offsetWidth + 'px'
        lineElement.style.left = liCollection[targetIndex].offsetLeft.toString() + 'px'
    }
}

window.addEventListener('scroll', windowScrollHandle)

function windowScrollHandle() {
    const scrollMagicLocationCollection = []
    for (let i = 0; i < scrollMagicCollection.length; i++) {
        let scrollMagicElement = scrollMagicCollection[i]

        let location = {
            top: scrollMagicElement.offsetTop,
            bottom: scrollMagicElement.offsetTop + scrollMagicElement.offsetHeight
        }
        scrollMagicLocationCollection.push(location)
    }

    let scrollDistance = htmlDoc.scrollTop
    scrollDistance += stickyHeaderElement.offsetHeight
    let targetIndex = -1

    for (let i = 0; i < scrollMagicLocationCollection.length; i++) {
        let location = scrollMagicLocationCollection[i]
        if (scrollDistance >= location.top && scrollDistance < location.bottom) {
            targetIndex = i
            break
        }
    }

    if (targetIndex !== -1) {
        lineElement.style.width = liCollection[targetIndex].offsetWidth + 'px'
        lineElement.style.left = liCollection[targetIndex].offsetLeft.toString() + 'px'
    }
}