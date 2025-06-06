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
            @click="openDrawer('add', null)"
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
              <el-icon><View @click="openDrawer('preview', scope.row.id)" /></el-icon>
              <el-icon><Edit @click="openDrawer('edit', scope.row.id)" /></el-icon>
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
      <!-- 添加/修改的表单 -->
      <el-form
        label-width="80px"
        :model="article"
        :rules="createArticleRules"
        ref="newArticleForm"
        v-if="operationType !== 'preview'"
      >
        <el-form-item label="面经标题" prop="stem">
          <el-input type="text" v-model="article.stem" autocomplete="off"></el-input>
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
              v-model="article.content"
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
          <el-button @click="drawerShow = false">取消</el-button>
        </el-form-item>
      </el-form>

      <!-- 预览内容 -->
      <div v-else class="article-preview">
        <h5>{{article.stem}}</h5>
        <div v-html="article.content"></div>
      </div>
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
const openDrawer = async (operation, id) => {
  operationType.value = operation

  // 预览和编辑操作需要先获取文章数据
  if (operation === 'preview' || operation === 'edit') {
    try {
      const payload = await articleAPI.detailArticle(id)
      article.value.id = payload.id
      article.value.stem = payload.stem
      article.value.content = payload.content
    } catch (error) {
      if (error.response.data.message !== undefined) {
        ElMessage.error(error.response.data.message)
      } else {
        ElMessage.error('获取面经数据失败, 请稍后再试')
      }
      return
    }
  }

  drawerShow.value = true
}

// 确认关闭抽屉的函数
const confirmCloseDrawer = (done) => {
  ElMessageBox.confirm('确认关闭吗?').then(() => {
    done()

    // ?: ?前的变量不为null或undefined时执行?后的代码
    newArticleForm.value?.resetFields()

    // 手动清空id 因为表单里没用到id字段
    // 所以resetFields()不会操作id字段
    article.value.id = undefined

    if (operationType.value === 'preview') {
      // 预览操作则需要手动清空内容
      article.value.stem = ''
      article.value.content = '<p>hello</p>'
    }
  }).catch((error) => {
    // 用户取消操作
    console.log('用户取消操作', error)
  })
}

// 当前面经数据
const article = ref({
  id: undefined,
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

    if (operationType.value === 'add') {
      try {
        const reqArticle = {
          stem: article.value.stem,
          content: article.value.content
        }

        const payload = await articleAPI.addArticle(reqArticle)
        console.log(payload)

        // 关闭抽屉
        drawerShow.value = false

        // 清空表单数据
        newArticleForm.value.resetFields()
        article.value.id = undefined

        // 重新渲染页面
        await getArticleList()

        // 弹出提示消息
        ElMessage.success('添加面经成功')
      } catch (error) {
        if (error.response.data.message !== undefined) {
          ElMessage.error(error.response.data.message)
        } else {
          ElMessage.error('创建面经失败, 请稍后再试')
        }
      }
    }

    if (operationType.value === 'edit') {
      try {
        const reqArticle = {
          id: article.value.id,
          stem: article.value.stem,
          content: article.value.content
        }

        const payload = await articleAPI.updateArticle(reqArticle)
        console.log(payload)

        // 关闭抽屉
        drawerShow.value = false

        // 清空表单数据
        newArticleForm.value.resetFields()
        article.value.id = undefined

        // 重新渲染页面
        await getArticleList()

        // 弹出提示消息
        ElMessage.success('修改面经成功')
      } catch (error) {
        if (error.response.data.message !== undefined) {
          ElMessage.error(error.response.data.message)
        } else {
          ElMessage.error('编辑面经失败, 请稍后再试')
        }
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
