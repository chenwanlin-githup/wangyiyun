<template>
  <div>
    <van-nav-bar title="手机号登录">
      <van-icon name="arrow-left" slot="left" @click="toFrom()" />
    </van-nav-bar>
    <div class="iphone-input">
      <van-cell-group>
        <van-field type="number" v-model="phone" label="手机号" placeholder="请输入手机号" />
        <van-field type="password" v-model="password" label="密码" placeholder="请输入密码" />
      </van-cell-group>
    </div>
    <div class="iphon-login">
      <van-button type="primary" block @click="Login()">登录</van-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
//phone=17633646172&password=123456789&captcha=2633&nickname=2450673382
export default {
  name: "loginiPhone",
  data() {
    return {
      phone: "",
      password: ""
    };
  },
  created() {},
  methods: {
    toFrom() {
      this.$router.push({
        name: "login"
      });
    },
    Login() {
      axios
        .get(
          "http://net-music.penkuoer.com/login/cellphone?phone=" +
            this.phone +
            "&password=" +
            this.password
        )
        .then(res => {
          console.log(res.data.account.id);
          localStorage.setItem("token", JSON.stringify(res.data.account.id));
          this.$router.push({
            name: "find"
          });
          // axios.get(
          //   "http://net-music.penkuoer.com//user/detail?uid=" +
          //     res.data.account.id
          // ).then((res)=>{
          //   console.log(res)
          // });
        })
        .catch(err => {
          console.log(err);
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
</style>
