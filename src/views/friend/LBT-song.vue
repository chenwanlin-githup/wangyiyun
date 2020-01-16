<template>
  <div class="box" style="padding-top:46px;">
    <van-nav-bar left-text="返回" :title="gequ" left-arrow fixed>
      <van-icon name="arrow-left" slot="left" @click="toFrom()" />
    </van-nav-bar>
    <div v-for="(item,index) in gqxq" :key="index">
      <img :src="item.al.picUrl" alt width="100%" />
      <!-- <b>介绍：{{item.alia}}</b> -->
      <!-- <video id="myVideo" :src="mp3" autoplay="true" controls="controls" preload="auto" width="100%" ref="viddeo"></video> -->
      <audio controls id="myVideo" autoplay="true" loop preload="auto">
        <source src="horse.ogg" type="audio/ogg" />
        <source :src="mp3" type="audio/mpeg" controls="controls" />您的浏览器不支持 audio 元素。
      </audio>

      <!-- <p>{{lyric}}</p> -->
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
      lyric: ""
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
        .get("http://net-music.penkuoer.com/lyric?id=" + this.$route.query.id)
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
  z-index: 100;
}
#myVideo {
  position: absolute;
  bottom: 0;
  left: 20px;
}
</style>
