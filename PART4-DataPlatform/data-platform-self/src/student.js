import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/css/common.css'
import '@/css/student.css'
import common from '@/common.js'
import * as bootstrap from 'bootstrap'
import serialize from "form-serialize"

window.addEventListener('load', checkUser)

function checkUser() {
    const user = common.getUser()

    if (user === null) {
        redirectToLogin()
        return
    }

    if (user.token === '') {
        redirectToLogin()
        return
    }

    const usernameEle = document.querySelector('.username')
    common.renderUser(usernameEle)

    showStudents()
}

async function showStudents() {
    try {
        const payload = await common.axiosInstance.get('/students')
        renderStudents(payload)
    } catch (error) {
        console.log(error)
        common.showToast(error.response.data.message)
    }
}

function renderStudents(students) {
    const tbodyEle = document.querySelector('.list')
    tbodyEle.innerHTML = ''

    students.forEach(student => {
        const row = createRow(student)
        tbodyEle.appendChild(row)
    })

    const totalEle = document.querySelector('.total')
    totalEle.textContent = students.length + ''
}

function createRow(student) {
    const tr = document.createElement('tr')

    const nameCell = createNameCell(student.name)
    tr.appendChild(nameCell)

    const ageCell = createAgeCell(student.age)
    tr.appendChild(ageCell)

    const genderCell = createGenderCell(student.gender)
    tr.appendChild(genderCell)

    const groupCell = createGroupCell(student.group)
    tr.appendChild(groupCell)

    const hopeSalaryCell = createHopeSalaryCell(student.hope_salary)
    tr.appendChild(hopeSalaryCell)

    const salaryCell = createSalaryCell(student.salary)
    tr.appendChild(salaryCell)

    const locationCell = createLocationCell(student.province, student.city, student.area)
    tr.appendChild(locationCell)

    const operationCell = createOperationCell(student.id, student.user_id)
    tr.appendChild(operationCell)

    return tr
}

function createNameCell(name) {
    const td = document.createElement('td')
    td.textContent = name
    return td
}

function createAgeCell(age) {
    const td = document.createElement('td')
    td.textContent = age + ''
    return td
}

function createGenderCell(gender) {
    const td = document.createElement('td')

    if (gender === 1) {
        td.textContent = '女'
    }

    if (gender === 0) {
        td.textContent = '男'
    }

    return td
}

function createGroupCell(group) {
    const td = document.createElement('td')
    td.textContent = '第' + group + '组'
    return td
}

function createHopeSalaryCell(hopeSalary) {
    const td = document.createElement('td')
    td.textContent = hopeSalary + ''
    return td
}

function createSalaryCell(salary) {
    const td = document.createElement('td')
    td.textContent = salary + ''
    return td
}

function createLocationCell(province, city, area) {
    const td = document.createElement('td')
    td.textContent = province + ' ' + city + ' ' + area
    return td
}

function createOperationCell(id, userId) {
    const td = document.createElement('td')

    const editLink = createEditLink(id, userId)
    td.appendChild(editLink)

    const delLink = createDelLink(id, userId)
    td.appendChild(delLink)

    return td
}

function createEditLink(id, userId) {
    const link = document.createElement('a')
    link.href = 'javascript:void(0)'
    link.classList.add('text-success')
    link.classList.add('mr-3')

    const icon = document.createElement('i')
    icon.dataset.id = id
    icon.dataset.userId = userId
    icon.classList.add('bi')
    icon.classList.add('bi-pen')
    icon.addEventListener('click', editStudent)

    link.appendChild(icon)

    return link
}

function createDelLink(id, userId) {
    const link = document.createElement('a')
    link.href = 'javascript:void(0)'
    link.classList.add('text-danger')

    const icon = document.createElement('i')
    icon.dataset.id = id
    icon.dataset.userId = userId
    icon.classList.add('bi')
    icon.classList.add('bi-trash')
    icon.addEventListener('click', deleteStudent)

    link.appendChild(icon)

    return link
}

async function deleteStudent() {
    const url = '/students/' + this.dataset.id
    try {
        await common.axiosInstance.delete(url)
        common.showToast('删除成功')
        showStudents()
    } catch (error) {
        console.log(error)
        common.showToast(error.response.data.message)
    }
}

const logoutBtn = document.querySelector('#logout')
logoutBtn.addEventListener('click', common.logout)

const addBtn = document.querySelector('.bi.bi-plus.bi-2x')
addBtn.addEventListener('click', showAddModal)

const modalEle = document.querySelector('#modal')
const modal = new bootstrap.Modal(modalEle)
function showAddModal() {
    showProvince()
    const titleEle = modalEle.querySelector('.modal-title')
    titleEle.innerText = '添加学员'
    modal.show()
}

async function showProvince() {
    try {
        const payload = await common.axiosInstance.get('api/province')

        const provinceSelectEle = document.querySelector(`select[name='province']`)

        payload.list.forEach(province => {
            const option = document.createElement('option')
            option.value = province
            option.textContent = province
            provinceSelectEle.appendChild(option)
        })

    } catch (error) {
        console.log(error)
        common.showToast(error.response.data.message)
    }
}

async function editStudent() {
    const titleEle = modalEle.querySelector('.modal-title')
    titleEle.innerText = '编辑学员'

    try {
        const payload = await common.axiosInstance.get('/students/' + this.dataset.id)
        await fillStudentForm(payload)
    } catch (error) {
        console.log(error)
        common.showToast(error.response.data.message)
    }
}

