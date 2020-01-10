<template>
  <div>
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
    <b>相关的mv</b>
    <div class="xgmvcss">
      <van-grid :column-num="2" icon-size="170px">
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
  data() {
    return {
      playMV: "",
      xgMV: []
    };
  },
  created() {
    axios
      .get("http://net-music.penkuoer.com/mv/url?id=" + this.$route.query.id)
      .then(res => {
        //console.log(res.data.data.url)
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
        });
  }
};
</script>
<style scoped>
.xgmvcss {
  font-size: 15px;
}
</style>
