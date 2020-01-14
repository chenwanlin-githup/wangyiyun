<template>
  <div>
    <van-nav-bar title="标题">
      <van-icon name="cross" slot="left" @click="toFrom($route.query.url)" />
    </van-nav-bar>
    <van-image
      class="head-img"
      round
      width="7rem"
      height="7rem"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <div class="login-iphon">
      <van-button type="primary" block>手机号登录</van-button>
    </div>
    <div>
      <van-button type="primary" block>注册</van-button>
    </div>
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
        name: res
      });
    }
  }
};
</script>
<style scoped>
.head-img {
  margin-top: 30px;
}
.login-iphon {
  padding: 10px 20px;
}
</style>
