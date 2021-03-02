<template>
  <div>
    <div>
      <el-row :gutter="0">
        <el-col :span="4"><div class="content">文章表题</div></el-col>
        <el-col :span="4"
          ><div class="bg-purple">
            <el-input v-model="articleTitle" placeholder="请输入内容"></el-input></div
        ></el-col>
        <el-col :span="4"><div class="content">文章简介</div></el-col>
        <el-col :span="8"
          ><div class="bg-purple">
            <el-input v-model="introducehtml" placeholder="请输入内容"></el-input></div
        ></el-col>
        <el-col :span="2"
          ><el-button class="tbutton" type="primary">提交</el-button></el-col
        >
      </el-row>
    </div>
    <div>
      <mavon-editor ref="md" id="editor" v-model="articleContent" />
    </div>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import "normalize.css/normalize.css";
import "@/assets/css/base.css";
import { request } from "@/common/request";
import servicePath from "@/common/apiUrl";

export default {
  name: "Add",
  data() {
    return {
      articleId: 0, // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
      articleTitle: "", //文章标题
      articleContent: "", //markdown的编辑内容
      markdownContent: " 预览内容", //html内容
      introducemd: "", //简介的markdown内容
      introducehtml: "等待编辑", //简介的html内容
      showDate: "", //发布日期
      updateDate: "", //修改日志的日期
      typeInfo: [], // 文章类别信息
      selectedType: 1, //选择的文章类别
    };
  },
  methods: {
    getTypeInfo() {},
  },
  created: function () {
    request({
      method: "get",
      url: servicePath.getTypeInfo,
      header: { "Access-Control-Allow-Origin": "*" },
      withCredentials: true,
    }).then(
                    res => {
                if (res.data == "没有登录") {
                    localStorage.removeItem('openId')
                    this.$router.push('/login')
                    console.log(456)
                } else {
                    this.typeInfo = res.data
                    console.log(456789)
                }

            }
    );
  },
  components: {
    mavonEditor,
  },
};
</script>

<style scoped>
.content {
  width: 100px;
  padding-top: 10px;
  height: 30px;
  border-radius: 10%;
  text-align: center;
  margin: 0 auto;
  color: rgb(82, 159, 247);
}
.tbutton {
  margin-left: 40%;
}
</style>
