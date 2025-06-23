function foo() :string {
    return "abc"
}

function bar() :number {
    return 123
}

let flag = true
let result: unknown

if (flag) {
    result = foo()
} else {
    result = bar()
}

console.log(result)

// 以下赋值会报错 因为unknown类型只能赋值给any/unknown类型 不能赋值给其他类型
// let message :string = result // Type unknown is not assignable to type string
// let number :number = result // Type unknown is not assignable to type number