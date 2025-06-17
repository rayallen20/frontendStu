// string类型: TS中的字符串类型
let message: string = "hello"

// String类型: TS中的String类型是一个对象类型(包装类)
let foo: String = "bar"

// 在JS中, typeof 用于基本类型和对象包装类型时,都会返回"string"(对于基本字符串和String对象都如此)
console.log(typeof message)
console.log(typeof foo)
console.log(typeof foo === typeof message)

// 但是,使用 instanceof 时判断string类型和String类型时,会有区别
// message是基本类型 无法使用instanceof判断
// foo时是String对象 可以使用instanceof判断
// console.log(message instanceof String)      // error TS2358: The left-hand side of an 'instanceof' expression must be of type 'any', an object type or a type parameter.
console.log(foo instanceof String)