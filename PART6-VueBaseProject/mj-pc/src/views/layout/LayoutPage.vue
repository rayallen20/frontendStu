<template>
  <el-container class="layout-page">
    <!-- 左侧菜单 -->
    <el-aside>
      <div class="logo">黑马面经</div>

      <!-- 菜单部分 -->
      <!-- router: 是否开启路由模式 开启后则使用 el-menu-item的index属性值作为路由跳转的路径 -->
      <!-- :default-active="$router.path": 使用当前页面的路由作为默认激活的菜单项 -->
      <!-- 但是这里的$router.path是/ 没法对应上index 所以直接写死了 -->
      <el-menu
        router
        default-active="dashboard"
        background-color="#313A46"
        text-color="#8391A2"
        active-text-color="#FFFFFF"
      >
        <!-- route: 用于定义跳转路由 -->
        <el-menu-item index="dashboard" :route="{name: 'dashboard'}">
          <el-icon><PieChart /></el-icon>
          <span>数据看板</span>
        </el-menu-item>

        <el-menu-item index="articleList" :route="{name: 'articleList'}">
          <el-icon><Notebook /></el-icon>
          <span>面经管理</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <!-- 右侧区域 -->
    <el-container>
      <el-header>
        <div class="user">
          <el-avatar :size="36" :src="user.avatar"></el-avatar>
          <el-link underline="never">{{user.username}}</el-link>
        </div>

        <div class="logout">
          <el-popconfirm
            title="您确认退出黑马面运营后台吗?"
            confirm-button-text="确认"
            cancel-button-text="取消"
            width="240px"
            icon-color="#f90"
            @confirm="logout"
          >
            <template #reference>
              <el-icon><SwitchButton /></el-icon>
            </template>
          </el-popconfirm>
        </div>
      </el-header>

      <el-main>
        <!-- 二级路由出口 -->
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </el-container>

</template>

<script setup>
import { Notebook, PieChart, SwitchButton } from '@element-plus/icons-vue'
import userAPI from '@/api/user'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import router from '@/router'

// eslint-disable-next-line
defineOptions({
  name: 'DashBoardPage'
})

const user = ref({})

const getUser = async () => {
  try {
    const userData = await userAPI.getUser()
    user.value.avatar = userData.avatar
    user.value.name = userData.name
    user.value.username = userData.username
    user.value.id = userData.id
  } catch (error) {
    if (error.response.data.message !== undefined) {
      ElMessage.error(error.response.data.message)
    } else {
      ElMessage.error('请求用户信息失败, 请稍后再试')
    }
  }
}

const logout = async () => {
  localStorage.removeItem('mj-pc-token')
  await router.push({ name: 'login' })
}

getUser()
</script>

<style scoped>
.layout-page {
  height: 100vh;
  .el-aside {
    width: 200px;
    background: #313a46;
    .logo {
      color: #fff;
      font-size: 20px;
      height: 60px;
      line-height: 60px;
      text-align: center;
    }
    .el-menu {
      border-right: none;
      margin-top: 20px;
      &-item {
        background-color: transparent !important;
        > span,
        i {
          padding-left: 5px;
        }
      }
    }
  }
  .el-header {
    box-shadow: 0 0 35px 0 rgba(154, 161, 171, 0.15);
    background: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 999;
    .user {
      display: flex;
      align-items: center;
      background: #fafbfd;
      height: 60px;
      border: 1px solid #f1f3fa;
      padding: 0 15px;
      .el-avatar {
        margin-right: 15px;
      }
    }
    .logout {
      font-size: 20px;
      color: #999;
      cursor: pointer;
      padding: 0 15px;
    }
  }
}
</style>
