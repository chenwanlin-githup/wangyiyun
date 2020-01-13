<template>
  <div>
    <van-nav-bar left-text="返回" :title="singertitle.artistName" left-arrow>
      <van-icon name="arrow-left" slot="left" @click="toFrom()" />
    </van-nav-bar>
    <video
      id="myVideo"
      :src="playMV"
      controls="controls"
      autoplay="true"
      preload="auto"
      width="100%"
      poster
      ref="viddeo"
    ></video>
    <div style="font-size:15px">
      <p>
        <b>【MV简介: {{singertitle.name}}】</b>
        {{singertitle.briefDesc}}
      </p>
      {{singertitle.publishTime}}
      <p v-if="singertitle.desc != null && singertitle.desc !=''">
        <b>【描述】:</b>
        {{singertitle.desc}}
      </p>
    </div>
    <p>与{{singertitle.artistName}}相关</p>
    <div class="xgmvcss">
      <van-grid :column-num="2" icon-size="170px" :dot="true" :border="false" >
        <van-grid-item
          v-for="(xgmv,index) in xgMV"
          :key="index"
          :icon="xgmv.coverUrl"
          :text="xgmv.title"
        />
      </van-grid>
    </div>
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
      playMV: "",
      xgMV: [],
      singertitle: ""
    };
  },
  created() {
    axios
      .get("http://net-music.penkuoer.com/mv/url?id=" + this.$route.query.id)
      .then(res => {
        //console.log(res.data.data.url);
        // 播放mv
        this.playMV = res.data.data.url;
      }),
      axios
        .get(
          "http://net-music.penkuoer.com/related/allvideo?id=" +
            this.$route.query.id
        )
        .then(res => {
          //console.log(res.data.data);
          // 相关mv
          this.xgMV = res.data.data;
        }),
      axios
        .get(
          "http://net-music.penkuoer.com//mv/detail?mvid=" +
            this.$route.query.id
        )
        .then(res => {
          console.log(res.data.data);
          // 相关mv
          this.singertitle = res.data.data;
        });
  }
};
</script>
<style scoped>
.xgmvcss {
  font-size: 15px;
}
</style>
