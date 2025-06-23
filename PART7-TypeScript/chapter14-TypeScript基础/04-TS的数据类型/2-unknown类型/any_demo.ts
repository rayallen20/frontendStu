let fooDemo :any = 123;
fooDemo = "abc"; // any类型可以赋值为任意类型
fooDemo = {
    bar: true
};

// 对any类型调用任何方法都不会报错
fooDemo.toUpperCase();  // 这是一个string类型的方法 但使用any类型调用 在编译期不会报错(因为编译期不检查any类型)
fooDemo.notExistMethod(); // 这是一个不存在的方法 但使用any类型调用不会报错 在编译期不会报错(因为编译期不检查any类型)
