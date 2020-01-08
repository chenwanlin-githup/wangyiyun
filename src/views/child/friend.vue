<template>
  <div id="friend">
    <van-tabs sticky>
      <van-tab>
        内容1
        <div slot="title">
          <van-icon name="add-o" />
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
            <span>关注</span>
          </li>
          <li>
            <p>一个关于垃圾和资源回收的小动画,你有没装在包包里忘记扔掉的垃圾?</p>
            <div>电影</div>
            <p>爱电影不错过</p>
          </li>
          <li class="button">
            <van-button icon="thumb-circle-o" size="mini" type="primary" color="#7232dd" plain />&nbsp;&nbsp;&nbsp;<i>36</i>&nbsp;&nbsp;&nbsp;
            <van-button icon="orders-o" size="mini" type="primary" color="#7232dd" plain />&nbsp;&nbsp;&nbsp;<i>3</i>&nbsp;&nbsp;&nbsp;
            <van-button icon="share" size="mini" type="primary" color="#7232dd" plain />&nbsp;&nbsp;&nbsp;<i>转发</i>
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
            <span>关注</span>
          </li>
          <li>
            <p>一个关于垃圾和资源回收的小动画,你有没装在包包里忘记扔掉的垃圾?</p>
            <div>电影</div>
            <p>爱电影不错过</p>
          </li>
          <li class="button">
            <van-button icon="thumb-circle-o" size="mini" type="primary" color="#7232dd" plain />&nbsp;&nbsp;&nbsp;<i>36</i>&nbsp;&nbsp;&nbsp;
            <van-button icon="orders-o" size="mini" type="primary" color="#7232dd" plain />&nbsp;&nbsp;&nbsp;<i>3</i>&nbsp;&nbsp;&nbsp;
            <van-button icon="share" size="mini" type="primary" color="#7232dd" plain />&nbsp;&nbsp;&nbsp;<i>转发</i>
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
            <span>关注</span>
          </li>
          <li>
            <p>一个关于垃圾和资源回收的小动画,你有没装在包包里忘记扔掉的垃圾?</p>
            <div>电影</div>
            <p>爱电影不错过</p>
          </li>
          <li class="button">
            <van-button icon="thumb-circle-o" size="mini" type="primary" color="#7232dd" plain />&nbsp;&nbsp;&nbsp;<i>36</i>&nbsp;&nbsp;&nbsp;
            <van-button icon="orders-o" size="mini" type="primary" color="#7232dd" plain />&nbsp;&nbsp;&nbsp;<i>3</i>&nbsp;&nbsp;&nbsp;
            <van-button icon="share" size="mini" type="primary" color="#7232dd" plain />&nbsp;&nbsp;&nbsp;<i>转发</i>
          </li>
        </ul>
      </van-tab>
      <van-tab title="附近">
        <ul class="nearby-ul">
          <li>
            <van-image
          width="100%"
          height="230px"
          fit="scale-down"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
          </li>
          <li>
        <p class="">主播翻唱大投票进行中!人气主播翻唱实力大揭秘</p>
          </li>
        </ul>
        <ul class="nearby-ul">
          <li>
            <van-image
          width="100%"
          height="230px"
          fit="scale-down"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
          </li>
          <li>
        <p class="">主播翻唱大投票进行中!人气主播翻唱实力大揭秘</p>
          </li>
        </ul>
       <dl class="nearby-dl">
	      	<dt>
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
          </dt>
		      <dd></dd>
		      <dd></dd>
    	</dl>
      </van-tab>
      <van-tab>
        内容4
        <div slot="title">
          <van-icon name="service-o" />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<style scoped>
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
  width: 222px;
}
.tab2 span {
  width: 69px;
  line-height: 29px;
  display: block;
  background: rgba(149, 149, 149, 1);
  font-size: 14px;
  color: white;
  position: absolute;
  right: 5px;
  top: 50px;
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
.nearby-ul p{
  font-size: 13px;
}
.nearby-dl dt img{
  float: left;
  margin-left:20px ;
  width: 46px;
  height: 46px;
  border-radius: 50%;
}
</style>