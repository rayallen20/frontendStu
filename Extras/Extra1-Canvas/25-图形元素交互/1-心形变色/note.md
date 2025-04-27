# 1-心形变色

- `isPointInPath(path, x, y, fillRule)`: 判断当前路径中是否包含指定点
  - `path`: 需要检测的路径对象
  - `x`: 点的x坐标
  - `y`: 点的y坐标
  - `fillRule`: 确定点是在路径内部还是外部的规则
    - `nonzero`: 非零环绕规则,默认值
    - `evenodd`: 奇偶环绕规则