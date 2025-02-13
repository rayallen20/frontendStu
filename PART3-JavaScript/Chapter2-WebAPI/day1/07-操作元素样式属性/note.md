# 07-操作元素样式属性

## 1. 操作样式的方式

- 通过style属性操作CSS
- 通过className操作class
- 通过classList操作class

## 2. 通过style属性操作CSS

- 语法: `对象.style.属性名 = 值`
- 功能: 等价于为元素添加内联样式

## 3. 案例-随机更换背景图片

- 获取`body`元素的方式: `document.body`

## 4. 通过className操作class

- 语法: `对象.className = 值`
- 功能: 为元素添加或删除class
- 使用场景: 通常用于获取元素的class属性值,很少用于修改class属性值

## 5. 通过classList操作class

- `对象.classList.add(类名)`: 添加类名
  - 类名可以是多个,用空格隔开
- `对象.classList.remove(类名)`: 删除类名
  - 类名可以是多个,用空格隔开
- `对象.classList.toggle(类名)`: 切换类名(有则删除,无则添加)
- `对象.classList.contains(类名)`: 判断是否包含类名
- **注意: 相同权重下,后定义(书写)的样式会覆盖先定义(书写)的样式**

## 6. 操作方式的选择

- 修改的样式较少时,使用style属性
- 获取元素的类名时,使用className
- 修改类名时,使用classList