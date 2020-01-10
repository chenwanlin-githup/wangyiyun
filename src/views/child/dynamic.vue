<template>
  <div>
    <van-nav-bar title="歌单评论">
      <van-icon name="arrow-left" slot="left" @click="toFrom()" />
    </van-nav-bar>
    <ul>
      <li>
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3259643626,3224170490&fm=26&gp=0.jpg" width="80px">
        <b>123</b>
        <b>22w人点赞</b>
      </li>
      <li>
        <p>这里是评论12313132</p>
        <b>xxxx条评论，，，点赞</b>
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    toFrom(res) {
      this.$router.push({
        name: "friend"
      });
    }
  },
  data() {
    return {
      gdpl: [],

    };
  },
  created() {
    axios.get( "http://net-music.penkuoer.com/comment/playlist?id=" + this.$route.query.id)
      .then(res => {
        console.log(res.data.comments);
        // 歌单评论
        this.gdpl = res.data;
      });
  }
};
</script>
