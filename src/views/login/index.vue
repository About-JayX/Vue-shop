<template>
  <div class="login">
    <div class="login-box">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item prop="username">
          <el-input
            prefix-icon="iconfont icon-user"
            v-model="form.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            prefix-icon="iconfont icon-3702mima"
            v-model="form.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
      <div class="icon">
        <el-image :src="image" fit="cover"></el-image>
      </div>
    </div>
  </div>
</template>

<script>
import { loginAPI } from "@/api/login";
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        username: "admin",
        password: "123456",
      },
      rules: {
        username: [
          { required: true, trigger: "blur", message: "请输入用户名" },
          {
            min: 3,
            max: 10,
            trigger: "blur",
            message: "请输入3到10个字符",
          },
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入密码" },
          {
            min: 6,
            max: 15,
            trigger: "blur",
            message: "请输入6到15个字符",
          },
        ],
      },
      image: require("@/assets/logo.png"),
    };
  },
  methods: {
    ...mapActions("user", ["getToken"]),
    // 重置表单
    resetForm() {
      this.$refs.form.resetFields();
    },
    login() {
      this.$refs.form.validate(async (v) => {
        try {
          if (!v) return false;
          await this.getToken(this.form);
          this.$message.success("登录成功！");
          return this.$router.push("/layout");
        } catch (error) {
          this.$message.error(error);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background-color: #2d4b6d;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-box {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    align-items: center;
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 5px;
    .el-form {
      width: 100%;
      :deep(.el-form-item__content) {
        display: flex;
        justify-content: flex-end;
      }
    }
    .icon {
      background-color: #fff;
      position: absolute;
      top: 0px;
      transform: translateY(-50%);
      padding: 10px;
      border-radius: 50%;
      width: 130px;
      height: 130px;
      border: 1px solid #eee;
      box-shadow: 0px 0px 10px #ddd;
      .el-image {
        background-color: #eee;
        border-radius: 50%;
      }
    }
  }
}
</style>
