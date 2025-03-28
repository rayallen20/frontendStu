# 2-作用域插槽

- 功能: 作用域插槽允许父组件在子组件的插槽中使用子组件的数据

例:

- 在子组件`ShowNames.vue`中,定义了变量`players`,并将该变量作为插槽的属性,写入到插槽上
- 在父组件`App.vue`中,使用`v-slot`指令来接收子组件传递的插槽属性,并在插槽中使用该属性

- `ShowNames.vue`:

```vue
<template>
    <div class="show-names">
        <!-- 定义在slot上的props 称为slot prop -->
        <slot name="player" v-for="(player, index) in players" :player="player" :index="index"></slot>
    </div>
</template>

<script>
export default {
    name: "ShowNames",
    data() {
        return {
            players: [
                "kobe",
                "james",
                "curry",
            ]
        }
    },
}
</script>

<style scoped>
.show-names{
    height: 40px;
}
</style>
```

- 定义在插槽上的属性,通常称为`slot prop`,可以在父组件中使用`v-slot`指令来接收

- `App.vue`:

```vue
<template>
    <div class="app">
        <ShowNames>
            <!--
            v-slot:player="slotProps" 可以在父组件中访问到插槽的属性集合
            可以简写为 #player="slotProps"
             -->
            <template #player="slotProps">
                <span>{{'子组件中的数据: ' + slotProps.index}} - {{'子组件中的数据: ' + slotProps.player}}</span>
            </template>
        </ShowNames>
    </div>
</template>

<script>
import ShowNames from "./components/ShowNames.vue";

export default {
    name: "App",
    components: {
        ShowNames
    },
}
</script>

<style scoped>
span{
    border: 1px solid #999;
    padding: 4px;
    margin: 4px;
}
</style>
```

- `v-slot:插槽名=插槽属性集合`,可以在父组件中访问到插槽的属性集合

- 总结:
  - 如同父组件通过`props`向子组件传递数据一样,子组件也可以通过`slot prop`向父组件传递数据
  - 但是,`slot prop`只能在插槽中使用,而不能在父组件的其他地方使用
  - 这样一来,父组件既能访问到子组件的数据,又仅能访问到和该插槽相关的数据