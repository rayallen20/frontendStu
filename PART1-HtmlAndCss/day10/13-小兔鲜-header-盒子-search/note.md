# 13-小兔鲜-header-盒子-search

1. 他缩短了ul的宽,目的是为了做搜索框获得焦点时变宽的效果
2. 所以input框的div的宽度是input展开后的宽度
3. placeholder是有颜色的(#cccccc)
    ```css
    /* 修改placeholder的样式 */
    input::placeholder {
        color: #cccccc;
    }
    ```
4. 所有有过渡效果的地方,要写`transition: all 0.5s;`别忘了写`all`
5. 他的放大镜字体图标也是有30的行高,这个看来就是字体图标默认的行高
6. 这个地方不是拿a包的,是用js做的,所以这里只需要调整鼠标样式即可