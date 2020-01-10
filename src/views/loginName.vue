<template>
  <div>
    <van-nav-bar title="手机号验证">
      <van-icon name="arrow-left" slot="left" @click="toFrom()" />
    </van-nav-bar>
    <div>
      <div class="div-huo">
        <img class="huo-img" src="../assets/accountimage/loginOther/huoxianmei.jpeg" alt />
      </div>
      <div>你希望大家怎样称呼您呢！</div>
    </div>
    <van-cell-group>
      <van-field placeholder="请输入昵称" border v-model="userName" />
    </van-cell-group>
    <van-button type="primary" block @click="addName()">注册</van-button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "loginName",
  data() {
    return {
      userName: ""
    };
  },
  created() {},
  methods: {
    toFrom() {
      this.$router.push({
        name: "loginVerify"
      });
    },
    addName() {
      console.log(this.userName);
      //phone=17633646172&password=123456789&captcha=2633&nickname=2450673382
      axios
        .post(
          "http://net-music.penkuoer.com/register/cellphone?phone=" +
            this.$route.push.phone +
            "&password=" +
            this.$route.push.password +
            "&captcha=" +
            this.$route.push.captcha +
            "&nickname=" +
            this.userName
        )
        .then(res => {
          this.$toast("注册成功");
          this.$router.push({
            name: "loginiPhone"
          });
        })
        .catch(err => {
          this.$toast("昵称已被占用");
        });
    }
  }
};
</script>
<style  scoped>
.div-huo {
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  margin: 30px auto;
}
.huo-img {
  width: 100px;
  margin-top: -20px;
}
</style>
