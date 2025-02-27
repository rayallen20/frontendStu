# 25-作业-数组元素筛选

## 1. 需求

已知有以下数据:

```javascript
const data = [
    {
        sku: '1001',
        name: 'iPhone 7 Plus 128G 玫瑰金色 移动联通电信4G手机',
        is5G: false,
        price: 6188,
        count: 100, // 库存
        suggestions: [
            '1002',
            '1003',
            '1004',
        ], // 相关推荐
    },
    {
        sku: '1002',
        name: 'iPhone 14 Pro 256G 深空灰色 移动联通电信5G手机',
        is5G: true,
        price: 9999,
        count: 100,
        suggestions: [
            '1001',
            '1003',
        ],
    },
    {
        sku: '1003',
        name: 'iPhone 14 Pro Max 256G 深空灰色 移动联通电信5G手机',
        is5G: true,
        price: 10999,
        count: 0,
        suggestions: [
            '1001',
            '1002',
        ],
    },
    {
        sku: '1004',
        name: 'iPhone 14 Pro Max 256G 白色 移动联通电信5G手机',
        is5G: true,
        price: 10999,
        count: 9,
        suggestions: [
            '1001',
        ],
    },
]
```

请完成以下需求:

- 找出所有5G手机
- 找出所有有货的手机
- 找出所有有货的5G手机