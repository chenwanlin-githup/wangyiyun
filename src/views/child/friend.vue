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
          <p><b><i>{{i.subscribedCount}}</i>人</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<van-button icon="good-job" type="primary" text="点赞" size="mini" color="#000" plain/></p>
        </div>
        <div slot="title">
          <van-icon name="hot-o" />
        </div>
      </van-tab>
      <van-tab title="动态">
        <ul class="tab2">
          <img
            src="http://img5.imgtn.bdimg.com/it/u=3389024522,3873098305&fm=26&gp=0.jpg"
            class="tupian"
            alt
          />
          <li>
            <p>
              你要不要吃芒果 发布短视频：
              <p>12:00</p>
            </p>
          </li>
          <li>
            <p>一个关于垃圾和资源回收的小动画,你有没装在包包里忘记扔掉的垃圾?</p>
            <div>电影</div>
            <p>爱电影不错过</p>
          </li>
          <li class="button">
            <van-button icon="thumb-circle-o" size="mini" type="primary" color="#000" plain />&nbsp;&nbsp;&nbsp;<i>36</i>&nbsp;&nbsp;&nbsp;
            <van-button icon="orders-o" size="mini" type="primary" color="#000" plain />&nbsp;&nbsp;&nbsp;<i>3</i>&nbsp;&nbsp;&nbsp;
            <van-button icon="share" size="mini" type="primary" color="#000" plain />&nbsp;&nbsp;&nbsp;<i>转发</i>
          </li>
        </ul>
        <ul class="tab2">
          <img
            src="http://img5.imgtn.bdimg.com/it/u=3389024522,3873098305&fm=26&gp=0.jpg"
            class="tupian"
            alt
          />
          <li>
            <p>
              你要不要吃芒果 发布短视频：
              <p>12:00</p>
            </p>
          </li>
          <li>
            <p>一个关于垃圾和资源回收的小动画,你有没装在包包里忘记扔掉的垃圾?</p>
            <div>电影</div>
            <p>爱电影不错过</p>
          </li>
          <li class="button">
            <van-button icon="thumb-circle-o" size="mini" type="primary" color="#000" plain />&nbsp;&nbsp;&nbsp;<i>36</i>&nbsp;&nbsp;&nbsp;
            <van-button icon="orders-o" size="mini" type="primary" color="#000" plain />&nbsp;&nbsp;&nbsp;<i>3</i>&nbsp;&nbsp;&nbsp;
            <van-button icon="share" size="mini" type="primary" color="#000" plain />&nbsp;&nbsp;&nbsp;<i>转发</i>
          </li>
        </ul>
        <ul class="tab2">
          <img
            src="http://img5.imgtn.bdimg.com/it/u=3389024522,3873098305&fm=26&gp=0.jpg"
            class="tupian"
            alt
          />
          <li>
            <p>
              你要不要吃芒果 发布短视频：
              <p>12:00</p>
            </p>
          </li>
          <li>
            <p>一个关于垃圾和资源回收的小动画,你有没装在包包里忘记扔掉的垃圾?</p>
            <div>电影</div>
            <p>爱电影不错过</p>
          </li>
          <li class="button">
            <van-button icon="thumb-circle-o" size="mini" type="primary" color="#000" plain />&nbsp;&nbsp;&nbsp;<i>36</i>&nbsp;&nbsp;&nbsp;
            <van-button icon="orders-o" size="mini" type="primary" color="#000" plain />&nbsp;&nbsp;&nbsp;<i>3</i>&nbsp;&nbsp;&nbsp;
            <van-button icon="share" size="mini" type="primary" color="#000" plain />&nbsp;&nbsp;&nbsp;<i>转发</i>
          </li>
          <li class="button">
            <van-button icon="thumb-circle-o" size="mini" type="primary" color="#000" plain />&nbsp;&nbsp;&nbsp;<i>36</i>&nbsp;&nbsp;&nbsp;
            <van-button icon="orders-o" size="mini" type="primary" color="#000" plain />&nbsp;&nbsp;&nbsp;<i>3</i>&nbsp;&nbsp;&nbsp;
            <van-button icon="share" size="mini" type="primary" color="#000" plain />&nbsp;&nbsp;&nbsp;<i>转发</i>
          </li>
        </ul>
      </van-tab>
      <van-tab title="附近">
        <ul class="nearby-ul" v-for="item in list" :key="item.id">
          <li>
        <p class=""><b>{{item.name}}</b></p>

            <van-image
          width="100%"
          height="230px"
          fit="scale-down"
          :src="item.coverImgUrl"
        />
          </li>
          <li>
        <p>{{item.description}}</p>
          </li>
        </ul>
       
       <dl class="nearby-dl">
	      	<dt>
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
          </dt>
		      <dd>
            <p>
              <b>xxxxx</b>
              <i>0.0001km</i>
            </p>
          </dd>
		      <dd>
            <p>最近在听: [Something I Need] -Ben Haenow</p>
          </dd>
    	</dl>
      <dl class="nearby-dl">
	      	<dt>
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
          </dt>
		      <dd>
            <p>
              <b>xxxxx</b>
              <i>0.0001km</i>
            </p>
          </dd>
		      <dd>
            <p>最近在听: [Something I Need] -Ben Haenow</p>
          </dd>
    	</dl>
      <dl class="nearby-dl">
	      	<dt>
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
          </dt>
		      <dd>
            <p>
              <b>xxxxx</b>
              <i>0.0001km</i>
            </p>
          </dd>
		      <dd>
            <p>最近在听: [Something I Need] -Ben Haenow</p>
          </dd>
    	</dl>
      <dl class="nearby-dl">
	      	<dt>
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
          </dt>
		      <dd>
            <p>
              <b>xxxxx</b>
              <i>0.0001km</i>
            </p>
          </dd>
		      <dd>
            <p>最近在听: [Something I Need] -Ben Haenow</p>
          </dd>
    	</dl>
      <dl class="nearby-dl">
	      	<dt>
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
          </dt>
		      <dd>
            <p>
              <b>xxxxx</b>
              <i>0.0001km</i>
            </p>
          </dd>
		      <dd>
            <p>最近在听: [Something I Need] -Ben Haenow</p>
          </dd>
    	</dl>
     
      </van-tab>
      <van-tab :to="{name:'play'}">
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
  width: 320px;
  height: 90px;
  border:5px solid #3C3C46;
  background: #BF3730 ;
  color: whitesmoke;
  font-size: 16px;
  margin: 20px auto;
  text-align: center;
  box-shadow: 10px 10px 5px #888888;
  padding-top:35px ;
}

.tab2{
  margin-bottom:25px
}
.tab2 li {
  margin-left: 100px;
}
.tab2 .tupian {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  float: left;
  margin-left: 30px;
}

.tab2 p {
  font-size: 12px;
  width: 265px;
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
.nearby-dl dt img{
  float: left;
  margin-left:20px ;
  width: 46px;
  height: 46px;
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
// import { getBannerImgs,getNewMusic } from "../../services/API";
export default {
  data(){
    return{
      list:[],
      lbtimages: [],
      links:[],

    };
  },
  created() {
    //组件创建成功后执行
    axios.get('http://net-music.penkuoer.com/top/playlist?limit=5&order=new').then(res =>{
      // console.log(res);
      // 歌单 ( 网友精选碟 ),修改数值展示数量
      this.list = res.data.playlists;
    }),
    axios.get('http://net-music.penkuoer.com/banner?type=1').then(res =>{
      //console.log(res.data.banners)
      // 轮播图
      this.lbtimages = res.data.banners
    }),
    axios.get('http://net-music.penkuoer.com/top/playlist/catlist').then(res =>{
      //console.log(res.data.playlists)
      // lick文字
      this.links = res.data.playlists
    })
  },
}
</script>