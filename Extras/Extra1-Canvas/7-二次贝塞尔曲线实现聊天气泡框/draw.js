const showSubLineEle = document.querySelector('input[name="showSubLine"]')
const showPositionEle = document.querySelector('input[name="showPosition"]')

showSubLineEle.addEventListener('change', reDrawBubble)
showPositionEle.addEventListener('change', reDrawBubble)

function reDrawBubble() {
    const showSubLine = showSubLineEle.checked
    const showPosition = showPositionEle.checked

    ctx.clearRect(0, 0, 600, 500)

    if (showSubLine) {
        drawBubbleSubline(points)
    }

    if (showPosition) {
        drawBubblePoint(points)
    }

    drawBubble(points)
}

drawBubble(points)
drawBubbleSubline(points)
drawBubblePoint(points)