import axiosInstance from '@/utils/request'

function login (account) {
  const uri = '/auth/login'
  return axiosInstance.post(uri, account)
}

function getUser () {
  const uri = '/auth/currentUser'
  return axiosInstance.get(uri)
}

export default {
  login,
  getUser
}
