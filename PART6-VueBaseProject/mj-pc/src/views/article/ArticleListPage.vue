<template>
  <div class="article-list-page">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>面经后台</el-breadcrumb-item>
      <el-breadcrumb-item>面经管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card shadow="never" border="false" v-if="complete">
      <!-- 卡片头部 -->
      <template #header>
        <div class="header">
          <span>共 {{total}} 条记录</span>
          <el-button
            size="small"
            type="primary"
            round
            @click="openDrawer('add')"
          >
            <el-icon>
              <Plus></Plus>
            </el-icon>
            添加面经
          </el-button>
        </div>
      </template>

      <!-- 表格 -->
      <el-table :data="articleList" style="width: 100%" border stripe>
        <el-table-column prop="stem" label="标题" width="400" align="center">
        </el-table-column>

        <el-table-column prop="creator" label="作者" align="center">
        </el-table-column>

        <el-table-column prop="likeCount" label="点赞" align="center">
        </el-table-column>

        <el-table-column prop="views" label="浏览数" align="center">
        </el-table-column>

        <el-table-column prop="createdAt" label="更新时间" align="center" width="200">
        </el-table-column>

        <el-table-column label="操作" align="center" width="120">
          <template #default="scope">
            <div class="actions">
              <el-icon><View @click="openDrawer('preview')" /></el-icon>
              <el-icon><Edit @click="openDrawer('edit')" /></el-icon>
              <el-icon><Delete @click="deleteArticle(scope.row)" /></el-icon>
            </div>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页器 -->
      <el-pagination
        background
        @size-change="changePageSize"
        @current-change="changeCurrentPage"
        :current-page="currentPage"
        :page-sizes="[10, 15, 20, 30]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>

    <!-- 抽屉 -->
    <el-drawer
      v-model="drawerShow"
      :title="drawerTitle"
      close-on-click-modal
      close-on-press-escape
      :before-close="confirmCloseDrawer"
      direction="rtl"
      size="50%"
    >
      <el-form label-width="80px" :model="newArticle" :rules="createArticleRules" ref="newArticleForm">
        <el-form-item label="面经标题" prop="stem">
          <el-input type="text" v-model="newArticle.stem" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="面经内容" prop="content" class="editor-container">
          <div style="border: 1px solid #ccc; margin-top: 10px">
            <Toolbar
              style="border-bottom: 1px solid #ccc"
              :editor="editorRef"
              :defaultConfig="toolbarConfig"
              :mode="mode"
            />
            <Editor
              style="height: 500px; overflow-y: hidden;"
              v-model="newArticle.content"
              :defaultConfig="editorConfig"
              :mode="mode"
              @onCreated="handleCreated"
              @onChange="validateContent"
              @onBlur="validateContent"
            />
          </div>
        </el-form-item>

        <el-form-item class="form-actions">
          <el-button type="primary" @click="handleSubmit">确认</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script setup>
import { Delete, Edit, Plus, View } from '@element-plus/icons-vue'
import articleAPI from '@/api/article'
import { computed, onBeforeUnmount, ref, shallowRef } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

// eslint-disable-next-line
defineOptions({
  name: 'ArticleListPage'
})

// 当前页码
const currentPage = ref(1)

// 每页条数
const pageSize = ref(10)

// 数据列表
const articleList = ref([])

// 数据总条数
const total = ref(0)

// 标记请求是否完成的标量
const complete = ref(false)

// 获取文章列表
const getArticleList = async () => {
  try {
    complete.value = false

    const params = {
      current: currentPage.value,
      pageSize: pageSize.value
    }

    const payload = await articleAPI.getArticleList(params)

    articleList.value = payload.rows
    total.value = payload.total

    complete.value = true
  } catch (error) {
    if (error.response.data.message !== undefined) {
      ElMessage.error(error.response.data.message)
    } else {
      ElMessage.error('请求图表信息失败, 请稍后再试')
    }
  }
}

// 修改每页条数
const changePageSize = (size) => {
  pageSize.value = size
  currentPage.value = 1
  getArticleList()
}

// 修改当前页码
const changeCurrentPage = (page) => {
  currentPage.value = page
  getArticleList()
}

// 控制抽屉显隐的变量
const drawerShow = ref(false)

// 控制打开抽屉后操作类型的变量
const operationType = ref('add')

