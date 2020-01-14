<template>
	<div class="main">
		<div class="top">
			<div class="top-lt" @click="fanhui()">&lt</div>
			<div class="top-main">
				<router-link :to="{name:'shiqu'}">听歌识曲</router-link>|
				<router-link :to="{name:'lishi'}">识别历史</router-link>
			</div>
			<div class="top-rt">
			<van-icon name="music" class="aa"  @click="toPlayMusic()"/>
			</div>
		</div>
		<!--头部结束-->
		
		<div class="main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		name:"tinggeshiqu",
		methods:{
			toPlayMusic(){
				this.$router.push({name:"playMusic"})
			},
			fanhui(){
				this.$router.push({name:"find"})
			}
		}
	}
</script>

<style scoped="scoped">
	a{
		color: #969799;
	}
.top{
	width: 100%;
	height: 50px;
	border-bottom:1px solid #969799;
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: #969799;
}
.top-main{
	width: 170px;
	height: 30px;
	display: flex;
	border: 1px solid #969799;
	align-items: center;
	justify-content: space-around;
}
.top-lt{
	font-size: 25px;
}
.top-rt{
	font-size: 25px;
}
.router-link-exact-active{
	color: #000;
}
	
</style>
