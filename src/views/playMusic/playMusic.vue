<template>
  <div class="playMusic">
    <div class="pm-head">
      <ul>
        <li>
          <van-icon name="arrow-left" @click="toFrom" />
        </li>
        <li>
          <p>晴天</p>
          <p>周杰伦</p>
        </li>
        <li>
          <van-icon name="share" />
        </li>
      </ul>
    </div>
    <div class="pm-message">11111</div>
    <div class="pm-foot">2222</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "playMusic",
  data() {
    return {
      backgroundUrl: ""
    };
  },

  created() {},
  methods: {
    toFrom() {
      this.$router.push({
        name: this.$route.query.url
      });
    }
  }
};
</script>
<style scoped>
.playMusic {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #726060;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.pm-head {
  width: 100%;
}
.pm-head > ul {
  width: 100%;
  display: flex;
}
.pm-head > ul > li {
  flex-grow: 1;
}
.pm-head > ul > li:nth-child(1) {
  text-align: left;
  padding-top: 10px;
  padding-top: 30px;
  padding-left: 20px;
  font-size: 25px;
}
.pm-head > ul > li:nth-child(3) {
  text-align: right;
  padding-top: 30px;
  padding-right: 20px;
  font-size: 25px;
}
.pm-message {
  background: royalblue;
  flex: 1;
}
.pm-foot {
  background: rgb(214, 42, 108);
  height: 100px;
}
</style>
