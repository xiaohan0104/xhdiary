<!--  -->
<template>
  <div class="header">
    <!-- <el-row>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <span class="header-txt"> 专注前端开发,每年100集免费视频 </span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <el-menu
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item v-for="(item) in typeList" :key="item.Id" :index="item.Id.toString()">{{ item.typeName }}</el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
// import apiUrl from '../urlApi/apiUrl'
// export default {
//   async asyncData({ $axios }){
//     const typeList = await $axios.get(apiUrl.getTypeInfo)
//     console.log(typeList.data.data)
//     console.log(123)
//     return{
//       typeList:typeList.data.data
//     }
//   },
//   data() {
//     return {
//       activeIndex: "second"
//     };
//   },
//   methods: {
//     handleSelect(tab, event) {
//       window.console.log(tab);
//       window.console.log(11111111111111111111);
//       window.console.log(event);
//       if(tab ==1 ){
//         this.$router.push(path)()
//       }
//     }
//   },
  
// computed: {
//         defaultActive() {
//             return '/' + this.$route.path.split('/').reverse()[0];
//         }
//     }
// };
</script>
<style>
.header{
    background-color: rgb(255, 255, 255);
    padding: .4rem;
    overflow: hidden;
    height: 3.2rem;
    border-bottom:1px solid #eee;
}
.header-logo{
    color:#ff1e1e;
    font-size: 1.4rem;
    text-align: left;
}
.header-txt{
    font-size: 0.6rem !important;
    color: #999  !important;
    display: inline-block !important;
    padding-left: 0.3rem !important;
}
.ant-meu{
    line-height: 2.8rem;
}
.ant-menu-item{
    font-size:1rem !important;
    padding-left:1rem;
    padding-right:1rem;
}
</style>
