# 08-本地存储

- 使用场景: 
  - 关闭浏览器后,再次打开浏览器,之前的数据还在
  - 页面刷新后,之前的数据还在
- 优点:
  - 页面刷新或者关闭不丢失数据,实现数据持久化
  - 容量较大,`sessionStorage`和`localStorage`约5M左右

## 1. localStorage

- 作用: 数据可以长期保留在本地浏览器中,刷新页面和关闭页面,数据也不会丢失
- 特性: 以键值对的形式存储,并且存储的是**String**类型的value
- 作用域: 不同域名(不同源)的数据不共享
- 清除缓存的影响: 在清除缓存时勾选`包括"Cookies 和其他网站数据"`则会清除`localStorage`数据
- 不支持过期时间设置,这个功能需要自己实现
- 语法:
  - 存储数据: `localStorage.setItem(key, value)`
    - 就算存了一个其他类型的value,读出来也是string类型
  - 读取数据: `localStorage.getItem(key)`
    - 读不到则返回`null`
  - 删除数据: `localStorage.removeItem(key)`
  - 清空数据: `localStorage.clear()`

## 2. sessionStorage

- 和`localStorage`的区别:
  - `sessionStorage`的数据在刷新页面后仍然存在
  - `sessionStorage`的数据在关闭浏览器后会被清除
  - `sessionStorage`的数据只在当前标签页中有效,即使是同源的不同标签页也不共享数据
- 语法:
  - 存储数据: `sessionStorage.setItem(key, value)`
  - 读取数据: `sessionStorage.getItem(key)`
  - 删除数据: `sessionStorage.removeItem(key)`
  - 清空数据: `sessionStorage.clear()`