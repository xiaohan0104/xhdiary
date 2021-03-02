<template>
  <div>
    <div>
      <el-row :gutter="0">
        <el-col :span="4"><div class="content">文章表题</div></el-col>
        <el-col :span="4"
          ><div class="bg-purple">
            <el-input
              v-model="articleTitle"
              placeholder="请输入内容"
            ></el-input></div
        ></el-col>
        <el-col :span="4"><div class="content">文章简介</div></el-col>
        <el-col :span="8"
          ><div class="bg-purple">
            <el-input
              v-model="introducehtml"
              placeholder="请输入内容"
            ></el-input></div
        ></el-col>
        <el-col :span="2">
          <el-select
            v-model="selectedType"
            placeholder="请选择状态"
            @change="styleChange"
          >
            <el-option
              v-for="item in typeInfo"
              :key="item.Id"
              :label="item.typeName"
              :value="item.orderNum"
            />
          </el-select>
        </el-col>
        <el-col :span="2"
          ><el-button class="tbutton" type="primary" @click="saveArticle"
            >提交</el-button
          ></el-col
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
  created: function () {
    this.getTypeInfo();
    let tmpId = this.$route.query.id;
    console.log("tmoid" + tmpId);
    if (tmpId) {
      this.articleId = tmpId;
      this.getArticleById(tmpId);
    }
  },
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
    saveArticle() {
      if (!this.selectedType) {
        this.$message.error("必须选择文章类别");
        return false;
      } else if (!this.articleTitle) {
        this.$message.error("文章名称不能为空");
        return false;
      } else if (!this.articleContent) {
        this.$message.error("文章内容不能为空");
        return false;
      } else if (!this.introducehtml) {
        this.$message.error("简介不能为空");
        return false;
      }
      this.$message.success("通过");
      let dataProps = {};
      dataProps.type_id = this.selectedType;
      dataProps.title = this.articleTitle;
      dataProps.article_content = this.articleContent;
      dataProps.introduce = this.introducehtml;
      dataProps.addTime = new Date().getTime();
      if (this.articleId == 0) {
        request({
          method: "post",
          url: servicePath.addArticle,
          data: dataProps,
          withCredentials: true,
          header: { "Access-Control-Allow-Origin": "*" },
        }).then((res) => {
          console.log(res);
          this.articleId = res.insertId;
          if (res.isScuccess) {
            this.$message.success("文章保存成功");
          } else {
            this.$message.error("文章保存失败");
          }
        });
      } else {
        dataProps.id = this.articleId;
        request({
          method: "post",
          data: dataProps,
          url: servicePath.updateArticle,
          withCredentials: true,
          header: { "Access-Control-Allow-Origin": "*" },
        }).then((res) => {
          if (res.isScuccess) {
            this.$message.success("文章保存成功");
          } else {
            this.$message.error("文章保存失败");
          }
        });
      }
    },
    getTypeInfo() {
      request({
        method: "get",
        url: servicePath.getTypeInfo,
        header: { "Access-Control-Allow-Origin": "*" },
        withCredentials: true,
      }).then((res) => {
        if (res.data == "没有登录") {
          localStorage.removeItem("openId");
          this.$router.push("/login");
          console.log(456);
        } else {
          this.typeInfo = res.data;
          // console.log(this.typeInfo);
        }
      });
    },
    getArticleById(tmpId) {
      request({
        url: servicePath.getArticleById + tmpId,
        withCredentials: true,
        header: { "Access-Control-Allow-Origin": "*" },
      }).then((res) => {
        console.log(res);
        this.articleTitle = res.data[0].title;
        this.articleContent = res.data[0].article_content;
        this.introducehtml = res.data[0].introduce;
        this.selectedType = res.data[0].typeId;
      });
    },
    styleChange(id) {
      console.log(id);
    },
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
