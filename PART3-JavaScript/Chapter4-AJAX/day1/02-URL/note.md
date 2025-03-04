# 02-URL

## 1. URL

- URL: Uniform Resource Locator,统一资源定位符

### 1.1 URL的组成

- `https://hmajax.itheima.net/api/province`
- `https://`: 协议
- `hmajax.itheima.net`: 域名
- `/api/province`: 资源路径

### 1.2 案例-获取新闻列表

```javascript
const bodyEle = document.body

axios({
    url: 'https://hmajax.itheima.net/api/news'
}).then( response => {
    const newsList = response.data.data
    newsList.forEach( item => {
        const divEle = document.createElement('div')
        divEle.dataset.id = item.id
        divEle.style.border = '1px solid #000000'
        divEle.style.width = '500px'
        
        const titleEle = document.createElement('h3')
        titleEle.innerText = item.title
        divEle.append(titleEle)
        
        const sourceEle = document.createElement('p')
        sourceEle.innerText = item.source
        divEle.append(sourceEle)
        
        const commentCounterEle = document.createElement('p')
        commentCounterEle.innerText = item.cmtcount + ''
        divEle.append(commentCounterEle)
        
        const imgEle = document.createElement('img')
        imgEle.src = item.img
        divEle.append(imgEle)
        
        const timeEle = document.createElement('p')
        timeEle.innerText = item.time
        divEle.append(timeEle)
        
        bodyEle.append(divEle)
    })
})
```

### 1.3 URL查询参数

- `http://xxxx.com/xxx/xxx?参数名1=值1&参数名2=值2`: 其中的`参数名1=值1&参数名2=值2`就是查询参数
- 在`axios`中的使用:

```javascript
const params = {
    pname: '河北省'
}

axios({
    url: 'https://hmajax.itheima.net/api/city',
    params
}).then(response => {
    const data = response.data
    const cityCollection = data.list
    cityCollection.forEach((city) => {
        const p = document.createElement('p')
        p.textContent = city
        document.body.append(p)
    })
})
```

### 1.4 案例-根据输入的省份名称和城市名称,查询地区并渲染列表