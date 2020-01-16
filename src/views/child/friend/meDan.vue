<template>
  <div>
    <div class="header">
      <van-icon @click="toFrom()" name="arrow-left" />
      <div class="herder-ge">歌单</div>
      <img class="herder-dian" src="../../../assets/accountimage/shenglue.png" />
      <img class="herder-img" src="../../../assets/accountimage/bfi.png" @click="togo()" />
    </div>

    <div class="zhong">
      <div class="zhoujie">
        <div class="zhoujie-n">
          <img class="zhoujie-tu" :src="img.coverImgUrl" />

          <div class="wode">
            <div class="wode-1">{{img.name}}</div>
            <div class="wode-2">
              <img class="zhoujie-i" :src="cellt.avatarUrl" />
              {{cellt.nickname}}
            </div>
          </div>
        </div>

        <div class="dibu">
          <van-grid>
            <van-grid-item icon="coupon-o" size="10" text="收藏" />
            <van-grid-item icon="comment-o" size="10" text="评论" />
            <van-grid-item icon="share" size="10" text="分享" />
            <van-grid-item icon="down" icon-size="10" text="下载" />
          </van-grid>
        </div>
      </div>
      <div class="kup">
        <div @click="isHHH=!isHHH" class="xihuan-shou">
          <img class="cang-xi" src="../../../assets/accountimage/bof.png" />
          <div class="cang">播放全部</div>
        </div>
        <div id="cang-div" v-if="isHHH">
          <div class="cang-1" v-for="(item,index) in like" :key="index" @click="can(item.id)">
            <div class="xuhao">{{index+1}}</div>
            <div class="geming">
              <p>{{item.name}}</p>
              <p class="ci-2">{{item.ar[0].name}}</p>
            </div>

            <div>
              <img class="kmv" src="../../../assets/accountimage/bmv.png" />
              <img class="shengl" src="../../../assets/accountimage/shenglue.png" />
            </div>
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
      isHHH: false,
      like: [],
      cellt: [],
      img: []
    };
  },

  methods: {
    toFrom() {
      this.$router.go(-1);
    },
    togo() {
      this.$router.push({
        name: "playMusic"
      });
    },
    toShow() {
      this.show = !this.show;
    },
    can(id) {
      console.log(id);
      this.$router.push({
        name: "playMusic",

        query: {
          id: id
        }
      });
    }
  },
  created() {
    var id = JSON.parse(localStorage.getItem("token"));
    // console.log(id);
    axios
      .get("http://net-music.penkuoer.com//playlist/detail?id=960915245")
      .then(res => {
        this.like = res.data.playlist.tracks;
        this.cellt = res.data.playlist.creator;
        this.img = res.data.playlist;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.herder-ge {
  width: 240px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.header-fan {
  width: 30px;
  height: 40px;
}
.herder-dian {
  width: 25px;
  height: 25px;
}
.herder-img {
  width: 20px;
  height: 20px;
}

.zhong {
  width: 100%;
  height: 200px;
  background: red;
}
.zhoujie {
  width: 100%;
  height: 200px;
  background: gray;
}
.zhoujie-n {
  width: 100%;
  height: 150px;

  display: flex;
  justify-content: space-around;
  align-items: center;
}
.wode {
  width: 200px;
  height: 150px;
}
.wode-1 {
  width: 170px;
  height: 60px;
  line-height: 60px;
  color: white;
}
.wode-2 {
  width: 150px;
  height: 60px;
  color: white;
  text-align: center;
}
.zhoujie-tu {
  width: 130px;
  height: 130px;
}
.zhoujie-i {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.dibu {
  width: 100%;
  height: 50px;
}
.xihuan-shou {
  width: 100%;
  height: 40px;
  margin-top: 40px;
}

.kup {
  padding-left: 10px;
  padding-right: 10px;
}
.cang {
  width: 100px;
  height: 40px;
  line-height: 40px;
  padding-left: 40px;
}
#cang-div {
  width: 100%;
}
.cang-xi {
  width: 20px;
  height: 20px;
  float: left;
  padding-top: 10px;
  padding-left: 10px;
}
.cang-1 {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #eee;
}
.xuhao {
  width: 20px;
  height: 40px;
  padding-top: 5px;
}
.geming {
  width: 200px;
  height: 40px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.geming p {
  width: 200px;
  height: 20px;
  font-size: 14px;
}
.zhuanji {
  width: 100px;
  height: 20px;
}
.kmv {
  width: 20px;
  height: 20px;
  padding-right: 5px;
}
.shengl {
  width: 20px;
  height: 20px;
}
.ci-2 {
  color: gray;
}
</style>
