<template>
  <div class="box" style="margin-top:46px;">
    <van-nav-bar left-text="返回" :title="gequ" left-arrow fixed>
      <van-icon name="arrow-left" slot="left" @click="toFrom()" />
    </van-nav-bar>
    <div v-for="(item,index) in gqxq" :key="index">
      <img :src="item.al.picUrl" alt width="100%" />
      <b>介绍：{{item.alia}}</b>
        <video
          id="myVideo"
          :src="mp3"
          controls="controls"
          autoplay="true"
          preload="auto"
          width="100%"
          poster
          ref="viddeo"
        ></video>
        <p>{{lyric}}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    toFrom() {
      this.$router.go(-1);
    }
  },
  data() {
    return {
      gqxq: "",
      gequ: "",
      mp3: "",
      lyric:''
    };
  },
  created() {
    //console.log(this.$route.query.id)
    axios
      .get(
        "http://net-music.penkuoer.com/song/detail?ids=" + this.$route.query.id
      )
      .then(res => {
        //console.log(res.data.songs;
        // 歌曲详情
        this.gqxq = res.data.songs;
      }),
      axios
        .get(
          "http://net-music.penkuoer.com/song/detail?ids=" +
            this.$route.query.id
        )
        .then(res => {
          //console.log(res.data.songs[0].al.name);
          // 导航title
          this.gequ = res.data.songs[0].al.name;
        }),
      axios
        .get(
          "http://net-music.penkuoer.com/song/url?id=" + this.$route.query.id
        )
        .then(res => {
          //console.log(res.data.data[0].url);
          // 获取mp3播放地址
          this.mp3 = res.data.data[0].url;
        }),
      axios
        .get(
          "http://net-music.penkuoer.com/lyric?id=" + this.$route.query.id
        )
        .then(res => {
          console.log(res.data.lrc.lyric);
          // 获取mp3歌词
          this.lyric = res.data.lrc.lyric;
        });
  }
};
</script>
<style scoped>
.box {
  text-align: center;
  font-size: 15px;
}
</style>
