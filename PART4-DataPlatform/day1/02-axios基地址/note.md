# 02-axios基地址

- `axios.defaults.baseURL`:可以设置基地址,这样在请求的时候就不用写完整的地址了
  - 注意: `axios.defaults`是全局的,所以设置了基地址之后,所有的请求都会使用这个基地址

```javascript
// 全局配置基地址 该配置在其他js文件引入axios包时不会生效
// axios.defaults.baseURL = 'https://hmajax.itheima.net'

// 因此需要创建一个可导出的axios实例
export let axiosInstance = axios.create({
    baseURL: 'https://hmajax.itheima.net'
})
```