
<template >
  <!-- {"shhs":1,"shhs":2,"shhs":3,"shhs":4} -->
  <div>
    <p v-for="(item,id,num) in data" :key="num">{{item[1]}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: { shhsa: 11, shhss: 22, shhsd: 33, shhsf: 444 }
    };
  }
};
</script>
