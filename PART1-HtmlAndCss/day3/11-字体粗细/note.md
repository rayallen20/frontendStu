# 11-字体粗细

## 1. 属性名

- 属性名: `font-weight`

## 2. 属性值

数字型属性值(**开发常用**):

| 效果 | 取值  |
|:--:|:---:|
| 正常 | 400 |
| 加粗 | 700 |

数字型的取值可以是100-900之间的100的倍数,其中400表示正常,700表示加粗.这也是为什么经常使用数字而不使用关键字的原因,因为用数字控制粗细更加精确.

关键字属性值:

| 效果 |    取值    |
|:--:|:--------:|
| 正常 | `normal` |
| 加粗 |  `bold`  |

## 3. 使用场景

有一些标题标签,其中的内容并不需要加粗,但是默认的标题标签是加粗的,这时候就可以使用`font-weight`属性来设置字体的粗细.

