# 03-小兔鲜-最新专题部分

## 1. 结构

### 1.1 图片上的文字和价格

- 绝对定位,定位一个div,这个div放左右两侧的文字(`display: flex; justify-content: space-between;`)
- 这个div从第1行文字开始,到图片底部为高度(因为右侧标签和左侧文字在侧轴方向上是`align-items: center;`的)
- 高: 28(文字) + 42(文字到图片底部的距离) = 70
  - 左侧的div里是2个p
  - 右侧的是1个div,里边直接写文字
    - 79 * 25

### 1.2 收藏/浏览/评论

- collect-box设置`display: flex; justify-content: space-between;`
- 收藏/浏览/评论都是a
- 左侧的收藏和浏览放在1个div里,右侧的评论单独和div同级即可
  - 收藏和浏览之间有外边距20px
- 左右15px内边距