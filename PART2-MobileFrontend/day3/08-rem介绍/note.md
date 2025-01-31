# 08-rem介绍

- rem: 是相对单位
- rem单位: root em,相对于根元素的字体大小
  - 引入`flexible.js`,即可动态设置根元素(`html`)的字体大小
  - 默认情况下,网页的根元素字体大小为`16px`,即`1rem = 16px`
- `1rem = 1html元素的字体大小`

例:

```css
html {
  font-size: 16px; /* 根元素字体大小 */
}

p {
  font-size: 1rem; /* 1rem = 16px */
}

h1 {
  font-size: 2rem; /* 2rem = 32px */
}
```