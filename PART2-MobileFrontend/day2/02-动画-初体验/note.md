# 02-动画-初体验

## 1. 定义动画

```css
@keyframes 动画名称 {
    from{} /* 开始状态 */
    to{}   /* 结束状态 */
}
```

```css
@keyframes 动画名称 {
    0% {}
    10% {}
    20% {}
    /* 中间不一定是均匀变化的 可能是30% 50% 不一定非得是20% 30% */
    100% {}
}
```

这里的0%/10%,可以认为是动画的关键帧,也就是动画播放了0%时的状态,10%时的状态,20%时的状态,100%时的状态

在各个关键帧之间,浏览器会自动计算出中间状态,并进行渲染.也就是俗称的"补帧"

## 2. 使用动画

```css
元素 {
    animation: 动画名称 动画时长 速度曲线 延迟时间 重复次数 动画方向 执行完毕时的状态;
}
```