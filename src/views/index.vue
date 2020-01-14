<template>
  <div class="index">
    <div>
      <router-view></router-view>
    </div>
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
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'index',
  data() {
    return {};
  },
  methods: {},
};
</script>
