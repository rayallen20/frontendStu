# 1-基本使用

- `clip()`/`clip(path)`/`clip(fillRule)`/`clip(path, fillRule)`:
    - `clip()`：裁剪当前路径
    - `clip(path)`：裁剪指定路径
        - `path`: 要裁剪的路径
    - `clip(fillRule)`：裁剪当前路径,使用指定的填充规则
        - `fillRule`: 填充规则
            - `nonzero`：非零环绕规则
            - `evenodd`：奇偶环绕规则
            - [规则的逻辑](https://zhuanlan.zhihu.com/p/113411760)
    - `clip(path, fillRule)`：裁剪指定路径,使用指定的填充规则