<template>
  <div class="kuang">
    <img class="backgroundImg" :src="backgroundUrl" alt />
    <div class="playMusic">
      <div class="pm-head">
        <ul>
          <li>
            <van-icon name="arrow-left" @click="toFrom" />
          </li>
          <li>
            <p>{{gequ[0]}}</p>
            <p>{{gequ[1]}}</p>
          </li>
          <li>
            <van-icon name="share" />
          </li>
        </ul>
      </div>
      <div class="pm-message">
        <div class="pm-message-geci" @click="show = !show">
          {{ getAllKey }}
          <div class="pm-message-geci-p" v-if="show">
            <p
              class="lrc-p"
              v-show="
                Number(timehead) >= keyArr[index] &&
                  Number(timehead) < keyArr[index + 1]
              "
              v-for="(item, index) in lrcData"
              :key="index"
            >
              <span class="geci-one" v-for="(value,num) in item" :key="num">{{value}}</span>
              <br />
              <span v-for="(value,nums) in lrcData[index+1]" :key="nums">{{value}}</span>
            </p>
          </div>
          <div v-else>
            <p
              class="lrc-p"
              v-for="(item, index) in lrcData"
              :key="index"
              :style="{color:'rgb(9, 85, 248)'}"
            >
              <span v-for="(value,num) in item" :key="num">{{value}}</span>
            </p>
          </div>
        </div>
        <div class="pm-message-nav">
          <ul>
            <li>
              <van-icon name="like-o" />
            </li>
            <li>
              <van-icon name="down" />
            </li>
            <li>
              <van-cell @click="showPL()">
                <van-icon name="chat-o" />
              </van-cell>

              <van-popup
                v-model="showPinglun"
                closeable
                close-icon-position="top-left"
                position="right"
                :style="{ height: '100%',width:'100%' }"
              >
                <div class="Pinglun-kuang">
                  <div class="Pinglun-head">精彩评论</div>
                  <div class="Pinglun-neirong">
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
                </div>
              </van-popup>
            </li>
            <li>
              <van-icon name="ellipsis" />
            </li>
          </ul>
        </div>
      </div>
      <div class="pm-foot">
        <audio id="Audio" :src="srcMp3" autoplay controls @timeupdate="updatatime" hidden></audio>
        <div class="jindutiao">
          <van-progress
            :percentage="ppp"
            pivot-color="gray"
            color="rgb(9, 85, 248)"
            track-color="grey"
            stroke-width="4px"
          />
        </div>

        <ul class="music-btn">
          <li :style="{color:'white'}">
            <van-icon name="replay" />
          </li>
          <li>
            <img src="../../assets/accountimage/playMusic/shangyishou.png" alt />
          </li>
          <li @click="rbf()">
            <img v-if="imgs" src="../../assets/accountimage/playMusic/bofang.png" alt />
            <img v-else src="../../assets/accountimage/playMusic/zanting.png" alt />
          </li>
          <li>
            <img src="../../assets/accountimage/playMusic/xiayishou.png" alt />
          </li>
          <li class="liebiao-icon">
            <img src="../../assets/accountimage/playMusic/liebiao.png" alt />
            <van-cell
              class="liebiao-zujian"
              @click="showPopup"
              :style="{ height: '100%',width:'100%' ,}"
            ></van-cell>

            <van-popup
              v-model="showTan"
              position="bottom"
              :style="{ height: '50%',width:'100%' ,  opacity: '1'}"
            >
              <ul class="liebiao-zujian-message-nav">
                <li>列表循环&nbsp;{{data.length}}</li>
                <li>收藏</li>
                <li>清空</li>
              </ul>
              <ul>
                <li
                  class="liebiao-zujian-message-music"
                  v-for="(item,index) in data"
                  :key="index"
                  @click="playMusic(item.name,item.ar[0].name,item.id,item.al.picUrl)"
                >
                  <p class="liebiao-zujian-message-music-index">{{index+1}}</p>
                  <div class="liebiao-zujian-message-music-name">
                    <p>{{item.name}}</p>
                    <p>{{item.ar[0].name}}</p>
                  </div>

                  <p>
                    <van-icon name="delete" />
                  </p>
                </li>
              </ul>
            </van-popup>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { formatDate } from "../../time";
