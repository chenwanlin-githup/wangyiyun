<template>
  <div id="main" :style="{overflow:'hidden'}">
    <div class="nav">
      <van-icon name="volume-o" class="nav-lt" @click="toTinggeshiqu()" />
      <input type="text" placeholder="搜多音乐.歌词.电台" class="nav-main" @click="toSearch()" />
      <van-icon name="music" class="nav-rt" @click="toPlayMusic()" />
    </div>
    <!-- 头部结束 -->
    <div class="neirong">
      <div class="taber">
        <div class="taber-top">
          <router-link :to="{name : 'tuijian'}">个性推荐</router-link>
          <router-link :to="{name : 'gedan'}">歌单</router-link>
          <router-link :to="{name : 'diantai'}">电台</router-link>
          <router-link :to="{name : 'paihang'}">排行榜</router-link>
        </div>
        <div class="taber-buttom">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "find",
  data() {
    return {};
  },
  methods: {
    toPlayMusic() {
      this.$router.push({ name: "playMusic" });
    },
    toSearch() {
      this.$router.push({ name: "search" });
    },
    toTinggeshiqu() {
      this.$router.push({ name: "tinggeshiqu" });
    }
  }
};
</script>

<style scoped="scoped">
.neirong {
  margin-bottom: 50px;
}
.router-link-active {
  color: #000;
  border-bottom: 1px solid #000;
}
.nav {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav-lt {
  font-size: 25px;
}
.nav-main {
  width: 250px;
  border-radius: 20px;
  text-align: center;
  border: 0;
  height: 30px;
  background: #f2f3f5;
}
.nav-rt {
  font-size: 30px;
}
/*
	头部结束
 */

a {
  color: #969799;
}
.taber-top {
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #f2f3f5;
}
</style>
