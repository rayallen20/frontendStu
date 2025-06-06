import axiosInstance from '@/utils/request'

function getArticleList (params) {
  const uri = '/admin/interview/query'
  return axiosInstance.get(uri, { params })
}

function addArticle (article) {
  const uri = '/admin/interview/create'
  return axiosInstance.post(uri, article)
}

function deleteArticle (id) {
  const uri = '/admin/interview/remove'

  const data = {
    data: {
      id
    }
  }

  return axiosInstance.delete(uri, data)
}

export default {
  getArticleList,
  addArticle,
  deleteArticle
}
