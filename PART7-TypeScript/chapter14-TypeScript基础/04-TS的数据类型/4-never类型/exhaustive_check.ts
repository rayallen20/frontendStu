// 联合类型 表示该类型的值可以是几种类型中的一种
type Shape = {kind: 'circle', radius: number} | {kind: 'square', len: number} | {kind: 'triangle', base: number, height: number}

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2
    case 'square':
      return shape.len ** 2
    default:
      // 如果没有处理所有可能的情况 则TypeScript会报错
      // Tips: 在 TS或JS中 变量名以 `_` 开头通常表示该变量是"未使用的"或"仅用于占位"
      // Tips: 开发者有意不打算在后续代码中使用它
      // 这是一种常见的命名约定 没有特殊语法意义 仅用于增强代码可读性
      const _exhaustiveCheck: never = shape
      return _exhaustiveCheck // 这里的 never 类型表示这个分支永远不会被执行
  }
}

getArea({kind: 'triangle', base: 3, height: 4})