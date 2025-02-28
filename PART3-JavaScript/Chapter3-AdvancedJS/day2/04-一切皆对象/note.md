# 04-一切皆对象

- 引用类型:
  - Array/Object/RegExp/Date等
- 基础类型:
  - String/Number/Boolean/undefined/null
- 但是,基础类型也有属性和方法,因为这些类型其实也是对象,也有其构造函数,只是JS引擎对其进行了封装,使其看起来像基础类型
- 包装类型:
  - String/Number/Boolean
- 包装类型的执行过程(以String类型为例):
  - step1. 创建一个`String`类型的实例
  - step2. 在实例上调用相应的方法
  - step3. 销毁实例
  - 所以最后只看到了调用方法的结果,并没有看到实例的存在
- JS中几乎所有的数据都可以基于构造函数创建(比如`new Array()/new Object()/new Function()`),只是不同的构造器创建出来的实例有不同的属性和方法