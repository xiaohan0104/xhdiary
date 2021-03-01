<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 登陆表单区域 -->
      <el-form
        v-loading="isLoding"
        ref="loginFormRef"
        :model="loginconst"
        :rules="LoginfromRules"
        label-width="0px"
        class="login_form"
      >
        <!-- 用戶名 -->
        <el-form-item prop="username">
          <el-input v-model="loginconst.username"> </el-input>
          {{ loginconst.username }}
        </el-form-item>
        <!-- 密碼 -->
        <el-form-item prop="password">
          <el-input v-model="loginconst.password"> </el-input>
        </el-form-item>
        <!-- 按鈕 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="loginForm">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>


export default {
  name: "login",
  data() {
    return {
      loginconst: {
        username: "",
        password: "",
      },
      isLoding: false,
      LoginfromRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    // 登录
    loginForm() {
      console.log(this.loginconst.username);
      // this.isLoding = true;
      // 验证用户经密码为空
      if (!this.loginconst.username) {
        this.$alert("请求失败", "请输入用户名", {
          confirmButtonText: "确定",
        });
      } else if (!this.loginconst.password) {
        this.$alert("请求失败", "请输入密码", {
          confirmButtonText: "确定",
        });
      }

      let dataProps = {
        userName: this.loginconst.username,
        password: this.loginconst.password,
      };
      this.$store.dispatch('userLogina',dataProps).then((res) => {
        console.log(res);
        this.isLoading = false;
        if (res.data == "登录成功") {
          localStorage.setItem("openId", res.openId);
          console.log(localStorage.getItem("openId"));
          this.$router.push('/')
        } else {
          this.$alert("请求失败222222222", "请输入密码", {
            confirmButtonText: "确定",
          });
        }
      });

    },
  },
};
</script>

<style  scoped>
.login_container {
  background: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 240px;
  background-color: rgba(255, 255, 255, 0.418);
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;

  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: center;
}
</style>
