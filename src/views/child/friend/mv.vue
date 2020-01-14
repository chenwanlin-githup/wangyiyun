<template>
  <div style="margin-top:46px;">
    <van-nav-bar left-text="返回" :title="singertitle.artistName" left-arrow fixed>
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
    <div style="font-size:15px;">
      <p>
        <b>【MV简介: {{singertitle.name}}】</b>
        {{singertitle.briefDesc}}
      </p>
     <b style="color:#087df3">{{singertitle.publishTime}}</b>
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
    <div class="common" v-for="(item,i) in discuss" :key="i">
      <div class="allUser">
          <div class="touxiang">
          <img :src="item.user.avatarUrl" alt srcset />
        </div>
        <div class="inner">
          <p class="com">{{item.user.nickname}}<b class="timer">【{{item.time | formatDate}}】</b></p>
          <p>{{item.content}}</p>
        </div>
      </div>
    </div>
    <div style="height:60px"></div>
  </div>
</template>
<script>

import axios from "axios";
import { formatDate } from "../../../time.js";
export default {
  methods: {
    toFrom(res) {
      this.$router.push({
        name: "friend"
      });
    }
  },
  filters: {
    formatDate(time) {
      var data = new Date(time);
      return formatDate(data, "yyyy-MM-dd");
    }
  },
  data() {
    return {
      playMV: "",
      xgMV: [],
      singertitle: "",
      discuss: ""
    };
  },
  created() {
    var id = localStorage.getItem('token')
      console.log(id)
    axios
      .get("http://net-music.penkuoer.com/mv/url?id=" + this.$route.query.id)
      .then(res => {
        //console.log(res.data.data.url);
        // 播放mv
        this.playMV = res.data.data.url;
      }),
      axios
        .get(
          "http://net-music.penkuoer.com/comment/mv?id=" + this.$route.query.id
        )
        .then(res => {
          //console.log(res.data);
          // console.log(res.data.hotComments[0].content);
          // mv相关评论
          this.discuss = res.data.hotComments;
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
          "http://net-music.penkuoer.com/mv/detail?mvid=" + this.$route.query.id
        )
        .then(res => {
          //console.log(res.data.data);
          // mv相关信息
          this.singertitle = res.data.data;
        });
  }
};
</script>
<style scoped>
.xgmvcss {
  font-size: 15px;
}
/* 评论 */

.allUser {
  display: flex;
  /* border-bottom:1px solid; */
  /* box-shadow: 0px 10px 5px #eadfdf; */

}

.touxiang {
  width: 50px;
  padding-top: 5px;
}

.touxiang img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding-left: 10px;
}

.inner {
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: left;
  flex: 1;
  padding-left: 10px;
  font-size: 12px;
  border-bottom: double 1px rgba(242, 242, 242, 0.3);
}

.inner .timer {
  padding: 0px 0px 3px 0px;
  font-size: 8px;
  color: red;
  float: right;
}

.inner .com {
  line-height: 26px;
  padding: 5px 0px;
  font-size: 14px;
}
</style>
