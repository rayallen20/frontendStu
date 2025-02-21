# 10-增加节点

- 增加节点分为2步:
  - step1. 创建节点
    - document.createElement(tagName)
  - step2. 添加节点
    - `parentNode.append(childNode)`: 在父节点的最后一个子节点后添加一个新的子节点
    - `parentNode.prepend(childNode)`: 在父节点的第一个子节点前添加一个新的子节点
    - `parentNode.insertBefore(newNode, referenceNode)`: 在父节点的referenceNode子节点前添加一个新的子节点
      - 注意: 没有`insertAfter()`方法, 但可以通过`insertBefore()`方法实现
    - `parentNode.replaceChild(newNode, oldNode)`: 替换父节点的子节点