// // 1) 自定义函数
import apiUrl from './apiUrl'
// const request = {
//   testGet: (params) => {
//     return axios.get('/web-service/testGet', {
//       params
//     })
//   },
//   testPost: (params) => {
//     return axios.post('/web-service/testPost', params)
//   },
//   findAll: () => {
//     return axios.get({
//       url: apiUrl.getArticleList
//     })
//   }
//   // ......
// }
// // 2) 定义axios变量等待接收axios,保证axios可用
// let axios = null
export default ({ $axios }, inject) => {
  // 3 保存内置的axios
//   axios = $axios
  // 4) 将自定义函数交于nuxt
  inject('request', $axios.$get({
    url: apiUrl.getArticleList
  }))
}
