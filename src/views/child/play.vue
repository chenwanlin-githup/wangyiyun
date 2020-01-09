<template>
  <div>
    <van-nav-bar title="标题" >
      <van-icon name="arrow-left" slot="left"  @click="toFrom()" />
    </van-nav-bar>
    <div class="circle"></div>
    <p>这里是歌词这里是歌词</p>
    <van-col span="6">
      <van-button icon="arrow-left" size="small" color="#000" plain type="primary" />
    </van-col>
    <van-col span="6">
      <van-button icon="play-circle-o" size="small" color="#000" plain type="primary" />
    </van-col>
    <van-col span="6">
      <van-button icon="arrow" size="small" color="#000" plain type="primary" />
    </van-col>
    <van-col span="6">
      <van-button icon="music-o" size="small" color="#000" plain type="primary" />
    </van-col>
  </div>
</template>
<script>
export default {
  methods: {
    toFrom(res) {
      this.$router.push({
        name: "friend"
      });
    }
  }
};
</script>
<style scoped>
div p {
  margin-bottom: 60px;
}
.circle {
  width: 200px;
  height: 200px;
  border: 40px solid black;
  border-radius: 50%;
  background: white;
  margin: 100px auto;
}
</style>