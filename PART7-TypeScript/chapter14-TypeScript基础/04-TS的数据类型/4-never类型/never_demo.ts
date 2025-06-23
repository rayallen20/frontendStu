function neverDemo1():never {
    throw new Error('抛出异常的函数');
}

function neverDemo2():never {
    while (true) {
        console.log('永远不会结束死循环的函数');
    }
}