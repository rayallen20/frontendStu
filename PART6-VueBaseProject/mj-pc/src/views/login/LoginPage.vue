<template>
  <div class="login-page">
    <el-card>
      <!-- 卡片头部区域 -->
      <template #header>
        面经后台管理系统
      </template>
      <!-- 卡片内容区域 -->
      <!-- label-width: 表单标签的宽度 -->
      <!-- model: 表单数据的绑定对象 -->
      <!-- rules: 验证规则 -->
      <el-form :model="account" :rules="rules" ref="accountRef" label-width="60px">
        <!-- el-form-item: 类似原生的 <label>标签的作用 -->
        <!-- label属性: 表单标签的内容 -->
        <!-- prop: 值需要和数据项的键名相同 验证规则才生效 -->
        <el-form-item label="账号" prop="username">
          <!-- autocomplete: 表单自动补全 -->
          <el-input type="text" v-model="account.username" autocomplete="off" />
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <!-- show-password: 显示密码框输入时的切换按钮 -->
          <el-input type="password" v-model="account.password" autocomplete="off" show-password />
        </el-form-item>

        <el-form-item class="align-center">
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import userAPI from '@/api/user'
import router from '@/router'
import { ElMessage } from 'element-plus'

// eslint-disable-next-line
defineOptions({
  name: 'LoginPage'
})

const account = reactive({
  username: 'admin',
  password: 'admin'
})

const rules = {
  // 键名需要和数据项的键名相同 验证规则才生效 键名表示要校验的字段
  username: [
    {
      required: true,
      message: '请输入账号',
      // 触发时机:
      // blur: 失去焦点时验证
      // change: 值变化时验证
      trigger: [
        'blur',
        'change'
      ]
    },
    {
      min: 3,
      max: 20,
      message: '账号长度在3-20个字符之间',
      trigger: [
        'blur',
        'change'
      ]
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: [
        'blur',
        'change'
      ]
    },
    {
      min: 5,
      max: 20,
      message: '密码长度在5-20个字符之间',
      trigger: [
        'blur',
        'change'
      ]
    }
  ]
}

const accountRef = ref()

const onSubmit = async () => {
  await accountRef.value.validate(async (valid) => {
    if (!valid) {
      // 已经通过rules给出提示了 这里不需要再弹窗提示了 直接return即可
      console.log('表单验证失败')
      return
    }

    try {
      const payload = await userAPI.login(account)
      localStorage.setItem('mj-pc-token', payload.token)
      ElMessage.success('登录成功')
      setTimeout(() => {
        router.push({ name: 'dashboard' })
      }, 1000)
    } catch (error) {
      if (error.response.data.message !== undefined) {
        ElMessage.error(error.response.data.message)
      } else {
        ElMessage.error('登录失败, 请稍后再试')
      }
    }
  })
}

const onReset = () => {
  // 重置表单数据
  // 注意: 重置不是清空 而是将表单数据重置为初始值(就是model中定义的值)
  accountRef.value.resetFields()
}
</script>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background: url("@/assets/login-bg.svg") no-repeat center center / cover;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .el-alert {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 420px;
    z-index: 2000;
    border-radius: 10px;
  }
  // element-plus中 组件名即为类名
  .el-card {
    width: 420px;
    // 样式穿透 在父组件的样式中使用 :deep() 来穿透到子组件的样式
    :deep(.el-card__header) {
      height: 80px;
      background: rgba(114, 124, 245, 1);
      text-align: center;
      line-height: 40px;
      color: #fff;
      font-size: 18px;
    }
    .el-form {
      padding: 0 20px;
      :deep(.align-center) {
        // 确保表单项目宽度100%
        width: 100%;
        // 使用flex布局
        display: flex;
        // 水平居中
        justify-content: center;
        // 移除可能的内边距
        padding-left: 0;
        padding-right: 0;
        // 按钮间距
        gap: 16px;

        // 确保按钮容器没有额外样式
        .el-form-item__content {
          display: flex;
          justify-content: center;
          margin-left: 0 !important;
        }
      }
    }
  }
}
</style>
