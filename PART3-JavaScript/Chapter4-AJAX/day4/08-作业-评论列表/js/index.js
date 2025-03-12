let currentPage = 1
let maxPage = 1
const commentList = document.querySelector('.list-group')
const allPageEle = document.querySelector('.all-page')
const pageShowEle = document.querySelector('.page-show')

const submitBtn = document.querySelector('.btn.submit')
const formEle = document.querySelector('.cmt-form')

const prevBtn = document.querySelector('.last')
const nextBtn = document.querySelector('.next')

function getComments(currentPage) {
    const url = 'https://hmajax.itheima.net/api/cmtlist'
    const params = {
        page: currentPage + '',
    }

    const options = {
        url,
        method: 'GET',
        params,
    }

    axios(options).
    then(response => {
        renderComments(response.data.data)
        if(response.data.allPage === 0) {
            renderAllPages(maxPage)
        } else {
            renderAllPages(response.data.allPage)
        }
        renderPageShow()
    }).
    catch(error => console.log(error))
}

function renderComments(comments) {
    commentList.innerHTML = ''
    comments.forEach(comment => {
        const commentItem = createCommentItem(comment)
        commentList.appendChild(commentItem)
    })
}

function createCommentItem(comment) {
    const li = document.createElement('li')
    li.classList.add('list-group-item')
    li.dataset.id = comment.id

    const contentSpan = document.createElement('span')
    contentSpan.textContent = comment.content
    li.appendChild(contentSpan)

    const delSpan = document.createElement('span')
    delSpan.classList.add('badge', 'del')
    delSpan.dataset.id = comment.id
    delSpan.textContent = '删除'
    delSpan.style.cursor = 'pointer'
    delSpan.style.backgroundColor = 'lightgray'
    delSpan.addEventListener('click', delComment)
    li.appendChild(delSpan)

    const timeSpan = document.createElement('span')
    timeSpan.classList.add('badge')
    timeSpan.style.backgroundColor = '#F0AD4E'
    timeSpan.textContent = '评论时间:' + comment.time
    li.appendChild(timeSpan)

    const commentatorSpan = document.createElement('span')
    commentatorSpan.classList.add('badge')
    commentatorSpan.style.backgroundColor = '#5BC0DE'
    commentatorSpan.textContent = '评论人:' + comment.username
    li.appendChild(commentatorSpan)

    return li
}

function renderAllPages(allPage) {
    allPageEle.textContent = allPage
    maxPage = Number(allPage)
}

function renderPageShow() {
    pageShowEle.textContent = currentPage + ''
}

getComments(currentPage)

submitBtn.addEventListener('click', event => {
    submitComment(event)
})

function submitComment(event) {
    const data = serialize(formEle, {hash: true, empty: true})

    if (!validateData(data)) {
        alert('评论内容和评论人不能为空')
        event.preventDefault()
        return
    }

    const url = 'https://hmajax.itheima.net/api/addcmt'

    const options = {
        url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data,
    }

    axios(options).
    then(response => {
        getComments(currentPage)
    }).
    catch(error => console.log(error))
}

function validateData(data) {
    if (data.username.length === 0) {
        return false
    }

    return data.content !== 0
}

nextBtn.addEventListener('click', getNextPage)
function getNextPage() {
    if (currentPage === maxPage) {
        alert('已经是最后一页了')
        return
    }

    currentPage++
    getComments(currentPage)
}

prevBtn.addEventListener('click', getPrevPage)
function getPrevPage() {
    if (currentPage === 1) {
        alert('已经是第一页了')
        return
    }

    currentPage--
    getComments(currentPage)
}

function delComment() {
    const id = this.dataset.id

    const url = 'https://hmajax.itheima.net/api/delcmt'
    const params = {
        id,
    }

    const options = {
        url,
        method: 'GET',
        params,
    }
    axios(options).then(response => {
        renderAfterDel(id)
        renderAllPages(response.data.allPage)
    }).catch(error => console.log(error))
}

function renderAfterDel(id) {
    const targetCommentLi = commentList.querySelector(`li[data-id="${id}"]`)
    commentList.removeChild(targetCommentLi)

    if (commentList.children.length === 0 && currentPage > 1) {
        currentPage--
        getComments(currentPage)
        renderPageShow()
    }
}