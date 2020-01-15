<template>
  <div style="padding-top:46px">
    <van-nav-bar title="歌单评论" fixed>
      <van-icon name="arrow-left" slot="left" @click="toFrom()" />
    </van-nav-bar>
    <van-card :desc="geshou" :title="musicDetaile.name" :thumb="geImg" centered />
    <div class="common">
      <h3>当前评论: &nbsp;&nbsp;&nbsp;{{gdplNumber.length}}条</h3>
      <div class="allUser" v-for="(item,i) in gdplNumber" :key="i">
        <div class="touxiang">
          <img :src="item.user.avatarUrl" alt srcset />
        </div>
        <div class="inner">
          <p class="userName">
            {{item.user.nickname}}
            <b class="timer">【{{item.time | formatDate}}】</b>
          </p>
          <p class="com">{{item.content}}</p>
        </div>
      </div>
      <div style="height:50px"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { formatDate } from "../../time";
export default {
  data() {
    return {
      gdplNumber: [],
      musicDetaile: "",
      geshou: "",
      geImg: ""
    };
  },
  methods: {
    toFrom() {
      this.$router.push({
        name: this.$route.query.url,
        query: { id: this.$route.query.id }
      });
    }
  },
  filters: {
    formatDate(time) {
      var data = new Date(time);
      return formatDate(data, "yyyy-MM-dd");
    }
  },

  created() {
    axios
      .get(
        "http://net-music.penkuoer.com/comment/music?id=" + this.$route.query.id
      )
      .then(res => {
        this.gdplNumber = res.data.hotComments;
      });
    axios
      .get(
        "http://net-music.penkuoer.com/song/detail?ids=" + this.$route.query.id
      )
      .then(res => {
        this.musicDetaile = res.data.songs[0];
        this.geshou = res.data.songs[0].ar[0].name;
        this.geImg = res.data.songs[0].al.picUrl;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
/* 评论 */
.common {
  padding-left: 10px;
}

.common h3 {
  font-size: 16px;
  font-weight: 900;
  text-align: left;
  text-indent: 10px;
  margin-top: 20px;
}

.allUser {
  display: flex;
}

.touxiang {
  width: 50px;
  margin-top: 5px;
}

.touxiang img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
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
  color: red;
  font-size: 8px;
  float: right;
}

.inner .com {
  line-height: 26px;
  font-size: 14px;
}
</style>
