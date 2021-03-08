<template>
  <div id="lbox">
    <div class="boxchild" v-for="(item) in myResponse" :key="item.id">
      <div class="childtitle"><nuxt-link :to="{name:'data-id',params:{id:item.id}}">{{item.title}}</nuxt-link></div>
      <div>
      <i class="el-icon-edit"> <span class="childintroduce">{{item.introduce}}</span></i>
     <i class="el-icon-menu"><span class="typename">{{item.typeName}}</span></i>
      </div>

    </div>
  </div>
</template>

<script>
import apiUrl from "@/urlApi/apiUrl";
export default {
  async asyncData({ $axios }) {
    const baseResult = await $axios.get(apiUrl.getListById + "1", {
      withCredentials: true,
      header: { "Access-Control-Allow-Origin": "*" }
    });
    console.log(baseResult);
    return {
      myResponse: baseResult.data.data
    };
  },
  data() {
    return {
      ue: 123
    };
  }
};
</script>

<style>
html{
  background-color: rgb(240, 240, 240);
    padding: 0;
  margin: 0;
}
#lbox {
  height: 100%;
  /* background-color: rgb(240, 240, 240); */
}
.boxchild{
  margin: 0 auto;
  margin-top: 5px;
  background-color: white;
  width: 95%;
  height:100px;
  border-radius: 2%;
}
.childtitle{
  font-family: "Times New Roman", Times, serif;
 font-size: 150%; 
  height: 60%;
    /* text-align:center; */
  display: block;
  color: rgb(121, 121, 255);
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
