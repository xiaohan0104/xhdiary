import Vue from 'vue'
import Vuex from 'vuex'
import servicePath from "@/common/apiUrl";
import { request } from "@/common/request";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      userName:'',
      password:''
    }
  },
  mutations: {
    userLogin(state,user){
      state.user.userName=user.userName;
      state.user.password=user.password
      console.log(user.userName)
    }
  },
  actions: {
    userLogina(context,user){
      
       let jieguo =request({
        method: "post",
        url: servicePath.checkLogin,
        data: user,
        withCredentials: true,
        header: { "Access-Control-Allow-Origin": "*" },
      })
      return jieguo
    },
    userLoginb(context,user){
      context.commit('userLogin',user)
    }
  },
})
