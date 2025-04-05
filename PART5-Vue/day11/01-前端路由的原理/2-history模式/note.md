# 2-history模式

- `history`API的作用: 改变URL而不刷新页面
  - `replaceState`: 替换原来的路径,改变URL但不支持回退
  - `pushState`: 使用新的路径,改变URL并支持回退
  - `popState`: 用于路径回退
  - `go`: 用于向前或向后改变路径
  - `forward`: 用于向前改变路径
  - `back`: 用于向后改变路径

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>2-history模式</title>
</head>
<body>
<div id="app">
    <a href="#/home">Home</a>
    <a href="#/about">About</a>

    <div class="content">
        Default
    </div>
</div>

<script>
    const linkEleCollection = document.querySelectorAll('a')
    for (let linkEle of linkEleCollection) {
        linkEle.addEventListener('click', (event) => {
            // 1. 阻止默认行为(这里主要是为了阻止页面跳转)
            event.preventDefault()

            // 2. 获取当前点击的链接
            const href = event.target.getAttribute('href')

            // 3. 修改浏览器的地址栏而不刷新页面(支持回退)
            history.pushState({}, "", href)

            // 3. 修改浏览器的地址栏而不刷新页面(不支持回退)
            // history.replaceState({}, "", href)

            changeContent()
        })
    }

    function changeContent() {
        const contentEle = document.querySelector('.content')
        switch (location.hash) {
            case '#/home':
                contentEle.innerHTML = 'Home'
                break
            case '#/about':
                contentEle.innerHTML = 'About'
                break
            default:
                contentEle.innerHTML = 'Default'
        }
    }

    // 4. 监听回退事件
    window.addEventListener('popstate', changeContent)
</script>
</body>
</html>
```