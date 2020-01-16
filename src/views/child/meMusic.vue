<template>
  <div id="back">
    <div id="hang">
      <div class="nav">

        <div>更多</div>
        <div class="teshu">我的音乐</div>
        <img
          class="navImg"
          src="../../assets/accountimage/bfi.png"
          alt
          slot="right"
          width="20px"
          height="20px"
          @click="toFrom()"
        />
      </div>
    </div>

    <div>
      <div class="ben">
        <div class="nav-xiaoxi">
          <div class="nav-xiaoxi-icon">
            <img class="nav-xiaoxi-icon" src="../../assets/accountimage/bendi.png" alt />
          </div>
          <div class="nav-xiaoxi-zi">本地音乐</div>
          <div class="nav-xiaoxi-icon2">
            <van-icon name="arrow" />
          </div>
          <div class="nav-zu">248</div>
        </div>
        <div class="nav-xiaoxi">
          <div class="nav-xiaoxi-icon">
            <img class="nav-xiaoxi-icon" src="../../assets/accountimage/likee.png" alt />
          </div>
          <div class="nav-xiaoxi-zi">最近播放</div>
          <div class="nav-xiaoxi-icon2">
            <van-icon name="arrow" />
          </div>

          <div class="nav-zu">100</div>
        </div>

        <div class="nav-xiaoxi">
          <div class="nav-xiaoxi-icon">
            <img class="nav-xiaoxi-icon" src="../../assets/accountimage/dt.png" alt />
          </div>
          <div class="nav-xiaoxi-zi" @click="diantai()">我的电台</div>
          <div class="nav-xiaoxi-icon2">
            <van-icon name="arrow" />
          </div>
          <div class="nav-zu">{{broadcasting.count}}</div>
        </div>
        <div class="nav-xiaoxi">
          <div class="nav-xiaoxi-icon">
            <img class="nav-xiaoxi-icon" src="../../assets/accountimage/sc.png" alt />
          </div>
          <div class="nav-xiaoxi-zi">收藏</div>
          <div class="nav-xiaoxi-icon2">
            <van-icon name="arrow" />
          </div>

          <div class="nav-zu">0</div>
        </div>

        <div class="xihuan">
          <div class="xihuan-chuang" @click="isShow=!isShow">我创建的歌单</div>
        </div>
        <div id="div1" v-if="isShow">
          <img class="xihuan-xi" src="../../assets/accountimage/ilike.png" />
          <div class="xihuan-huan" @click="yiao()">我喜欢的歌</div>
        </div>

        <div @click="isHHH=!isHHH" class="xihuan-shou">
          <div class="cang">我收藏的歌单</div>
        </div>
        <div id="cang-div" v-if="isHHH">
          <div class="cang-xian" @click="yiao" v-for="(item,index) in collect" :key="index">
            <img class="cang-xi" :src="item .coverImgUrl" />
           <div class="cang-1"> {{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      collect: "",
      broadcasting: "",
      like: "",
      isShow: false,
      isHHH: false
    };
  },
  methods: {
    toFrom() {
      this.$router.push({
        name: "playMusic"
      });
    },
    yiao() {
      this.$router.push({
        name: "meDan"
      });
    },
    toShow() {
      this.show = !this.show;
    }
  },

  created() {
    var id = JSON.parse(localStorage.getItem("token"));
    console.log(id);
    axios
      .get("http://net-music.penkuoer.com//top/playlist?limit=10&order=new")
      .then(res => {
        console.log(res.data.playlists);

        this.collect = res.data.playlists;
      }),
      axios.get("http://net-music.penkuoer.com/user/dj?uid=" + id).then(res => {
        //console.log(res.data);

        this.broadcasting = res.data;
      })
  }
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
.hang {
  height: 50px;
}
.nav{
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.teshu{
  width: 250px;
  height: 50px;
  line-height: 50px;
text-align: center
}

.nav-lt{
	font-size: 25px;
}.nav-rt{
	font-size: 30px;
}

.ben {
  padding-left: 10px;
  padding-right: 11px;
  margin-bottom: 50px;
}
.nav-zu {
  font-size: 13px;
  height: 3rem;
  float: right;
  margin-right: 0.5rem;
  line-height: 3rem;
}
.nav-xiaoxi {
  width: 100%;

  border: 0.05rem solid gainsboro;
  border-left: none;
  border-right: none;
  overflow: hidden;
}
.nav-xiaoxi-icon {
  width: 1.5rem;
  height: 1.5rem;
  float: left;
  margin-top: 0.25rem;
}
.nav-xiaoxi-zi {
  height: 3rem;
  float: left;
  margin-left: 0.3rem;
  line-height: 3rem;
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

.xihuan {
  width: 100%;
  height: 40px;
  background: #eee;
}

.xihuan-chuang {
  width: 100%;
  height: 40px;
  line-height: 40px;
}
#div1 {
  width: 200px;
  height: 45px;
  display: flex;
  align-items: center;
}
.xihuan-xi {
  margin: 0 10px;
  width: 30px;
  height: 30px;
}
.xihuan-huan {
  line-height: 45px;
  height: 45px;
  width: 100px;
}
.cang-1 {
  height: 23px;
  font-size: 16px;
  line-height:45px
}
.cang-p1 {
  width: 200px;
  overflow: hidden;
  padding-right: 50px;
}
.dg {
  height: 40px;
  line-height: 40px;
  font-size: 21px;
}

.xihuan-shou {
  width: 100%;
  height: 40px;
  background: #eee;
}
.cang {
  height: 40px;
  float: left;
  line-height: 40px;
}

#cang-div {
  width: 100%;
  margin-top: 10px;
}
#cang-div p {
  width: 100%;
  height: 20px;
  margin-right: 30px;
}
.cang-xi {
  width: 40px;
  height: 40px;
  float: left;
  padding-left: 10px;
}
.cang-xian {
  height: 50px;
  text-align: center;
  border-bottom: 1px solid #eee;
}
.cang-p2 {
  color: #e8e8e8;
}
</style>
