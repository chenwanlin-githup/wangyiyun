<template>
  <div id="friend">
    <van-tabs sticky route  animated color="#90ee90">
      <van-tab >
          <!-- 轮播图 -->
        <van-swipe :autoplay="3000" indicator-color="white" >
          <van-swipe-item v-for="(i,index) in lbtimages" :key="index">
            <img :src="i.pic" width="100%">
          </van-swipe-item>
        </van-swipe>
        <!-- topics热门话题 -->
        <div class="topics">
          <h4>热门话题</h4>
          <van-swipe :loop="false" :width="200" :show-indicators="false" >
  <van-swipe-item v-for="(i,index) in lbtimages" :key="index">
    <img :src="i.pic" style="width:180px" alt="">
  </van-swipe-item>
</van-swipe>
        </div>
        <!-- lick图情感屏幕 -->
        <div class="link" v-for="(i,index) in links" :key="index" >
          {{i.name}}
          <p><b><i>{{i.subscribedCount}}</i>人</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<van-button icon="good-job" type="primary" text="点赞" size="mini" click="" color="#000" plain/></p>
        </div>
        <div slot="title">
          <van-icon name="hot-o" />
        </div>
      </van-tab>
      <van-tab title="艺人MV">
        <ul class="tab2" v-for="(video,id) in mv" :key="id" @click="bfmv(video.id)">
          <li>
            <p>
              <b style="font-size:18px;color:#999;text-decoration:line-through;">{{video.name}}</b>
              <img :src="video.cover" width="100%" />
              艺术家:<b style="color:#0099FF">{{video.artistName}}</b>
              播放次数<b style="color:#FF0066">{{video.playCount}}</b>
            </p>
          </li>
          <li class="button">
            <van-button icon="thumb-circle-o" size="mini" type="primary" color="#000" plain />&nbsp;&nbsp;&nbsp;<i>36</i>&nbsp;&nbsp;&nbsp;
            <van-button icon="orders-o" size="mini" type="primary" color="#000" plain />&nbsp;&nbsp;&nbsp;<i>3</i>&nbsp;&nbsp;&nbsp;
            <van-button icon="share" size="mini" type="primary" color="#000" plain />&nbsp;&nbsp;&nbsp;<i>转发</i>
          </li>
          <hr/>
        </ul>
      </van-tab>
      <van-tab title="附近动态">
        <dl class="nearby-dl" v-for="(sites) in site" :key="sites.id" @click="fjdt(sites.id)">
            <img :src="sites.creator.avatarUrl"  width="100%">
	      	<dt>
            <img :src="sites.creator.backgroundUrl" alt="">
          </dt>
		      <dd>
            <p style="color:red">
              <b>【{{sites.name}}】</b>
              {{sites.trackCount}}km
            </p>
          </dd>
		      <dd>
            <p>上次更改：{{sites.updateTime | formatDate}}</p>
            <p>提供者：--{{sites.creator.nickname}}--</p>
          </dd>
    	</dl>
      </van-tab>
      <van-tab :to="{name:'play',query:{url:'friend'}}">
        内容4
        <div slot="title" >
          <van-icon name="music" />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<style scoped>
.topics h4{
  text-indent:-200px
}
.link{
  width: 90%;
  height: 100px;
  border:5px solid #3C3C46;
  /* background: #BF3730 ; */
  background: linear-gradient(141deg,#9fb8ad 0%,#1fc8db 51%,#2cb5e8 75%);
  color: whitesmoke;
  font-size: 16px;
  margin: 20px auto;
  text-align: center;
  border-radius: 20px;
  box-shadow: 10px 10px 5px #888888;
  padding-top:35px ;
}
.tab2 p {
  font-size: 12px;
  text-align: center
}
.tab2 li div {
  width: 260px;
  height: 150px;
  background: skyblue;
}
.tab2 li i{
  font-size: 12px;
  font-style:normal
}
/* 附近的样式 */
.nearby-ul p b{
  color: chocolate;
  width: 4px;
}
.nearby-ul p{
  font-size: 13px;
  overflow: hidden;
}
/* 附近 */
.nearby-dl{
  /* background: linear-gradient(120deg,#AFB919 0%,#1FCD28 51%,#2CF5E5 75%); */
  box-shadow: 10px 10px 5px #888888;
  border-radius:50px;
  overflow: hidden;
}
.nearby-dl dt img{
  float: left;
  margin-left:10px ;
  width: 46px;
  border-radius: 50%;
}
.nearby-dl dd p{
  font-size: 14px;
}
.nearby-dl dd p b{
  margin-right:90px
}
</style>
<script>
import axios from 'axios';//引入axiso组件
import { formatDate } from "../../time.js";
export default {
  data(){
    return{
      lbtimages: [],
      links:[],
      mv:[],
      site:[],

    };
  },
  filters:{
    formatDate(time){
        var data = new Date(time);
        return formatDate(data,'yyyy-MM-dd');
    }
   },
  methods: {
    bfmv(res){
      this.$router.push({
        name:"mv",
        query:{
          id:res
        }
      })
    },
    fjdt(res){
      //console.log(res)
      this.$router.push({
        name:"dynamic",
        query:{
          id:res
        }
      })
    }
  },
  created() {
    //--------------------http://net-music.penkuoer.com-------------------
    //}),
    axios.get('http://net-music.penkuoer.com/banner?type=1').then(res =>{
      //console.log(res.data.banners)
      // 轮播图
      this.lbtimages = res.data.banners
    }),
    axios.get('http://net-music.penkuoer.com/top/playlist/catlist').then(res =>{
      //console.log(res.data.playlists)
      // lick文字
      this.links = res.data.playlists
    }),
    axios.get('http://net-music.penkuoer.com/mv/all?area=内地').then(res =>{
      //console.log(res.data.data[0].id)
      //mv数据
      this.mv = res.data.data
    }),
    axios.get('http://net-music.penkuoer.com/top/playlist?limit=8&order=hot').then(res=>{
      //console.log(res.data.playlists[0].id)
      //附近动态
      this.site = res.data.playlists
    })

},

  }

</script>