export default {
  name: "playMusic",
  data() {
    return {
      showTan: false,
      backgroundUrl: "",
      show: true,
      showPinglun: false,
      imgs: true,
      ppp: 0,
      timehead: "",
      lrc: {},
      lrcData: {},
      durationTime: 0,
      currentTime: 0,
      keyArr: [],
      data: "",
      gequ: [],
      srcMp3: "",
      idM: 347230,
      idmNav: 1,
      gdplNumber: [],
      musicDetaile: "",
      geshou: "",
      geImg: ""
    };
  },
  filters: {
    formatDate(time) {
      var data = new Date(time);
      return formatDate(data, "yyyy-MM-dd");
    }
  },
  mounted() {
    this.imgs = false;

    if (this.$route.query.id) {
      this.idM = this.$route.query.id;
    }
    axios
      .get("http://net-music.penkuoer.com/song/url?id=" + this.idM)
      .then(res => {
        //console.log(res);
        this.srcMp3 = res.data.data[0].url;
        //sconsole.log(this.srcMp3);
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get("http://net-music.penkuoer.com//song/detail?ids=" + this.idM)
      .then(res => {
        this.backgroundUrl = res.data.songs[0].al.picUrl;
        this.gequ = [
          res.data.songs[0].name,
          res.data.songs[0].ar[0].name,
          this.idM
        ];
        //this.data = res.data.playlist.tracks;
        //console.log(this.data);
      })
      .catch(err => {
        console.log(err);
      });
    if (this.$route.query.idx) {
      this.idmNav = this.$route.query.idx;
    }
    axios
      .get("http://net-music.penkuoer.com//top/list?idx=" + this.idmNav)
      .then(res => {
        this.data = res.data.playlist.tracks;
        //console.log(this.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    showPL() {
      this.showPinglun = true;
      axios
        .get("http://net-music.penkuoer.com/comment/music?id=" + this.idM)
        .then(res => {
          this.gdplNumber = res.data.hotComments;
        });
      axios
        .get("http://net-music.penkuoer.com/song/detail?ids=" + this.idM)
        .then(res => {
          this.musicDetaile = res.data.songs[0];
          this.geshou = res.data.songs[0].ar[0].name;
          this.geImg = res.data.songs[0].al.picUrl;
        })
        .catch(err => {
          console.log(err);
        });
    },
    toPinglun() {
      this.$router.push({
        name: "pinglun",
        query: { id: this.idM, url: "playMusic" }
      });
    },
    toFrom() {
      this.$router.go(-1);
    },
    updatatime(e) {
      //console.log(e.target.currentTime);
      this.currentTime = e.target.currentTime;
      this.timehead = this.currentTime;
      this.durationTime = e.target.duration;
      //console.log(this.currentTime);

      try {
        let num = parseInt((this.currentTime / this.durationTime) * 100);

        if (num == 100) {
          //console.log(1);
          this.imgs = true;
        }
        if (!isNaN(num)) {
          this.ppp = num;
        }
      } catch (err) {}
    },
    rbf() {
      let audio = document.getElementById("Audio");

      if (audio !== null) {
        //检测播放是否已暂停.audio.paused 在播放器播放时返回false.

        if (audio.paused) {
          this.imgs = false;
          audio.play(); //audio.play();// 这个就是播放
        } else {
          this.imgs = true;

          audio.pause(); // 这个就是暂停
        }
      }
    },
    showPopup() {
      this.showTan = true;
    },
    playMusic(geming, geshou, gequId, gepicUrl) {
      this.imgs = false;
      this.gequ = [geming, geshou, gequId];
      //console.log(this.gequ);
      this.idM = gequId;
      this.backgroundUrl = gepicUrl;
      axios
        .get("http://net-music.penkuoer.com/song/url?id=" + this.gequ[2])
        .then(res => {
          //console.log(res);
          this.srcMp3 = res.data.data[0].url;
          //sconsole.log(this.srcMp3);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  watch: {
    gequ(a, b) {
      axios
        .get("http://net-music.penkuoer.com//lyric?id=" + a[2])
        .then(res => {
          this.lrc = res.data;
          // 歌词数据格式处理
          var lyrics = res.data.lrc.lyric.split("\n");
          // console.log(lyrics);

          var lrcObj = [];
          for (var i = 0; i < lyrics.length; i++) {
            //decodeURIComponent() 函数可对 encodeURIComponent() 函数编码的 URI 进行解码。
            var lyric = decodeURIComponent(lyrics[i]);
            //console.log(lyric);
            //获取每句歌词之前的时间段
            var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
            var timeRegExpArr = lyric.match(timeReg);
            //console.log(timeRegExpArr);
            //timeRegExpArr不存在，因为continue跳过了，直接进入下一个迭代
            if (!timeRegExpArr) continue;
            //去掉每句歌词前的时间段
            var clause = lyric.replace(timeReg, "");
            //console.log(clause);
            //把时间段转化成秒数
            for (var k = 0, h = timeRegExpArr.length; k < h; k++) {
              var t = timeRegExpArr[k];
              //console.log(t);
              var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                sec = Number(String(t.match(/\:\d*\.\d*/i)).slice(1));
              //console.log(String(t.match(/\:\d*\.\d*/i)));
              var time = min * 60 + sec;
              //console.log(time);
              //把歌词以{time：clouse}形式存入lrcObj中
              var arr = {};
              arr[time] = clause;
              lrcObj.push(arr);
            }
          }
          //console.log(lrcObj);
          this.lrcData = lrcObj;
          //console.log(this.lrcData);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    getAllKey() {
      //console.log(this.lrcData);

      for (var i = 0; i < this.lrcData.length; i++) {
        //console.log(i);
        for (var j in this.lrcData[i]) {
          //console.log(j);
          this.keyArr.push(j);
        }
      }
      //console.log(this.keyArr);
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.kuang {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  text-align: center;
}
.backgroundImg {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0.6;
}
.playMusic {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.pm-head {
  width: 100%;
  height: 13%;
  overflow: hidden;
}
.pm-head > ul {
  width: 100%;
  display: flex;
}
.pm-head > ul > li {
  flex-grow: 1;
}
.pm-head > ul > li:nth-child(1) {
  text-align: left;
  padding-top: 10px;
  padding-top: 30px;
  padding-left: 20px;
  font-size: 25px;
}
.pm-head > ul > li:nth-child(3) {
  text-align: right;
  padding-top: 30px;
  padding-right: 20px;
  font-size: 25px;
}
.pm-head > ul > li:nth-child(2) > p {
  padding: 10px 0;
}
/* message 歌词部分*/
.pm-message {
  height: 67%;
  overflow: hidden;
  padding-top: 20px;
}
.pm-message-geci {
  height: 80%;
  overflow-y: auto;
  position: relative;
}
.pm-message-geci-p {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
}
.geci-one {
  color: rgb(9, 85, 248);
  font-size: 1.2rem;
}
.pm-message-nav {
  height: 20%;

  padding: 0 40px;
}
.pm-message-nav > ul {
  height: 100%;
  display: flex;
}
.pm-message-nav > ul > li {
  height: 100%;
  width: 25%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* foot */
.pm-foot {
  height: 20%;
}
.music-btn {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.music-btn > li {
  width: 40px;
  height: 40px;
  background: rgb(175, 165, 165);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
}
.music-btn > li > img {
  width: 20px;
  height: 20px;
}
.jindutiao {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}

.liebiao-icon {
  position: relative;
  opacity: 1;
}
.liebiao-icon > img {
  position: absolute;
}
.liebiao-icon > .liebiao-zujian {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
}
.liebiao-zujian-message-nav {
  display: flex;
  justify-content: space-between;
}
.liebiao-zujian-message-nav > li {
  width: 30%;
  text-align: center;
}
.liebiao-zujian-message-music {
  height: 60px;
  width: 100%;
  display: flex;
}
.liebiao-zujian-message-music-index {
  width: 15%;
  line-height: 36px;
}
.liebiao-zujian-message-music-name {
  width: 75%;
  text-align: left;
}
.liebiao-zujian-message-music-name > p:nth-child(2) {
  color: gray;
  font-size: 12px;
}
/* 评论 */
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
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
.Pinglun-kuang {
  height: 100%;
}
.Pinglun-head {
  height: 7%;
  text-align: center;
  line-height: 50px;
}
.Pinglun-neirong {
  height: 93%;
  overflow-y: auto;
  padding-left: 10px;
  padding-right: 10px;
}
.van-cell {
  background: none;
}
.van-icon-chat-o {
  margin-left: 50%;
  font-size: 22px;
}
</style>
