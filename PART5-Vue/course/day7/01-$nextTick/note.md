# 01-$nextTick

- 在Vue中,更改响应式状态时,DOM的更新并非和数据更新同步生效,而是由Vue将它们缓存在一个队列中,直到下一个"tick"才一起执行
  - 这样设计是为了确保每个组件无论发生多少状态改变,都仅执行1次更新
- `$nextTick()`: 在状态改变后立即调用`$nextTick()`,可以等待DOM更新完成
  - 该方法接受一个回调作为参数,或者返回一个Promise

## 1. 需求

- 输入框和确认按钮默认隐藏
- 点击编辑显示
- 显示后立即获取焦点

## 2. 错误的实现

```vue
<template>
    <div>
        <div class="title">
            <h2>大标题</h2>
            <button @click="showForm()">编辑</button>
        </div>
        <div class="form" v-if="isShow">
            <input type="text" ref="textInput"/>
            <button>确认</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        showForm() {
            this.isShow = !this.isShow;

            // 此时只是修改了数据 并没有更新DOM
            // 而 textInput 也没有渲染到DOM中
            if (this.isShow) {
                const textInput = this.$refs.textInput
                // 所以这里会报错
                textInput.focus()
            }
        }
    }
}
</script>

<style scoped>
.title {
    width: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.title button {
    margin-left: 5px;
}
</style>
```

## 3. 正确的实现

```vue
<template>
    <div>
        <div class="title">
            <h2>大标题</h2>
            <button @click="showForm()">编辑</button>
        </div>
        <div class="form" v-if="isShow">
            <input type="text" ref="textInput"/>
            <button>确认</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        showForm() {
            this.isShow = !this.isShow

            // 传入一个回调 当下一次DOM更新执行完成后执行
            this.$nextTick(() => {
                if (this.isShow) {
                    this.$refs.textInput.focus()
                }
            })
        }
    }
}
</script>

<style scoped>
.title {
    width: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.title button {
    margin-left: 5px;
}
</style>
```

## 4. 使用场景

1. 在修改数据后立刻得到更新后的DOM结构时使用
2. 在`created()`生命周期中进行DOM操作时使用