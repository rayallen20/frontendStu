const provinceSelectEle = document.querySelector('.province')
const citySelectEle = document.querySelector('.city')
const areaSelectEle = document.querySelector('.area')
const formEle = document.querySelector('.info-form')
const submitBtn = document.querySelector('.btn.submit')

function requestAndRenderProvince() {
    const url = 'https://hmajax.itheima.net/api/province'
    const option = {
        url,
        method: 'GET',
    }

    axios(option).
    then(response => renderProvince(response.data.list)).
    catch(error => console.log(error))
}

function renderProvince(provinceList) {
    setProvinceDefault()

    provinceList.forEach(province => {
        const optionEle = document.createElement('option')
        optionEle.value = province
        optionEle.innerHTML = province
        provinceSelectEle.appendChild(optionEle)
    })

    setCityDefault()
}

provinceSelectEle.addEventListener('change', (event) => {
    const pname = event.target.value
    if (pname.length === 0) {
        setCityDefault()
        setAreaDefault()
        return
    }

    requestAndRenderCity(pname)
})

function requestAndRenderCity(pname) {
    const url = 'https://hmajax.itheima.net/api/city'
    const option = {
        url,
        method: 'GET',
        params: {
            pname
        }
    }

    axios(option).
    then(response => renderCity(response.data.list)).
    catch(error => console.log(error))
}

function renderCity(cityList) {
    setCityDefault()

    cityList.forEach(city => {
        const optionEle = document.createElement('option')
        optionEle.value = city
        optionEle.innerHTML = city
        citySelectEle.appendChild(optionEle)
    })

    setAreaDefault()
}

citySelectEle.addEventListener('change', (event) => {
    const pname = provinceSelectEle.value
    const cname = event.target.value
    if (cname.length === 0) {
        setAreaDefault()
        return
    }

    requestAndRenderArea(pname, cname)
})

function requestAndRenderArea(pname, cname) {
    const url = 'https://hmajax.itheima.net/api/area'
    const option = {
        url,
        method: 'GET',
        params: {
            pname,
            cname
        }
    }

    axios(option).
    then(response => renderArea(response.data.list)).
    catch(error => console.log(error))
}

function renderArea(areaList) {
    setAreaDefault()

    areaList.forEach(area => {
        const optionEle = document.createElement('option')
        optionEle.value = area
        optionEle.innerHTML = area
        areaSelectEle.appendChild(optionEle)
    })
}

function setProvinceDefault() {
    provinceSelectEle.innerHTML = ''
    const defaultOptionEle = document.createElement('option')
    defaultOptionEle.value = ""
    defaultOptionEle.innerHTML = "省份"
    defaultOptionEle.selected = true
    provinceSelectEle.appendChild(defaultOptionEle)
}

function setCityDefault() {
    citySelectEle.innerHTML = ''
    const defaultOptionEle = document.createElement('option')
    defaultOptionEle.value = ""
    defaultOptionEle.innerHTML = "城市"
    defaultOptionEle.selected = true
    citySelectEle.appendChild(defaultOptionEle)
}

function setAreaDefault() {
    areaSelectEle.innerHTML = ''
    const defaultOptionEle = document.createElement('option')
    defaultOptionEle.value = ""
    defaultOptionEle.innerHTML = "地区"
    defaultOptionEle.selected = true
    areaSelectEle.appendChild(defaultOptionEle)
}

requestAndRenderProvince()

submitBtn.addEventListener('click', (event) => {
    requestFeedback()
})

function requestFeedback() {
    const url = 'https://hmajax.itheima.net/api/feedback'
    const data = serialize(formEle, {hash: true, empty: true})

    if (!validateData(data)) {
        alert('请填写完整信息')
        return
    }

    const options = {
        url,
        method: 'POST',
        data,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios(options).
    then(response => alert(response.data.message)).
    catch(error => console.log(error))

    clearForm()
}

function validateData(data) {
    const {province, city, area, nickname, feedback} = data
    console.log(province)

    if (province.length === 0) {
        return false
    }

    if (city.length === 0) {
        return false
    }

    if (area.length === 0) {
        return false
    }

    if (nickname.length === 0) {
        return false
    }

    return feedback.length !== 0
}

function clearForm() {
    formEle.reset()
    setProvinceDefault()
    setCityDefault()
    setAreaDefault()
}