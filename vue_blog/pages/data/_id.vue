<!--  -->
<template>
  <div id="lbox">
    <div id="tbox">
      <h1 class="childtitle">{{myResponse.title}}</h1>
      <i class="el-icon-edit">
        <span class="childintroduce">{{ myResponse.introduce }}</span></i
      >
      <i class="el-icon-menu"
        ><span class="typename">{{ myResponse.typeName }}</span></i
      >
    </div>
    <el-divider></el-divider>
    <div id="dbox">
      <p v-html="myResponse.article_content"></p>
    </div>
  </div>
</template>

<script>
import apiUrl from "@/urlApi/apiUrl";
export default {
//       async fetch({}) {
//     const data = await this.$axios.get(apiUrl.getArticleById+id);
//     console.log(data.data.data);
//     return {
//       myResponse: data.data.data,
//     };
//   },
  data() {
    return {
        myResponse:''
    };
  },
  beforeCreate () {
      let id = this.$route.params.id
      this.$axios.get(apiUrl.getArticleById+id).then(res =>{
          console.log(res.data.data[0])
          this.myResponse=res.data.data[0]
      })
  }
};
</script>
<style>
html{

    padding: 0;
  margin: 0;
}
#lbox {
  width: 100%;
  height: 100%;
  background-color: white  !important;
}
.childtitle {
  font-family: "Times New Roman", Times, serif;
  font-size: 150%;
  height: 60%;
  /* text-align: center; */
  color: rgb(121, 121, 255);
}
#tbox {
  width: 100%;
  text-align: center;
}
#tbox h1 {
  margin: 0, auto;
  text-align: center;
  font-size: 150%;
  color: rgb(109, 109, 255);
}
#tbox span {
  text-align: center;
  color: #ccc;
}
h1 {
  text-align: center;
}
.childintroduce{
      text-align:center;
  height: 30%;
  color: #ccc;
  padding-right: 20px;
}
.typename{
      text-align:center;
    height: 30%;
  color: #ccc;
}
</style>
