# 01-内部书写方式

## 1. JS是什么

- 是一种运行在**客户端**(浏览器)的编程语言,可以用来创建动态更新的内容,控制多媒体,制作图像动画等交互效果

## 2. 内部JS

- 直接写在html文件里,用`script`标签包住
- 规范: `script`标签写在`</body>`上面
- 拓展: `alert(‘你好, JavaScript’)` 页面弹出警告对话框

### 2.1 放在`</body>`前的原因

- 将`<script>`放在HTML文件的底部附近的原因: 浏览器会按照**代码在文件中的顺序**加载HTML
- 如果先加载的JavaScript期望修改其下方的HTML,那么它可能由于HTML尚未被加载而失效
- 因此,将JavaScript代码放在HTML页面的底部附近通常是最好的策略