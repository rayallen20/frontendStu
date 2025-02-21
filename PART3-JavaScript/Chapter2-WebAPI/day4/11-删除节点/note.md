# 11-删除节点

- `DOM.remove()`: 删除节点
- `parentNode.removeChild(child)`: 删除子节点
- `parentNode.innerHTML = ''`: 清空子节点
- `parentNode.textContent = ''`: 清空子节点
- `parentNode.replaceChildren()`:
  - `parentNode.replaceChildren(newChild1, newChild2, ...)`: 替换所有子节点
  - `parentNode.replaceChildren()`: 清空所有子节点