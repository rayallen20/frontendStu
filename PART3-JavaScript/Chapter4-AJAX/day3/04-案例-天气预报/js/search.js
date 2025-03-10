const searchCityInput = document.querySelector('.search .search-city')
const searchList = document.querySelector('.search .search-list')
const searchCityUrl = 'https://hmajax.itheima.net/api/weather/city'

searchCityInput.addEventListener('keyup', _.debounce(searchCity, 1000))
function searchCity() {
    const city = searchCityInput.value.trim()

    if (city.length === 0) {
        return
    }

    sendSearchCityRequest(city)
}

function sendSearchCityRequest(city) {
    const params = {
        city
    }

    const requestConfig = {
        url: searchCityUrl,
        method: 'GET',
        params
    }

    myAxios(requestConfig).
    then(response => renderSearchList(response.data.data)).
    catch(error => {console.log(error)})
}

function renderSearchList(data) {
    if (data.length === 0) {
        return
    }

    searchList.style.display = 'block'
    searchList.innerHTML = ''
    data.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item.name
        li.dataset.code = item.code
        li.addEventListener('click', sendWeatherRequest)

        searchList.appendChild(li)
    })
}

function sendWeatherRequest() {
    const cityCode = this.dataset.code

    const params = {
        city: cityCode
    }

    const requestConfig = {
        url: weatherUrl,
        method: 'GET',
        params
    }

    myAxios(requestConfig).
    then(response => {
        renderResponse(response.data.data)
        searchList.style.display = 'none'
        searchList.innerHTML = ''
        searchCityInput.value = ''
    }).
    catch(error => {console.log(error)})
}