<template>
	<div class="zujian">
		<div class="top">
			<div @click="fanhui()" class="top-lt">&lt;</div>
			<div class="top-mian">排行榜</div>
			<van-icon @click="toPlay()" class="top-rt" name="coupon" size="20"/>
		</div>
		
		
	</div>
</template>

<script>
	export default{
		name:"paihangbang",
		methods:{
			fanhui(){
				this.$router.go(-1)
			},
			
		}
	}
</script>

<style scoped="scoped">
p{
	margin: 0;
	padding: 0;
}
.top{
	height: 50px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.top-lt{
	font-size: 20px;
}
	
	
</style>
