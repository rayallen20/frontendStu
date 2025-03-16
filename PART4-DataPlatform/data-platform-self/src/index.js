import '@/css/index.css'
import common from '@/common.js'

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

    requestAndRender(user.token).
    then().
    catch(err => console.log('渲染Dashboard头部失败:' + err))
}

function redirectToLogin() {
    common.showToast('请先登录')
    setTimeout(() => {
        location.href = './login.html'
    }, 800)
}

async function requestAndRender() {
    try {
        const payload = await common.axiosInstance.get('/dashboard')
        renderDashboard(payload.overview)
    } catch (error) {
        common.showToast(error.response.data.message)
    }
}

function renderDashboard(overview) {
    renderSalary(overview.salary)
    renderStudentCount(overview.student_count)
    renderAge(overview.age)
    renderGroupCount(overview.group_count)
}

function renderSalary(salary) {
    const salaryEle = document.querySelector('.salary')
    salaryEle.innerText = salary + ''
}

function renderStudentCount(studentCount) {
    const studentCountEle = document.querySelector('.student_count')
    studentCountEle.innerText = studentCount + ''
}

function renderAge(age) {
    const ageEle = document.querySelector('.age')
    ageEle.innerText = age + ''
}

function renderGroupCount(groupCount) {
    const groupCountEle = document.querySelector('.group_count')
    groupCountEle.innerText = groupCount + ''
}

const logoutBtn = document.querySelector('#logout')
logoutBtn.addEventListener('click', common.logout)