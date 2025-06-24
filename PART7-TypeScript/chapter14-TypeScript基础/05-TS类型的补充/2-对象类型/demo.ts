function printPoint(point: {x: number, y: number}): void {
    // 使用解构赋值来提取 point 对象的 x 和 y 属性
    const {x, y}: {x: number, y: number} = point;

    // 打印 x 和 y 的值
    console.log(`x: ${x}, y: ${y}`);
}