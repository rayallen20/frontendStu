# 2-keep-alive的属性

- `include`: 支持String/RegExp.Array,表示需要缓存的组件名或组件名的正则表达式
- `exclude`: 支持String/RegExp.Array,表示不需要缓存的组件名或组件名的正则表达式
- `max`: 支持Number/String,表示缓存组件的最大数量,超过这个数量后,未使用时长最久的组件会被销毁

- 例: 仅缓存`HomeCpn`和`AboutCpn`组件,可以按如下写法:

1. String写法

    ```vue
    <!--1. 用,分隔组件名称,注意,前后没有空格,否则失效-->
    <keep-alive include="HomeCpn,AboutCpn">
        <component
            :is="currentTab"
            :name="name"
            :age="age" @cpnClick="handleCpnClick"></component>
    </keep-alive>
    ```

2. RegExp写法

    ```vue
    <!--2. 正则表达式 注意正则表达式的=右侧是一个表达式,因此应该使用:include(v-bind)指令-->
    <keep-alive :include="/HomeCpn|AboutCpn/">
        <component
            :is="currentTab"
            :name="name"
            :age="age" @cpnClick="handleCpnClick"></component>
    </keep-alive>
    ```

3. Array写法

   ```vue
   <!--3. Array写法的=右侧相当于也是个表达式 所以也要用:include-->
   <keep-alive :include="['HomeCpn', 'AboutCpn']">
       <component
           :is="currentTab"
           :name="name"
           :age="age" @cpnClick="handleCpnClick"></component>
   </keep-alive>
   ```