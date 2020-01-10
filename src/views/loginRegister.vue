<template>
  <div>
    <van-nav-bar title="手机号注册">
      <van-icon name="arrow-left" slot="left" @click="toFrom()" />
    </van-nav-bar>
    <div class="iphone-input">
      <van-cell-group>
        <van-field v-model="username" label="手机号" placeholder="请输入手机号" />
        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
      </van-cell-group>
    </div>
    <div class="iphon-login">
      <van-button type="primary" block @click="toNext()">下一步</van-button>
    </div>
    <div class="login-other">其它登录方式</div>
    <ul class="login-other-img">
      <li>
        <img src="../assets/accountimage/loginOther/weixin.png" alt />
        <p>微信</p>
      </li>
      <li>
        <img src="../assets/accountimage/loginOther/QQ.png" alt />
        <p>QQ</p>
      </li>
      <li>
        <img src="../assets/accountimage/loginOther/weibo.png" alt />
        <p>微博</p>
      </li>
      <li>
        <img src="../assets/accountimage/loginOther/youxiang.png" alt />
        <p>网易邮箱</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "loginRegistor",
  data() {
    return {
      username: "",
      password: "",
      iphoneNumber: ""
    };
  },
  updated() {},
  methods: {
    toNext() {
      if (this.username !== "" && this.password != "") {
        if (
          /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/.test(this.username)
        ) {
          if (/^\w{6,16}$/.test(this.password)) {
            this.$router.push({
              name: "loginVerify",
              query: {
                iphone: this.username,
                password: this.password
              }
            });
          } else {
            this.$toast("密码必须是数字，字母和下划线");
          }
        } else {
          this.$toast("请输入正确的手机号");
        }
      } else {
        this.$toast("请输入用户名或密码");
      }
    },
    toFrom() {
      this.$router.push({
        name: "login"
      });
    }
  }
};
</script>
<style scoped>
.iphone-input {
  margin-top: 20px;
}
.iphon-login {
  margin-top: 30px;
  padding: 10px 30px;
}
.iphon-password {
  width: 100px;

  margin: 20px auto;
}
.login-other {
  width: 100px;
  margin: 0 auto;
  margin-top: 280px;
}
.login-other-img {
  overflow: hidden;
  margin-top: 30px;
}
.login-other-img > li {
  float: left;
  width: 25%;
}
.login-other-img > li > img {
  width: 20px;
}
</style>
