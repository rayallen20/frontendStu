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
        drawHeartSubline(startPoint, p1, p2, p3, p4, p5)
    }

    if (showPosition) {
        drawHeartLabelPoint(startPoint, p1, p2, p3, p4, p5)
    }

    drawHeart(startPoint, p1, p2, p3, p4, p5)
}

drawHeart(startPoint, p1, p2, p3, p4, p5)
drawHeartSubline(startPoint, p1, p2, p3, p4, p5)
drawHeartLabelPoint(startPoint, p1, p2, p3, p4, p5)