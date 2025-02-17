# 05-案例-事件委托版本的tab切换

## 1. 需求

- 鼠标移动到哪个选项卡,则哪个选项卡样式改变
- 底下的图片也跟着改变

## 2. 思路

### 2.1 修改a元素的样式

- 事件委托: 委托给ul元素,`event.target`是a元素,`this`是`ul`元素
  - `mouseover`事件(因为`mouseenter`不冒泡)
  - step1. 清除所有的a的`active`类
    - ① `this.children`即所有的`li`
    - ② 对于每个`li`,`li.children[0]`即为每个`li`中的`a`
  - step2. 当前的`a`(`event.target`)添加`active`类

### 2.2 修改图片

- step1. 获取当前`a`的父元素
  - `event.target.parentElement`
- step2. 仅当当前元素的父元素为`LI`时,计算该`li`的索引
  - `Array.from(this.children).indexOf(event.target.parentElement)`
- step3. 删除所有图片的`active`类
- step4. 为当前图片添加`active`类

## 3. 讲解

- 这里的排他就不再使用循环了,而是直接找`ulElement.querySelector('.active')`
- 找图片时,使用的是自定义属性的方式,为每个`a`添加了一个自定义属性`data-index`,该属性的值即为a对应的img的索引