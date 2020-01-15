<template>
	<div id="back">
		<div id="hang">
			<van-nav-bar title="我的音乐" left-text="更多">
				<img class="navImg" src="../../assets/accountimage/bfi.png" alt slot="right" width="20px" height="20px" @click="toFrom()" />
			</van-nav-bar>
		</div>
	</div>
</template>

<style scoped>
</style>

<script>
	import axios from "axios";
	export default {
		data() {
			return {
				Data: []
			};
		},
		created() {
			axios.get("http://net-music.penkuoer.com/user/playlist?uid=" + 490163516) //this.$route.query.id
				.then(res => {
					console.log(res.data);
					this.Data = res.data;
				});
		},
		methods: {
			toFrom() {
				this.$router.push({name: "play"});
			}
		}
	};
</script>
