function printMessageLength(message?: string): void {
    // 使用非空断言操作符 跳过TS在编译阶段的undefined检查
    console.log(message!.length)
}

printMessageLength()
