<template>
  <div>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column prop="typeName" label="类型" width="180">
      </el-table-column>
      <el-table-column prop="addTime" label="最后修改时间"> </el-table-column>
      <el-table-column prop="id" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="updateArticle(scope.row.id)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="delArticle(scope.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import "normalize.css/normalize.css";
import "@/assets/css/base.css";
import { request } from "@/common/request";
import servicePath from "@/common/apiUrl";
export default {
  name: "List",
  data() {
    return {
      list: [],
    };
  },
  mounted: function () {
    this.getList();
  },
  methods: {
    getList() {
      request({
        method: "get",
        url: servicePath.getArticleList,
        withCredentials: true,
        header: { "Access-Control-Allow-Origin": "*" },
      }).then((res) => {
        console.log(res);
        this.list = res.list;
      });
    },
    delArticle(id) {
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          console.log(id);
          request({
            url: servicePath.delArticle + id,
            withCredentials: true,
          }).then(() => {
            
            this.$router.go(0)
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
        
    },
    updateArticle(id) {
      this.$router.push({
        path:'/home/add',
        query:{
          id:id
        }
      })
    },
  },
};
</script>

<style scoped>
</style>
