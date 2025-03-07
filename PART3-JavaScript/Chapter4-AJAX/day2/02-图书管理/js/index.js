// PART1. 请求数据 渲染页面

const showUrl = 'https://hmajax.itheima.net/api/books'
const creator = '张三'
const tbodyEle = document.querySelector('.list')

window.addEventListener('load', showBooks)
function showBooks() {
    const params = {
        creator
    }

    const requestConfig = {
        url: showUrl,
        method: 'GET',
        params
    }

    axios(requestConfig).
    then(response => renderBooks(response.data.data)).
    catch(error => console.log(error))
}

function renderBooks(books) {
    tbodyEle.innerHTML = ''
    books.forEach(book => {
        const row = createRow(book)
        tbodyEle.append(row)
    })
}

function createRow(book) {
    const row = document.createElement('tr')

    const idCell = createIdCell(book.id)
    row.append(idCell)

    const nameCell = createNameCell(book.bookname)
    row.append(nameCell)

    const authorCell = createAuthorCell(book.author)
    row.append(authorCell)

    const publisherCell = createPublisherCell(book.publisher)
    row.append(publisherCell)

    const operationCell = createOperationCell(book.id)
    row.append(operationCell)

    row.dataset.id = book.id

    return row
}

function createIdCell(id) {
    const idCell = document.createElement('td')
    idCell.innerText = id
    return idCell
}

function createNameCell(name) {
    const nameCell = document.createElement('td')
    nameCell.innerText = name
    return nameCell
}

function createAuthorCell(author) {
    const authorCell = document.createElement('td')
    authorCell.innerText = author
    return authorCell
}

function createPublisherCell(publisher) {
    const publisherCell = document.createElement('td')
    publisherCell.innerText = publisher
    return publisherCell
}

function createOperationCell(id) {
    const operationCell = document.createElement('td')

    const delSpan = createDelSpan(id)
    operationCell.append(delSpan)

    const editSpan = createEditSpan(id)
    operationCell.append(editSpan)

    return operationCell
}

function createDelSpan(id) {
    const delSpan = document.createElement('span')
    delSpan.innerText = '删除'
    delSpan.classList.add('del')
    delSpan.dataset.id = id

    delSpan.addEventListener('click', delBook)

    return delSpan
}

function createEditSpan(id) {
    const editSpan = document.createElement('span')
    editSpan.innerText = '编辑'
    editSpan.classList.add('edit')
    editSpan.dataset.id = id

    editSpan.addEventListener('click', getBook)

    return editSpan
}

// PART2. 新增数据

const plusBtn = document.querySelector('.plus-btn')
const addModalEle = document.querySelector('.add-modal')
const addModal = new bootstrap.Modal(addModalEle)

plusBtn.addEventListener('click', showAddModal)
function showAddModal() {
    addModal.show()
}

const addBtn = document.querySelector('.add-btn')
const bookNameInput = document.querySelector('.add-modal .bookname')
const authorInput = document.querySelector('.add-modal .author')
const publisherInput = document.querySelector('.add-modal .publisher')
const addUrl = 'https://hmajax.itheima.net/api/books'

addBtn.addEventListener('click', addBook)
function addBook() {
    const bookname = bookNameInput.value
    const author = authorInput.value
    const publisher = publisherInput.value

    if (bookname.length === 0) {
        alert('请输入书名')
        return
    }

    if (author.length === 0) {
        alert('请输入作者')
        return
    }

    if (publisher.length === 0) {
        alert('请输入出版社')
        return
    }

    const data = {
        bookname,
        author,
        publisher,
        creator,
        header: {
            'Content-Type': 'application/json'
        }
    }

    const requestConfig = {
        url: addUrl,
        method: 'POST',
        data
    }

    axios(requestConfig).
    then(response => showAddedBook(response.data.data)).
    catch(error => console.log(error))

    cleanInput()
    addModal.hide()
}

/**
 * @param {Object} book
 * 局部刷新页面 仅渲染新增的图书
 * */
function showAddedBook(book) {
    const row = createRow(book)
    tbodyEle.prepend(row)
}

function cleanInput() {
    bookNameInput.value = ''
    authorInput.value = ''
    publisherInput.value = ''
}

// PART3. 删除数据

const delUrl = `https://hmajax.itheima.net/api/books/`

function delBook(event) {
    const id = event.target.dataset.id
    const targetUrl = delUrl + id

    const requestConfig = {
        url: targetUrl,
        method: 'DELETE'
    }

    axios(requestConfig).
    then(response => delRow(response.data.data.id)).
    catch(error => console.log(error))
}

function delRow(id) {
    const targetRow = findDelRow(id)
    tbodyEle.removeChild(targetRow)
}

function findDelRow(id) {
    return tbodyEle.querySelector(`tr[data-id="${id}"]`)
}

// PART4. 编辑数据

const editModalEle = document.querySelector('.edit-modal')
const editModal = new bootstrap.Modal(editModalEle)
const editIdInput = document.querySelector('.edit-modal .id')
const editBookNameInput = document.querySelector('.edit-modal .bookname')
const editAuthorInput = document.querySelector('.edit-modal .author')
const editPublisherInput = document.querySelector('.edit-modal .publisher')
const getUrl = 'https://hmajax.itheima.net/api/books/'

function getBook(event) {
    const id = event.target.dataset.id

    const requestConfig = {
        url: getUrl + id,
        method: 'GET',
    }

    axios(requestConfig).
    then(response => showEditModal(response.data.data)).
    catch(error => console.log(error))
}

function showEditModal(book) {
    editIdInput.value = book.id
    editBookNameInput.value = book.bookname
    editAuthorInput.value = book.author
    editPublisherInput.value = book.publisher

    editModal.show()
}

const editBtn = document.querySelector('.edit-btn')
const editUrl = 'https://hmajax.itheima.net/api/books/'
editBtn.addEventListener('click', editBook)

function editBook() {
    const id = editIdInput.value
    const bookname = editBookNameInput.value
    const author = editAuthorInput.value
    const publisher = editPublisherInput.value

    const book = {
        bookname,
        author,
        publisher,
        creator
    }

    const requestConfig = {
        url: editUrl + id,
        method: 'PUT',
        data: book
    }

    axios(requestConfig).
    then(response => replaceRow(response.data.data)).
    catch(error => console.log(error))

    editModalEle.removeAttribute('data-id')
    editModal.hide()

    editIdInput.value = ''
    cleanInput()
}

function replaceRow(book) {
    const targetRow = findDelRow(book.id)
    const newRow = createRow(book)

    tbodyEle.replaceChild(newRow, targetRow)
}