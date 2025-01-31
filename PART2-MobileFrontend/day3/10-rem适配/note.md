# 10-rem适配

目前rem布局方案中,将网页等分成10份,HTML标签的字号为**视口宽度的1/10**

```javascript
// set 1rem = viewWidth / 10
function setRemUnit () {
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
}
```

注意: 

- 如果在模拟器上调试时,对显示器做了缩放,就会导致模拟器的视口宽度也发生变化,从而导致媒体查询失效
- 所以在调试时,需要将模拟器的缩放比例设置为100%
