const weatherUrl = 'https://hmajax.itheima.net/api/weather'

window.addEventListener('load', showDefault)

function showDefault() {
    const params = {
        city: '110100'
    }

    const requestConfig = {
        url: weatherUrl,
        method: 'GET',
        params
    }

    myAxios(requestConfig).
    then(response => {
        renderResponse(response.data.data)
    }).
    catch(error => {console.log(error)})
}

function renderResponse(payload) {
    renderTop(payload)
    renderWeatherBox(payload)
    renderTodayWeather(payload.todayWeather)
    renderWeekWeatherBox(payload.dayForecast)
}

function renderTop(payload) {
    renderArea(payload.area)
    renderDateShort(payload.dateShort)
    renderDateLunar(payload.dateLunar)
}

function renderArea(area) {
    const areaEl = document.querySelector('.area')
    areaEl.textContent = area
}

function renderDateShort(dateShort) {
    const dateShortEle = document.querySelector('.dateShort')
    dateShortEle.textContent = dateShort
}

function renderDateLunar(dateLunar) {
    const dateLunarEle = document.querySelector('.dateLunar')
    dateLunarEle.textContent = dateLunar
}

function renderWeatherBox(payload) {
    renderTemperature(payload.temperature)
    renderAir(payload.psPm25, payload.psPm25Level)
    renderWeatherList(payload.weather, payload.weatherImg, payload.windDirection, payload.windPower)
}

function renderTemperature(temperature) {
    const temperatureEle = document.querySelector('.temperature')
    temperatureEle.textContent = temperature
}

function renderAir(psPm25, psPm25Level) {
    const psPm25Ele = document.querySelector('.psPm25')
    psPm25Ele.textContent = psPm25

    const psPm25LevelEle = document.querySelector('.psPm25Level')
    psPm25LevelEle.textContent = psPm25Level
}

function renderWeatherList(weather, weatherImg, windDirection, windPower) {
    const weatherEle = document.querySelector('.weather')
    weatherEle.textContent = weather

    const weatherImgEle = document.querySelector('.weatherImg')
    weatherImgEle.src = weatherImg

    const windDirectionEle = document.querySelector('.windDirection')
    windDirectionEle.textContent = windDirection

    const windPowerEle = document.querySelector('.windPower')
    windPowerEle.textContent = windPower
}

function renderTodayWeather(todayWeather) {
    renderRangeBox(todayWeather)
    renderSunList(todayWeather)
}

function renderRangeBox(todayWeather) {
    const weatherEle = document.querySelector('.today-weather .weather')
    weatherEle.textContent = todayWeather.weather

    const temNightEle = document.querySelector('.today-weather .temNight')
    temNightEle.textContent = todayWeather.temNight

    const temDayEle = document.querySelector('.today-weather .temDay')
    temDayEle.textContent = todayWeather.temDay
}

function renderSunList(todayWeather) {
    const ultravioletEle = document.querySelector('.sun-list .ultraviolet')
    ultravioletEle.textContent = todayWeather.ultraviolet

    const humidityEle = document.querySelector('.sun-list .humidity')
    humidityEle.textContent = todayWeather.humidity

    const sunriseTimeEle = document.querySelector('.sun-list .sunriseTime')
    sunriseTimeEle.textContent = todayWeather.sunriseTime

    const sunsetTimeEle = document.querySelector('.sun-list .sunsetTime')
    sunsetTimeEle.textContent = todayWeather.sunsetTime
}

function renderWeekWeatherBox(dayForecast) {
    const weekWrapEle = document.querySelector('.week-weather-box .week-wrap')
    weekWrapEle.innerHTML = ''
    dayForecast.forEach(weather => {
        const liEle = createLi(weather)
        weekWrapEle.appendChild(liEle)
    })
}

function createLi(weather) {
    const liEle = document.createElement('li')
    liEle.classList.add('item')

    const dateBoxEle = createDateBox(weather.dateFormat, weather.date)
    liEle.appendChild(dateBoxEle)

    const weatherImgEle = createWeatherImg(weather.weatherImg)
    liEle.appendChild(weatherImgEle)

    const weatherEle = createWeather(weather.weather)
    liEle.appendChild(weatherEle)

    const tempEle = createTemp(weather.temNight, weather.temDay)
    liEle.appendChild(tempEle)

    const windEle = createWind(weather.windDirection, weather.windPower)
    liEle.appendChild(windEle)

    return liEle
}

function createDateBox(dateFormat, date) {
    const dateBoxEle = document.createElement('div')
    dateBoxEle.classList.add('date-box')

    const dateFormatEle = document.createElement('span')
    dateFormatEle.classList.add('dateFormat')
    dateFormatEle.textContent = dateFormat
    dateBoxEle.appendChild(dateFormatEle)

    const dateEle = document.createElement('span')
    dateEle.classList.add('date')
    dateEle.textContent = date
    dateBoxEle.appendChild(dateEle)

    return dateBoxEle
}

function createWeatherImg(weatherImg) {
    const weatherImgEle = document.createElement('img')
    weatherImgEle.classList.add('weatherImg')
    weatherImgEle.src = weatherImg
    weatherImgEle.alt = ""
    return weatherImgEle
}

function createWeather(weather) {
    const weatherEle = document.createElement('div')
    weatherEle.classList.add('weather')
    weatherEle.textContent = weather
    return weatherEle
}

function createTemp(temNight, temDay) {
    const tempEle = document.createElement('div')
    tempEle.classList.add('temp')

    const temNightEle = document.createElement('span')
    temNightEle.classList.add('temNight')
    temNightEle.textContent = temNight
    tempEle.appendChild(temNightEle)

    tempEle.append('-')

    const temDayEle = document.createElement('span')
    temDayEle.classList.add('temDay')
    temDayEle.textContent = temDay
    tempEle.appendChild(temDayEle)

    const degreeEle = document.createElement('span')
    degreeEle.innerHTML = ' ℃'
    tempEle.appendChild(degreeEle)

    return tempEle
}

function createWind(windDirection, windPower) {
    const windEle = document.createElement('div')
    windEle.classList.add('wind')

    const windDirectionEle = document.createElement('span')
    windDirectionEle.classList.add('windDirection')
    windDirectionEle.textContent = windDirection
    windEle.appendChild(windDirectionEle)

    windEle.append(' ')

    const windPowerEle = document.createElement('span')
    windPowerEle.classList.add('windPower')
    windPowerEle.textContent = windPower
    windEle.appendChild(windPowerEle)

    return windEle
}