function printPoint2(point: { x: number; y: number; z?: number }): void {
  console.log(`x: ${point.x}, y: ${point.y}, z: ${point.z}`);
}

printPoint2({ x: 1, y: 2 });
printPoint2({ x: 10, y: 20, z: 30 });