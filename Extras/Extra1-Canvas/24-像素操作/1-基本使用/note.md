# 1-基本使用

- `getImageData(sx, sy, sw, sh, settings)`: 返回一个`ImageData`对象,用于描述canvas指定区域的隐含像素数据
    - `sx`: 要提取`ImageData`的矩形左上角的x轴坐标
    - `sy`: 要提取`ImageData`的矩形左上角的y轴坐标
    - `sw`: 要提取`ImageData`的矩形的宽度,正值向右延伸,负值向左延伸
    - `sh`: 要提取`ImageData`的矩形的高度,正值向下延伸,负值向上延伸
    - `settings`: 可选参数,用于设置`ImageData`的属性
        - `srgb`: sRGB色彩空间
        - `display-p3`: Display P3色彩空间
- 返回值: 包含指定矩形的画布图像数据的ImageData对象
    - 矩形的左上角坐标为`(sx, sy)`,右下角坐标为`(sx + sw - 1, sy + sh - 1)`
- [ImageData对象的属性](https://developer.mozilla.org/zh-CN/docs/Web/API/ImageData#%E5%B1%9E%E6%80%A7)