// import Vue from 'vue'
// import Vuex from 'vuex'
// import apiUrl from "@/urlApi/apiUrl";
// import { get } from 'core-js/core/dict';
// Vue.use(Vuex)

// export default ()=> new Vuex.Store({
//     state: {
//         activeIndex: "second",
//         myResponse:''
//     },
//     mutations: {
//         getArticleList(state,myResponse){
//             this.state.myResponse=myResponse

//         }
//     },
//     actions: {
//         getArticleList(context){
//             let list = this.$axios({
//                 methods:"get",
//                 url:apiUrl.getArticleList,
//                 withCredentials: true,
//                 header: { "Access-Control-Allow-Origin": "*" }
//             })
//             console.log(list)
//             return list
//         }
//     }
// })