// 定义抽屉标题的变量
const drawerTitle = computed(() => {
  if (operationType.value === 'add') {
    return '添加面经'
  }

  if (operationType.value === 'edit') {
    return '编辑面经'
  }

  return '面经预览'
})

// 打开抽屉
const openDrawer = (operation) => {
  operationType.value = operation
  drawerShow.value = true
}

// 确认关闭抽屉的函数
const confirmCloseDrawer = (done) => {
  ElMessageBox.confirm('确认关闭吗?').then(() => {
    done()
  }).catch((error) => {
    // 用户取消操作
    console.log('用户取消操作', error)
  })
}

// 新建的面经数据
const newArticle = ref({
  stem: '',
  content: '<p>hello</p>'
})

// 创建面经的校验规则
const createArticleRules = {
  stem: [
    {
      required: true,
      message: '请输入面经标题',
      trigger: [
        'blur',
        'change'
      ]
    }
  ],
  content: [
    {
      required: true,
      message: '请输入面经内容',
      trigger: [
        'blur',
        'change'
      ]
    },
    {
      validator: (rule, value, callback) => {
        if (value === '<p><br></p>') {
          callback(new Error('内容不能为空'))
        } else {
          callback()
        }
      },
      trigger: ['blur', 'change']
    }
  ]
}

// 富文本编辑器相关 start

// 编辑器实例 必须用 shallowRef
const editorRef = shallowRef()

// 工具条配置
const toolbarConfig = {}

// 工具条模式 取值为default或simple
const mode = ref('default')

// 编辑区配置
const editorConfig = ref({ placeholder: '请输入内容...' })

// 创建编辑区的回调
const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例,重要!
}

// 组件销毁时, 也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
// 富文本编辑器相关 end

const newArticleForm = ref(null)

// 针对富文本编辑器内容的单独校验
const validateContent = async () => {
  if (!newArticleForm.value) return

  try {
    await newArticleForm.value.validateField('content')
  } catch (error) {
    console.error('内容校验失败:', error)
  }
}

const handleSubmit = async () => {
  await newArticleForm.value.validate(async (valid) => {
    if (!valid) {
      console.log('表单验证失败')
      return
    }

    try {
      const article = {
        stem: newArticle.value.stem,
        content: newArticle.value.content
      }

      const payload = await articleAPI.addArticle(article)
      console.log(payload)

      // 关闭抽屉
      drawerShow.value = false

      // 清空表单数据
      newArticleForm.value.resetFields()

      // 重新渲染页面
      await getArticleList()

      ElMessage.success('添加面经成功')
    } catch (error) {
      if (error.response.data.message !== undefined) {
        ElMessage.error(error.response.data.message)
      } else {
        ElMessage.error('创建面经失败, 请稍后再试')
      }
    }
  })
}

const deleteArticle = async (row) => {
  const id = row.id
  try {
    const payload = await articleAPI.deleteArticle(id)
    console.log(payload)
    ElMessage.success('删除面经成功')

    // 重新获取文章列表
    await getArticleList()
  } catch (error) {
    if (error.response.data.message !== undefined) {
      ElMessage.error(error.response.data.message)
    } else {
      ElMessage.error('删除面经失败, 请稍后再试')
    }
  }
}

// 页面加载时获取数据
getArticleList()
</script>

<style lang="scss" scoped>
.el-card {
  margin-top: 25px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 16px;
  }
  .actions {
    font-size: 18px;
    display: flex;
    justify-content: space-around;
    color: #666;
    > i:hover {
      color: rgba(114, 124, 245, 1);
      cursor: pointer;
    }
  }
}
.el-pagination {
  margin-top: 20px;
  text-align: center;
  // 分页器水平居中显示
  display: flex;
  justify-content: center;
}
.el-breadcrumb {
  margin-top: 10px;
}
.el-form {
  padding-right: 40px;
}
.el-rate {
  padding: 10px 0;
}
.article-preview {
  padding: 0 40px 40px 40px;
  > h5 {
    font-size: 20px;
    color: #666;
    border-bottom: 1px dashed #ccc;
    padding-bottom: 30px;
    margin: 0 0 20px 0;
  }
}

.form-actions :deep(.el-form-item__content) {
  display: flex;
  justify-content: flex-end; // 右对齐
  // 如果按钮之间距离太小可以加 gap
  gap: 12px;
}
</style>
