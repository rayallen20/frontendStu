const showSubLineEle = document.querySelector('input[name="showSubLine"]')
const showPositionEle = document.querySelector('input[name="showPosition"]')

showSubLineEle.addEventListener('change', reDrawHeart)

showPositionEle.addEventListener('change', reDrawHeart)

/**
 * 本方法用于重新绘制心形
 * */
function reDrawHeart() {
    const showSubline = showSubLineEle.checked
    const showPosition = showPositionEle.checked

    ctx.clearRect(0, 0, 600, 500)

    if (showSubline) {
        drawHeartSubline(points)
    }

    if (showPosition) {
        drawHeartLabelPoint(points)
    }

    drawHeart(points)
}

drawHeart(points)
drawHeartSubline(points)
drawHeartLabelPoint(points)