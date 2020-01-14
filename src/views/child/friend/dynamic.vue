<template>
  <div style="margin-top:46px">
    <van-nav-bar title="歌单评论" fixed>
      <van-icon name="arrow-left" slot="left" @click="toFrom()" />
    </van-nav-bar>
    <div class="common">
      <h3>当前评论:  &nbsp;&nbsp;&nbsp;{{gdplNumber}}条</h3>
      <div class="allUser" v-for="(item,i) in gdpl" :key="i">
        <div class="touxiang">
          <img :src="item.user.avatarUrl" alt srcset />
        </div>
        <div class="inner">
          <p class="userName">{{item.user.nickname}}<b class="timer">【{{item.time | formatDate}}】</b></p>
          <p class="com">{{item.content}}</p>
        </div>
      </div>
      <div style="height:50px"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { formatDate } from "../../../time";
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
      gdpl: [],
      gdplNumber:''
    };
  },
  created() {
    axios
      .get(
        "http://net-music.penkuoer.com/comment/playlist?id=" +
          this.$route.query.id
      )
      .then(res => {
        //console.log(res.data);
        // console.log(res.data.comments);
        //console.log(res.data.comments[0].time);
        // 歌单评论
        this.gdpl = res.data.comments;
      }),
      axios
        .get(
        "http://net-music.penkuoer.com/comment/playlist?id=" +
          this.$route.query.id
      )
      .then(res => {
        console.log(res.data.total);
        // 歌单评论条数
        this.gdplNumber = res.data.total;
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
  margin-top: 70px;
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
