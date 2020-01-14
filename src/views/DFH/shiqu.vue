<template>
	<div class="main">
		<div class="top">
			<div class="beijing">
				<van-icon name="music-o" class="tubiao"/>
			</div>
		</div>
		
		<div class="buttom">
			<div class="buttom-top">点击识别音乐</div>
			<div class="buttom-top">旋律识别,识别你周围播放的歌</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'shiqu'
	}
</script>

<style scoped="scoped">
.main{
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.top{
	height: 270px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.beijing{
	width: 120px;
	height: 120px;
	border-radius: 50%;
	background: #C8C9CC;
	display: flex;
	justify-content: center;
	align-items: center;
}
.tubiao{
	font-size: 70px;
	color: #888888;
}
.buttom{
	height: 70px;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	align-items: center;
	color: #969799;
}
	
</style>
