function loopFoo() :never {
    while (true) {
        console.log('永远不会结束死循环的函数');
    }
}

function loopBar() :never {
    throw new Error('必然抛出异常的函数');
}