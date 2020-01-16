<template>
  <div class="account">
    <div class="height"></div>
    <van-nav-bar title="账号" fixed>
      <img
        class="navImg"
        src="../../assets/accountimage/yinle.png"
        alt
        slot="right"
        width="20px"
        height="20px"
        @click="toPlay()"
      />
    </van-nav-bar>
    <div>
      <ul class="head">
        <li>
          <img :src="headImg" alt />
        </li>
        <li>
          <p>{{Name}}</p>
          <p class="head-li-lv" style="color:gold;">Lv5</p>
        </li>
        <li class="head-qd-right">签到</li>
      </ul>
      <ul class="head-buttom">
        <li>
          <p>动态</p>
          <p>{{eventCount}}</p>
        </li>
        <li>
          <p>关注</p>
          <p>{{follows}}</p>
        </li>
        <li>
          <p>粉丝</p>
          <p>{{followeds}}</p>
        </li>
        <li></li>
        <li>
          <p>我的资料</p>
        </li>
      </ul>
    </div>
    <div class="nav">
      <div class="nav-xiaoxi">
        <div class="nav-xiaoxi-icon">
          <img class="nav-xiaoxi-icon" src="../../assets/accountimage/xiaoxi.png" alt />
        </div>
        <div class="nav-xiaoxi-zi">我的消息</div>
        <div class="nav-xiaoxi-icon2">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="nav-xiaoxi">
        <div class="nav-xiaoxi-icon">
          <img class="nav-xiaoxi-icon" src="../../assets/accountimage/huiyuanzhongxin.png" alt />
        </div>
        <div class="nav-xiaoxi-zi">会员中心</div>
        <div class="nav-xiaoxi-icon2">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="nav-xiaoxi">
        <div class="nav-xiaoxi-icon">
          <img class="nav-xiaoxi-icon" src="../../assets/accountimage/shangcheng.png" alt />
        </div>
        <div class="nav-xiaoxi-zi">商城</div>
        <div class="nav-xiaoxi-icon2">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="nav-xiaoxi">
        <div class="nav-xiaoxi-icon">
          <img class="nav-xiaoxi-icon" src="../../assets/accountimage/zaixian.png" alt />
        </div>
        <div class="nav-xiaoxi-zi">在线听歌免流量</div>
        <div class="nav-xiaoxi-icon2">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="nav-xiaoxi">
        <div class="nav-xiaoxi-icon">
          <img class="nav-xiaoxi-icon" src="../../assets/accountimage/shezhi.png" alt />
        </div>
        <div class="nav-xiaoxi-zi">设置</div>
        <div class="nav-xiaoxi-icon2">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="nav-xiaoxi">
        <div class="nav-xiaoxi-icon">
          <img class="nav-xiaoxi-icon" src="../../assets/accountimage/saoyisaox.png" alt />
        </div>
        <div class="nav-xiaoxi-zi">扫一扫</div>
        <div class="nav-xiaoxi-icon2">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="nav-xiaoxi">
        <div class="nav-xiaoxi-icon">
          <img class="nav-xiaoxi-icon" src="../../assets/accountimage/zhuti.png" alt />
        </div>
        <div class="nav-xiaoxi-zi">主题换肤</div>
        <div class="nav-xiaoxi-icon2">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="nav-xiaoxi">
        <div class="nav-xiaoxi-icon">
          <img class="nav-xiaoxi-icon" src="../../assets/accountimage/yejian.png" alt />
        </div>
        <div class="nav-xiaoxi-zi">夜间模式</div>
        <div class="nav-xiaoxi-icon2">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="nav-xiaoxi">
        <div class="nav-xiaoxi-icon">
          <img class="nav-xiaoxi-icon" src="../../assets/accountimage/naozhong.png" alt />
        </div>
        <div class="nav-xiaoxi-zi">音乐闹钟</div>
        <div class="nav-xiaoxi-icon2">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="nav-xiaoxi">
        <div class="nav-xiaoxi-icon">
          <img class="nav-xiaoxi-icon" src="../../assets/accountimage/dingshi.png" alt />
        </div>
        <div class="nav-xiaoxi-zi">定时关闭</div>
        <div class="nav-xiaoxi-icon2">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="nav-xiaoxi">
        <div class="nav-xiaoxi-icon">
          <img class="nav-xiaoxi-icon" src="../../assets/accountimage/fenxiang.png" alt />
        </div>
        <div class="nav-xiaoxi-zi">分享网易云</div>
        <div class="nav-xiaoxi-icon2">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="nav-xiaoxi">
        <div class="nav-xiaoxi-icon">
          <img class="nav-xiaoxi-icon" src="../../assets/accountimage/guanyuwomen.png" alt />
        </div>
        <div class="nav-xiaoxi-zi">关于我们</div>
        <div class="nav-xiaoxi-icon2">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="tuichu-denglu">
      <van-button type="primary" block :to="{name:'login',query:{url:'account'}}">退出登录</van-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "account",
  data() {
    return {
      yinyue: require("../../assets/accountimage/yinle.png"),
      headImg: "",
      Name: "",
      follows: "",
      followeds: "",
      eventCount: ""
    };
  },
  created() {
    let id = JSON.parse(localStorage.getItem("token"));
    axios
      .get("http://net-music.penkuoer.com/user/detail?uid=" + id)
      .then(res => {
        this.headImg = res.data.profile.avatarUrl;
        this.Name = res.data.profile.nickname;
        this.follows = res.data.profile.follows;
        this.followeds = res.data.profile.followeds;
        this.eventCount = res.data.profile.eventCount;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    toPlay() {
      this.$router.push({
        name: "playMusic",
        query: {
          url: "account"
        }
      });
    }
  }
};
</script>
<style scoped>
.account {
  padding-bottom: 50px;
  text-align: center;
}
/* head */
.height {
  height: 40px;
}
.head {
  padding: 17px 15px;
  overflow: hidden;
}

.head > li:nth-child(1) {
  float: left;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: gainsboro;
}
.head > li:nth-child(2) {
  margin: 0;
  padding: 0;
  float: left;
  margin-left: 10px;
}
.head-li-lv {
  height: 20px;
  width: 30px;
  border: 1px solid gainsboro;
  border-radius: 5px;
  text-align: center;
  line-height: 20px;
}
.head > li > img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.head-qd-right {
  margin-top: 10px;
  width: 70px;
  height: 30px;
  background: gainsboro;
  float: right;
  text-align: center;
  line-height: 30px;
}
/* head-buttom */
.head-buttom {
  overflow: hidden;
}
.head-buttom > li {
  width: 25%;
  float: left;
}
/* nav */
.nav {
  padding-left: 10px;
}
/* nav-xiaoxi */
.nav-xiaoxi {
  width: 100%;

  border: 0.05rem solid gainsboro;
  border-left: none;
  overflow: hidden;
}
.nav-xiaoxi-icon {
  width: 1.2rem;
  height: 1.2rem;
  float: left;
  margin-top: 7px;
}
.nav-xiaoxi-zi {
  height: 3rem;
  float: left;
  margin-left: 0.3rem;
  line-height: 3rem;
}
.nav-xiaoxi-icon2 {
  height: 3rem;
  float: right;
  margin-right: 0.2rem;
  line-height: 3rem;
}
/* tuichu-denglu */
.tuichu-denglu {
  padding: 10px 20px;
}
</style>
