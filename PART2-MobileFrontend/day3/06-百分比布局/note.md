# 06-百分比布局

- 百分比布局中,元素的宽高要用百分比计算,而不是写一个固定值
- 本例中,li的宽度就是父元素ul的宽度的25%
- 设置图片的高度和div一样高,达到缩放图片的效果
- 最后再让图片垂直居中即可
- 注意:图片默认是基线对齐,所以要设置vertical-align:middle.否则在其他设备上会将li的高度撑高

**百分比布局只能做到宽自适应,高度固定;不能让宽高都自适应**