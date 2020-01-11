<template>
  <div>
    <van-nav-bar title="歌单评论">
      <van-icon name="arrow-left" slot="left" @click="toFrom()" />
    </van-nav-bar>
    <div class="common">
      <h4>精彩评论</h4>
      <div class="allUser" v-for="(item,i) in gdpl" :key="i">
        <div class="touxiang">
          <img :src="item.user.avatarUrl" alt srcset />
        </div>
        <div class="inner">
          <p class="userName">{{item.content}}</p>
          <p class="timer">{{item.time | formatDate}}</p>
          <p class="com">{{item.user.nickname}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { formatDate } from "../../time.js";
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
      gdpl: []
    };
  },
  created() {
    axios
      .get(
        "http://net-music.penkuoer.com/comment/playlist?id=" +
          this.$route.query.id
      )
      .then(res => {
        //console.log(res.data.comments);
        //console.log(res.data.comments[0].time);
        // 歌单评论
        this.gdpl = res.data.comments;
      });
  }
};
</script>
<style scoped>
/* 评论 */
.common {
  padding-left: 10px;
}
.common h4 {
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  text-indent: 10px;
  line-height: 30px;
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
  font-size: 8px;
}
.inner .com {
  line-height: 26px;
  padding: 5px 0px;
  font-size: 14px;
}
</style>
