# 13-数组操作-splice

- `array.splice(startIndex, deleteCount, item1, item2..., itemN)`方法:删除/替换/添加元素
  - `startIndex`:开始操作的索引位置
    - 若为负数,则从数组末尾开始计算
    - 若大于数组长度,则从数组末尾开始计算
  - `deleteCount`:删除的元素个数
    - 若为0,则表示添加元素
      - 可以认为是删除0个元素
    - 若删除数量大于剩余元素数量,则表示从`startIndex`的位置开始删除所有元素
  - `item1, item2..., itemN`:要添加到数组的元素