<!--  -->
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
    const typeList = await $axios.get(apiUrl.getTypeInfo);
    console.log(typeList.data.data);
    console.log(123);

    const baseResult = await $axios.get(apiUrl.getArticleList);
    console.log(baseResult.data.data)
    return {
      myResponse: baseResult.data.data,
      typeList: typeList.data.data
    };
  },
  data() {
    return {
      activeIndex: "second"
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
#lbox {
  height: 100%;
  width: 100%;
  background-color: rgb(240, 240, 240);
  /* background-color: rgb(240, 240, 240); */
}
.boxchild{
  margin: 0 auto;
  margin-top: 5px;
  background-color: white;
  width: 100%;
  height:100px;
  border-radius: 5%;
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
