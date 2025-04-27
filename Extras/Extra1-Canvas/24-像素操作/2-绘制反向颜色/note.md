# 2-绘制反向颜色

- `putImageData(imageData, dx, dy)`:
    - `imageData`: 要绘制的`ImageData`对象
    - `dx`: 绘制到画布上的x轴坐标
    - `dy`: 绘制到画布上的y轴坐标
- 注意: `ImageData`对象的属性是只读的,不能直接修改,所以:
  - step1. 使用`getImageData`方法获取`ImageData`对象
  - step2. 读取并修改它的属性值创建一个新的`ImageData`对象
  - step3. 将新的`ImageData`对象绘制到画布上
- 反向颜色: `255 - R`/`255 - G`/`255 - B`(透明度保持不变即可)