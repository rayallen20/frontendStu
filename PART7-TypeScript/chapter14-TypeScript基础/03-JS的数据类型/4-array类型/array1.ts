const names :string[] = ["Alice", "Bob", "Charlie"];
// 注意: 此时数组是有类型的, 只能存储string类型的元素
// names.push(1) // error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(names);