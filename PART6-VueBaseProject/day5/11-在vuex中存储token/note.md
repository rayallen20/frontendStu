# 11-在vuex中存储token

- vuex是在内存中读写数据,速度比localStorage快
- 登录之后,把token存储到vuex中
  - 在state中的token也还是从localStorage中读取的
  - 只是登录之后,在mutations中修改了state中的token,然后也修改了localStorage中的token
- 登出操作,把vuex中的token清除
  - 涉及到token修改的操作,都会同时修改vuex中的token和localStorage中的token
- 请求拦截器,从vuex中获取token,添加到请求头中
  - 这一步的token是从state中获取的,而不是从localStorage中获取的
- 响应拦截器,401时,清除vuex中的token
  - 这一步会修改localStorage中的token,因为vuex中的token是从localStorage中读取的

- 注意: 在`request.js`中直接使用store,不是`userStore()`,而是直接导入(`import store from '@/store'`)