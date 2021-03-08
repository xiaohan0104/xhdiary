<template>
  <div>
    <div class="header">
      <el-row id="ss">
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <span class="header-txt"> 自己的小日记 </span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <el-menu
            :default-active="$route.path" class="el-menu-demo" mode="horizontal"
            >
             <el-menu-item ><nuxt-link :to="{path:'/'}">首页</nuxt-link></el-menu-item>
             <el-menu-item ><nuxt-link :to="{name:'shlist'}">快乐生活</nuxt-link></el-menu-item>
             <el-menu-item ><nuxt-link :to="{name:'xxlist'}">学习历程</nuxt-link></el-menu-item>
            </el-menu>
            
            
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="rbox">
      <el-row>
        <el-col :span="18">
          <Nuxt />
        </el-col>
        <el-col :span="6">
          <div class="author-div">
            <div>
              <el-avatar :size="50"></el-avatar>
            </div>
            <div class="author-introduction">
              我向往远方
              
              <!-- <el-icon-chat-dot-round /> -->
              <!-- <el-avatar size="{28}" className="account"><QqOutlined /></el-avatar>
        <el-avatar size="{28}" className="account"><WechatOutlined /></el-avatar> -->
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
        <div class='footer-div'>
        <div>由vue + element ui</div>
        <div>.......</div>
    </div>
  </div>
</template>

<script>
import apiUrl from "@/urlApi/apiUrl";
export default {

  data() {
    return {
    };
  },

  methods: {
    handleSelect(tab, event) {
      window.console.log(tab);
      window.console.log(11111111111111111111);
      window.console.log(event);
      if (tab == 1) {
        this.$router.push("list");
      } else {
        this.$router.push({ name: "", params: { id: tab } });
      }
    }
  },

  computed: {
    defaultActive() {
      return "/" + this.$route.path.split("/").reverse()[0];
    }
  }
};
</script>
<style>
html{
  background-color: rgb(240, 240, 240);
    padding: 0;
  margin: 0;
}
.rbox{
  background-color: white;
}
#ss{
    height: 50px;
}
.header {

  text-align:center;
  background-color: rgb(255, 255, 255);
  padding: 0.4rem;
  overflow: hidden;
  height: 3.2rem;
  border-bottom: 1px solid #eee;
}
.header-logo {
  color: #ff1e1e;
  font-size: 1.4rem;
  text-align: left;
}
.header-txt {
  font-size: 0.6rem !important;
  color: #999 !important;
  display: inline-block !important;
  padding-left: 0.3rem !important;
}
.ant-meu {
  line-height: 2.8rem;
}
.ant-menu-item {
  font-size: 1rem !important;
  padding-left: 1rem;
  padding-right: 1rem;
}
.author-div {
  text-align: center;
  padding: 1rem;
}
.author-div div {
  margin-bottom: 1rem;
}
.author-introduction {
  font-size: 0.8rem;
  color: #999;
}
.account {
  background-color: #999;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
a {
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}
.footer-div{
    text-align: center;
    width: 100%;
    padding: 1rem;
    color: #888;
    padding: 0;
}
</style>
