<template>
  <div class="login">
    <div class="login-backround">
      <div class="login-icon-arrow">
        <van-icon name="arrow-left" @click="toFrom()" />
      </div>
      <div style="font-size:40px;color:red">黄昏光芒</div>
    </div>

    <div class="login-iphon">
      <van-button round color="red" plain block :to="{ name: 'loginiPhone' }">手机号登录</van-button>
    </div>
    <div class="login-zhuce">
      <van-button round color="red" plain block :to="{ name: 'loginRegister' }">注册</van-button>
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
export default {
  name: "login",
  data() {
    return {};
  },
  created() {},
  methods: {
    toFrom(res) {
      this.$router.push({
        name: "find"
      });
    }
  }
};
</script>
<style scoped>
* {
  text-align: center;
}
.login {
  height: 100%;
  background: url("../assets/accountimage/loginOther/red.jpg") no-repeat;
  background-size: 1000px 1000px;
  background-position-y: -200px;
  overflow: hidden;
}
.login-icon-arrow {
  padding: 10px;
  width: 10px;
}
.login-logo {
  width: 100px;
  opacity: 0.8;
  border-radius: 10px;
}
.head-img {
  margin-top: 40px;
}
.login-iphon {
  padding: 10px 40px;
  margin-top: 40px;
}
.login-zhuce {
  padding: 10px 40px;
}
.login-other {
  width: 100px;
  margin: 0 auto;
  margin-top: 250px;
}
.login-other-img {
  overflow: hidden;
  margin-top: 20px;
}
.login-other-img > li {
  float: left;
  width: 25%;
}
.login-other-img > li > img {
  width: 20px;
}
</style>
