# 03-视口

- 视口(viewport): 设备屏幕上用于显示网页的区域

网页宽度是980px,而手机(iPhone 6/7/8)的宽度是375px,网页只能缩小,才能在手机上显示完整

乔布斯定义了所有在移动端上显示的网页,其宽度默认都是980px,这也就是为什么刚才显示的网页宽度为980px的原因

那此时我们就有了2个大小:

- 网页宽度: 980px
- 设备宽度(视口): 375px

所谓调整视口,就是指调整网页的宽度,使其等于设备的逻辑分辨率,这样就可以在移动端上显示完整的网页

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```

- `name="viewport"`: 表示该meta标签是用来设置视口的
- `width=device-width`: 表示视口的宽度等于设备的宽度
- `initial-scale=1.0`: 表示初始缩放比例为1.0.或者可以认为内容缩放的比例
  - `initial-scale=2.0`就是放大2倍
  - `initial-scale=0.5`就是缩小0.5倍