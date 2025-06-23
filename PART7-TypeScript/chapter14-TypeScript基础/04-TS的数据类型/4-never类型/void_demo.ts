function voidDemo(): void {
    console.log("一个可以正常执行完毕但没有返回值或返回undefined的函数");
    return undefined;
}

const result = voidDemo();  // result的类型被推断为void 但实际上它的值是undefined
console.log(result);