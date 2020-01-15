<template>
  <div class="index">
    <div>
      <router-view></router-view>
    </div>
<<<<<<< HEAD
    <van-tabbar route>
      <van-tabbar-item icon="home-o" :to="{ name: 'find' }">发现音乐</van-tabbar-item>
      <van-tabbar-item icon="search" :to="{ name: 'me' }">我的音乐</van-tabbar-item>
      <van-tabbar-item icon="friends-o" :to="{ name: 'friend' }">朋友</van-tabbar-item>
      <van-tabbar-item icon="setting-o" :to="{ name: 'account' }">账号</van-tabbar-item>
=======
    <van-tabbar route swipeable>
      <van-tabbar-item icon="home-o" :to="{ name: 'find' }"
        >发现音乐</van-tabbar-item
      >

      <van-tabbar-item icon="search" :to="{ name: 'me' }"
        >我的音乐</van-tabbar-item
      >
      <van-tabbar-item icon="friends-o" :to="{ name: 'friend' }"
        >朋友</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" :to="{ name: 'account' }"
        >账号</van-tabbar-item
      >
>>>>>>> 9825c7ccd4bac8b373555df6dd1863509c931df0
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {};
  },
  methods: {}
};
</script>
