<template>
  <div>
    <van-nav-bar title="手机号验证">
      <van-icon name="arrow-left" slot="left" @click="toFrom()" />
    </van-nav-bar>
    <div class="size">为了安全，我们会向你的手机发送验证码！</div>

    <van-cell-group>
      <van-field v-model="yzm" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <van-button
          slot="button"
          size="small"
          type="primary"
          @click="toYan($route.query.iphone)"
        >发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="iphon-login">
      <van-button type="primary" block @click="toNext()">下一步</van-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "loginVerify",
  data() {
    return {
      yzm: ""
    };
  },
  created() {},
  methods: {
    toYan(res) {
      // phone=15839995081&password=123456789&captcha=3797
      console.log(res);
      axios
        .post("http://net-music.penkuoer.com//captcha/sent?phone=" + res)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    toFrom() {
      this.$router.push({
        name: "loginRegister"
      });
    },
    toNext() {
      console.log(this.$route.query.iphone);
      axios
        .post(
          "http://net-music.penkuoer.com//captcha/verify?phone=" +
            this.$route.query.iphone +
            "&captcha=" +
            this.yzm
        )
        .then(res => {
          console.log(res);
          this.$router.push({
            name: "loginName",
            query: {
              phone: this.$route.query.iphone,
              password: this.$route.query.password,
              captcha: this.yzm
            }
          });
        })
        .catch(err => {
          this.$toast("验证码输入错误");
        });
    }
  }
};
</script>
<style scoped>
.iphon-login {
  margin-top: 30px;
  padding: 10px 30px;
}
.size {
  font-size: 12px;
}
</style>
