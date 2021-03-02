<template>
<div>
<el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-submenu index="1">
    <template slot="title">我的工作台</template>
    <el-menu-item index="1-1">文章列表</el-menu-item>
    <el-menu-item index="1-2">添加文章</el-menu-item>
  </el-submenu>
</el-menu>
<div><router-view/></div>
</div>
</template>

<script>
// @ is an alias to /src
import 'normalize.css/normalize.css'
import "@/assets/css/base.css";
export default {
  name: "Home",
  data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        switch (key){
          case '1-1' : this.$router.push('/home/list');
          break;
          case '1-2' : this.$router.push('/home/add')
        }
      }
    }
};
</script>
<style  scoped>

</style>
