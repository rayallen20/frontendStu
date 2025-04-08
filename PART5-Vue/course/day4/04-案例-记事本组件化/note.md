# 04-案例-记事本组件化

## 1. 实现

### 1.1 组件拆分

- Header
- List
- Footer

### 1.2 数据

- 任务列表数据给List组件
- 当该列表数据变化时,触发全局事件总线中的事件,传递变化后的数组长度给Footer组件
  - 监听器

### 1.3 操作

#### a. Header

- 收集数据,通过全局事件总线把数据发送给List组件
  - 注意发送一个弱引用,因为后续要清除承载这个数据的变量

#### b. List

- 追加/删除操作都会触发监听器

#### c. Footer

- 清空也是通过全局事件总线触发

## 2. 总结

## 2.1 子组件和父组件的生命周期问题

```vue
<template>
  <section id="app">
    <!-- 输入框 -->
    <NoteHeader></NoteHeader>

    <!-- 列表区域 -->
    <NoteList></NoteList>

    <!-- 统计和清空 -->
    <NoteFooter></NoteFooter>
  </section>
</template>
```

以这个模板为例,分析所有组件的生命周期(假设所有组件都是同步渲染的):

1. 父组件`App`的`beforeCreated()`

    父组件开始初始化,此时尚未创建响应式数据和事件

2. 父组件`created()`

    父组件创建完成,此时已经完成响应式数据/计算属性/方法等的初始化,但尚未挂载DOM

3. 父组件`beforeMount()`

    父组件即将开始挂载DOM

4. 子组件开始依次处理

    - `NoteHeader`的`beforeCreated()` -> `created()` -> `beforeMount()`
    - `NoteList`的`beforeCreated()` -> `created()` -> `beforeMount()`
    - `NoteFooter`的`beforeCreated()` -> `created()` -> `beforeMount()`

5. 子组件的`mounted()`依次触发

    - `NoteHeader`的`mounted()`
    - `NoteList`的`mounted()`
    - `NoteFooter`的`mounted()`

6. 父组件的`mounted()`

    此时,父组件完成自身和所有子组件的挂载

因此,在传递数据时:

- `NodeFooter`在`created()`中监听全局事件
- `NodeList`在`mounted()`中触发全局事件
- 这样才能确保`NodeFooter`在`NodeList`触发事件时,已经完成了对事件的监听
- 这个顺序不能错,否则`NodeFooter`中会错过`NodeList`触发的事件
  - 具体的现象就是: 在`NodeFooter`中打印任何信息都不会出现在控制台中
  - 因为触发事件时,`NodeFooter`还没有完成对事件的监听,所以不会触发事件监听器

## 2.2 `NodeFooter`的`created()`中监听的持续监听

```javascript
export default {
  name: 'NoteFooter',
  data() {
    return {
      missionCount: undefined,
    }
  },
  methods: {
    setMissionCount(count) {
      this.missionCount = count
    },
  },
  created() {
    // 通过事件总线 监听兄弟组件传递的任务列表长度 并根据长度更新本组件中的响应式数据
    emitter.on('missionListChange', this.setMissionCount)
  },
}
```

- 在`created()`中监听的全局事件,其事件监听函数(`getMissionCount()`)会更新响应式数据的值
- 相当于实现了一个监听器.相当于`missionListChange`事件一旦触发,`NoteFooter`组件就会更新`missionCount`的值