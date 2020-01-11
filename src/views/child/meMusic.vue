<template>
  <div>
    <van-tabs sticky route animated color="#90ee90">
      <van-tab>
        更多
        <div slot="title">更多</div>
      </van-tab>
      <van-tab>
        <ul class="mi">
          <li>
            <b class="my">
              <van-icon name="music-o" />本地音乐
            </b>
            <span>
              123
              <van-icon name="arrow" />
            </span>
          </li>
          <li>
            <b class="my">
              <van-icon name="play-circle-o" />最近播放
            </b>
            <span>
              123
              <van-icon name="arrow" />
            </span>
          </li>
          <li>
            <b class="my">
              <van-icon name="underway-o" />我的电台
            </b>
            <span>
              123
              <van-icon name="arrow" />
            </span>
          </li>
          <li>
            <b class="my">
              <van-icon name="wap-home-o" />我的收藏
            </b>
            <span>
              123
              <van-icon name="arrow" />
            </span>
          </li>
        </ul>
        <hr />
        <dl class="lick">
          <dt><img src="https://img.yzcdn.cn/vant/t-thirt.jpg" width="100px"></dt>
          <dd>我喜欢的音乐</dd>
          <dd>7首，已经下载3首</dd>
        </dl>
        <div slot="title">我的音乐</div>
      </van-tab>
      <van-tab :to="{name:'play',query:{url:'me'}}">
        内容uuuuu
        <div slot="title">
          <van-icon name="music" />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.mi li {
  float: left;
  width: 100%;
  font-size: 15px;
}
.mi .my {
  margin-right: 200px;
}
.mi span {
  float: right;
  margin-right: 20px;
}
/* 喜欢 */
.lick{
  width: 100%;
  height: 50px;
  font-size: 14px;
  text-align: left;
  padding-left:10px;
}
.lick img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  float: left;
}
.lick dd{
  margin-left:70px
}
</style>
