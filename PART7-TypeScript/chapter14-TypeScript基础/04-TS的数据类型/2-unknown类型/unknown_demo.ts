let fooDemo1 :unknown = 123;
fooDemo1 = "hello";
fooDemo1 = {
    bar: true,
};

// fooDemo1.toUpperCase(); // Property toUpperCase does not exist on type unknown
// fooDemo1.notExistMethod(); // Property toUpperCase does not exist on type unknown

// 对unknown类型做任何操作之前 必须先进行类型检查或类型断言
if (typeof fooDemo1 === "string") {
    let fooDemoStr :string = fooDemo1.toUpperCase(); // 类型检查通过后才能调用toUpperCase方法
    console.log(fooDemoStr);
}

let barProperty :boolean = (fooDemo1 as { bar: boolean}).bar; // 类型断言通过后才能访问bar属性
console.log(barProperty);