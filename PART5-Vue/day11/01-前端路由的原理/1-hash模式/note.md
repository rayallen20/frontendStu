# 1-hash模式

- 例: `<a href="#/home"></a>`中的`#/home`就是哈希路由,是一种实现客户端路由的方式
- 这种方式不会触发页面刷新,而是尝试寻找页面中`id=home`的元素,并滚动到该元素的位置(若未找到则页面无变化)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>1-hash模式</title>
</head>
<body>
<div id="app">
    <!-- 1. 单击a元素 修改URL的hash值 -->
    <a href="#/home">Home</a>
    <a href="#/about">About</a>

    <div class="content">
        Default
    </div>
</div>

<script>
    // 2. 根据URL的hash值来渲染不同的内容
    function changePage() {
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
    
    changePage()
    
    // 3. 监听hash值的变化
    window.addEventListener('hashchange', changePage)
</script>
</body>
</html>
```