async function fillStudentForm(payload) {
    const formEle = document.querySelector('#form')
    formEle.dataset.id = payload.id
    formEle.dataset.userId = payload.user_id

    const nameInput = formEle.querySelector(`input[name='name']`)
    nameInput.value = payload.name

    const genderInput = formEle.querySelector(`input[name='gender'][value="${payload.gender}"]`)
    genderInput.checked = true

    const ageInput = formEle.querySelector(`input[name='age']`)
    ageInput.value = payload.age + ''

    const groupInput = formEle.querySelector(`input[name='group']`)
    groupInput.value = payload.group + ''

    const hopeSalaryInput = formEle.querySelector(`input[name='hope_salary']`)
    hopeSalaryInput.value = payload.hope_salary + ''

    const salaryInput = formEle.querySelector(`input[name='salary']`)
    salaryInput.value = payload.salary + ''

    await showProvince()
    provinceSelectEle.value = payload.province

    await showCity()
    citySelectEle.value = payload.city

    await showArea()
    areaSelectEle.value = payload.area
    modal.show()
}

const provinceSelectEle = document.querySelector(`select[name='province']`)
const citySelectEle = document.querySelector(`select[name='city']`)
const areaSelectEle = document.querySelector(`select[name='area']`)

provinceSelectEle.addEventListener('change', showCity)

async function showCity() {
    const provinceValue = provinceSelectEle.value
    if (provinceValue === '') {
        clearCity()
        clearArea()
        return
    }

    const options = {
        params: {
            pname: provinceValue
        }
    }

    try {
        const payload = await common.axiosInstance.get('api/city', options)

        clearCity()
        clearArea()

        payload.list.forEach(city => {
            const option = document.createElement('option')
            option.value = city
            option.textContent = city
            citySelectEle.appendChild(option)
        })

    } catch (error) {
        console.log(error)
        common.showToast(error.response.data.message)
    }
}

citySelectEle.addEventListener('change', showArea)

async function showArea() {
    const provinceValue = provinceSelectEle.value
    const cityValue = citySelectEle.value

    if (cityValue === '') {
        clearArea()
        return
    }

    const options = {
        params: {
            pname: provinceValue,
            cname: cityValue
        }
    }

    try {
        const payload = await common.axiosInstance.get('api/area', options)

        clearArea()

        payload.list.forEach(area => {
            const option = document.createElement('option')
            option.value = area
            option.textContent = area
            areaSelectEle.appendChild(option)
        })
    } catch (error) {
        console.log(error)
        common.showToast(error.response.data.message)
    }
}

function clearCity() {
    citySelectEle.innerHTML = ''

    const initialOption = document.createElement('option')
    initialOption.value = ''
    initialOption.textContent = '--城市--'
    citySelectEle.appendChild(initialOption)
}

function clearArea() {
    areaSelectEle.innerHTML = ''

    const initialOption = document.createElement('option')
    initialOption.value = ''
    initialOption.textContent = '--地区--'
    areaSelectEle.appendChild(initialOption)
}

const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', (event) => {
    const titleEle = modalEle.querySelector('.modal-title')
    if (titleEle.innerText === '添加学员') {
        addStudent()
        return
    }

    if (titleEle.innerText === '编辑学员') {
        submitEdit()
        return
    }
})

async function addStudent() {
    const formEle = document.querySelector('#form')
    const data = serialize(formEle, {hash: true, empty: true})

    if (!checkAddStudent(data)) {
        return
    }

    data.gender = Number(data.gender)
    data.age = Number(data.age)
    data.group = Number(data.group)
    data.hope_salary = Number(data.hope_salary)
    data.salary = Number(data.salary)

    try {
        const payload = await common.axiosInstance.post('/students', data)
        formEle.reset()
        modal.hide()
        await showStudents()
    } catch (error) {
        console.log(error)
        common.showToast(error.response.data.message)
    }
}

async function submitEdit() {
    const formEle = document.querySelector('#form')
    const data = serialize(formEle, {hash: true, empty: true})

    if (!checkAddStudent(data)) {
        return
    }

    data.gender = Number(data.gender)
    data.age = Number(data.age)
    data.group = Number(data.group)
    data.hope_salary = Number(data.hope_salary)
    data.salary = Number(data.salary)

    try {
        const url = '/students/' + formEle.dataset.id
        const payload = await common.axiosInstance.put(url, data)
        formEle.reset()
        delete formEle.dataset.id
        delete formEle.dataset.userId
        modal.hide()
        await showStudents()
    } catch (error) {
        console.log(error)
        common.showToast(error.response.data.message)
    }
}

function checkAddStudent(data) {
    if (data.name === '') {
        alert('姓名不能为空')
        return false
    }

    if (Number(data.gender) !== 0 && Number(data.gender) !== 1) {
        alert('性别只能为男或女')
        return false
    }

    if (Number(data.age) <= 0) {
        alert('年龄不能小于0')
        return false
    }

    if (isNaN(Number(data.age))) {
        alert('年龄必须为数字')
        return false
    }

    if (Number(data.group) <= 0) {
        alert('组号不能小于0')
        return false
    }

    if (isNaN(Number(data.group))) {
        alert('组号必须为数字')
        return false
    }

    if (Number(data.group) <= 0 || Number(data.group) > 8) {
        alert('组号必须在1-8之间')
        return false
    }

    if (Number(data.hope_salary) <= 0) {
        alert('期望薪资不能小于0')
        return false
    }

    if (isNaN(Number(data.hope_salary))) {
        alert('期望薪资必须为数字')
        return false
    }

    if (Number(data.salary) <= 0) {
        alert('就业薪资不能小于0')
        return false
    }

    if (isNaN(Number(data.salary))) {
        alert('就业薪资必须为数字')
        return false
    }

    if (data.province === '') {
        alert('请选择省份')
        return false
    }

    if (data.city === '') {
        alert('请选择城市')
        return false
    }

    if (data.area === '') {
        alert('请选择地区')
        return false
    }

    return true
}