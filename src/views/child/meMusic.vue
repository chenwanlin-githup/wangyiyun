<template>
  <div id="back">
    <div id="hang">
      <van-nav-bar title="我的音乐" left-text="更多">
        <img
          class="navImg"
          src="../../assets/accountimage/bfi.png"
          alt
          slot="right"
          width="20px"
          height="20px"
          @click="toFrom()"
        />
      </van-nav-bar>
    </div>

<<<<<<< HEAD
    <div>
=======
    <!-- <div>
>>>>>>> 9825c7ccd4bac8b373555df6dd1863509c931df0
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
          <div class="nav-xiaoxi-zi">我的电台</div>
          <div class="nav-xiaoxi-icon2">
            <van-icon name="arrow" />
          </div>
          <div class="nav-zu">3</div>
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
          <div class="xihuan-chuang" @click="showHide()">我创建的歌单（1）</div>
        </div>

        <div id="div1">
          <img class="xihuan-xi" src="../../assets/accountimage/ilike.png" />

          <div class="xihuan-huan" @click="yiao()">
            <p class="dg">我喜欢的歌</p>
            <p>7首，已下载4首</p>
          </div>
        </div>

        <div class="xihuan-shou">
          <div class="cang" @click="yinc()">我收藏的歌单(8)</div>
        </div>

        <div id="cang-div">
          <div class="cang-xian" @click="yiao()">
            <img class="cang-xi" src="../../assets/accountimage/timg.jpg" />
            <p class="cang-p1">入耳便喜欢上的英文歌</p>
            <p class="cang-p2">86首，by 不来不去，已下载1首</p>
          </div>
          <div class="cang-xian">
            <img class="cang-xi" src="../../assets/accountimage/timg.jpg" />
            <p class="cang-p1">入耳便喜欢上的英文歌</p>
            <p class="cang-p2">86首，by 不来不去，已下载1首</p>
          </div>
<<<<<<< HEAD
          <div class="cang-xian">
            <img class="cang-xi" src="../../assets/accountimage/timg.jpg" />
            <p class="cang-p1">入耳便喜欢上的英文歌</p>
            <p class="cang-p2">86首，by 不来不去，已下载1首</p>
          </div>
          <div class="cang-xian">
            <img class="cang-xi" src="../../assets/accountimage/timg.jpg" />
            <p class="cang-p1">入耳便喜欢上的英文歌</p>
            <p class="cang-p2">86首，by 不来不去，已下载1首</p>
          </div>
          <div class="cang-xian">
            <img class="cang-xi" src="../../assets/accountimage/timg.jpg" />
            <p class="cang-p1">入耳便喜欢上的英文歌</p>
            <p class="cang-p2">86首，by 不来不去，已下载1首</p>
          </div>
          <div class="cang-xian">
            <img class="cang-xi" src="../../assets/accountimage/timg.jpg" />
            <p class="cang-p1">入耳便喜欢上的英文歌</p>
            <p class="cang-p2">86首，by 不来不去，已下载1首</p>
          </div>
          <div class="cang-xian">
            <img class="cang-xi" src="../../assets/accountimage/timg.jpg" />
            <p class="cang-p1">入耳便喜欢上的英文歌</p>
            <p class="cang-p2">86首，by 不来不去，已下载1首</p>
          </div>
          <div class="cang-xian">
            <img class="cang-xi" src="../../assets/accountimage/timg.jpg" />
            <p class="cang-p1">入耳便喜欢上的英文歌</p>
            <p class="cang-p2">86首，by 不来不去，已下载1首</p>
          </div>
        </div>
      </div>
    </div>
=======
        </div>
      </div>
    </div>-->
>>>>>>> 9825c7ccd4bac8b373555df6dd1863509c931df0
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.hang {
  height: 50px;
}
.van-nav-bar__text {
  color: black;
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
  height: 40px;
  float: left;
  line-height: 40px;
}
#div1 {
  height: 45px;
  display: none;
}

.xihuan-xi {
  width: 30px;
  height: 30px;
  float: left;
  padding-left: 20px;
  padding-top: 5px;
}
.xihuan-huan {
  height: 50px;
  float: left;

  width: 300px;
}
.xihuan-huan p {
  width: 150px;
  font-size: 16px;
}
.cang-p1 {
  padding-right: 50px;
}
.dg {
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
  display: none;
  margin-top: 10px;
}
#cang-div p {
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
  border-bottom: 1px solid #eee;
}
.cang-p2 {
  color: #e8e8e8;
}
</style>

<script>
import axios from "axios";
export default {
  methods: {
    toFrom() {
      this.$router.push({
        name: "play"
      });
<<<<<<< HEAD
    },
    yiao() {
      this.$router.push({
        name: "gedan"
      });
    },

    showHide() {
      var obj = document.getElementById("div1");
      if (obj.style.display == "none") {
        obj.style.display = "block";
      } else {
        obj.style.display = "none";
      }
    },
    yinc() {
      var obj = document.getElementById("cang-div");

      if (obj.style.display == "none") {
        obj.style.display = "block";
      } else {
        obj.style.display = "none";
      }
=======
    },
    // yiao() {
    //   this.$router.push({
    //     name: "gedan"
    //   });
    // },
    // showHide() {
    //   var obj = document.getElementById("div1");
    //   if (obj.style.display == "none") {
    //     obj.style.display = "block";
    //   } else {
    //     obj.style.display = "none";
    //   }
    // },
    // yinc() {
    //   var obj = document.getElementById("cang-div");
    //   if (obj.style.display == "none") {
    //     obj.style.display = "block";
    //   } else {
    //     obj.style.display = "none";
    //   }
    // },
    data() {
      return {
        Data: [],
      };
    },
    created() {

      axios
        .get("http://net-music.penkuoer.com/user/playlist?uid=" + 490163516)//this.$route.query.id
        .then(res => {
          console.log(res.data);
          // 取数据
          this.Data = res.data;
        });
>>>>>>> 9825c7ccd4bac8b373555df6dd1863509c931df0
    }
  }
};
</script>


