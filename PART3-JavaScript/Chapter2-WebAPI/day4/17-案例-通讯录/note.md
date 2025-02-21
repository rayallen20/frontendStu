# 17-案例-通讯录

## 1. 需求

- 渲染数据
- 滑动显示删除按钮
- 新增数据
- 删除数据

## 2. 实现

### 2.1 渲染数据

- step1. 清除`.address-book`中的内容
  - `const bookEle = document.querySelector('.address-book')` 
  - `bookEle.replaceChildren()`
- step2. 创建`.item`元素
  - 2.1 创建元素:
    - `const itemEle = document.createElement('div')`
    - `itemEle.classList.add('item')`
  - 2.2 添加子元素
    - 2.2.1 添加`.circle`
      - `const circleEle = document.createElement('p')`
      - `circleEle.classList.add('circle')`
      - `itemEle.append(circleEle)`
    - 2.2.2 添加`.name`
      - `const nameEle = document.createElement('p')`
      - `nameEle.classList.add('name')`
      - `nameEle.innerHTML = name`
      - `itemEle.append(nameEle)`
    - 2.2.3 添加`.tel`
      - `const telEle = document.createElement('p')`
      - `telEle.classList.add('tel')`
      - `telEle.innerHTML = tel`
      - `itemEle.append(telEle)`
    - 2.2.4 添加`.del`
      - ①. 创建字体图标
        - `const fillEle = document.createElement('i')`
        - `fillEle.classList.add('iconfont', 'icon-shanchutianchong')`
      - ②. 创建删除按钮(`a`链接)
        - `const delEle = document.createElement('a')`
        - `delEle.classList.add('del')`
        - `delEle.href = 'javascript:'`
        - `delEle.append(fillEle)`
      - ③. 添加删除按钮
        - `itemEle.append(delEle)`
  - 2.3 添加`.item`
    - `bookEle.append(itemEle)`

### 2.2 滑动显示删除按钮

#### 2.2.1 功能

- `.item`在没有`.active`时,左滑增加`.active`类,显示删除按钮
- 左滑时清除所有有`.active`的`.item`的`.active`类
- `.item`在有`.active`时,右滑删除`.active`类,隐藏删除按钮

#### 2.2.2 实现

- step1. 实现事件处理函数
  - 1.1 检测元素当前是否有`.active`类
    - `const isActive = this.classList.contains('active')`
  - 1.2 左滑: 在没有`.active`时,增加`.active`类
    - `if (!isActive) { this.classList.add('active') }`
  - 1.3 右滑: 在有`.active`时,删除`.active`类
    - `if (isActive) { this.classList.remove('active') }`
- step2. 在`createItem()`函数中,创建`itemEle`之后,注册`swipe`事件

### 2.3 新增数据

#### 2.3.1 功能

- 点击`#add`时:
  - 获取`#name`的值
  - 获取`#tel`的值
  - 验证`#name`和`#tel`的值是否为空
  - 使用这两个值调用`createItem()`函数
  - 将`#name`和`#tel`的值清空
  - 将创建的`.item`元素添加到`.address-book`中

#### 2.3.2 实现

- step1. 校验数据
- step2. 调用`createItem()`函数
- step3. 清空`#name`和`#tel`的值
- step4. 将创建的`.item`元素添加到`.address-book`中

### 2.4 删除数据

- step1. 事件处理函数在创建`.del`时就要注册到DOM上
  - `delEle.addEventListener('click', delItem)`
- step2. 找到`.del`的父元素`.item`
  - `const targetItemEle = this.parentElement`
- step3. 删除`.item`
  - `targetItemEle.remove()`