<template>
	<div class="zujian">
		<p style="padding:10px 0 10px 10px;">云音乐官方榜</p>
		
		<div class="main" @click="toPaihangbang()">
			<div class="tu">新歌榜</div>
			<ul class="main-main">
				<li>1. 动物世界-薛之谦</li>
				<li>2. 高尚-薛之谦</li>
				<li>3. 多情种-要不要买菜</li>
			</ul>
		</div>
		
		<div class="main">
			<div class="tu">新歌榜</div>
			<ul class="main-main">
				<li>1. 动物世界-薛之谦</li>
				<li>2. 高尚-薛之谦</li>
				<li>3. 多情种-要不要买菜</li>
			</ul>
		</div>
		
		<div class="main">
			<div class="tu">新歌榜</div>
			<ul class="main-main">
				<li>1. 动物世界-薛之谦</li>
				<li>2. 高尚-薛之谦</li>
				<li>3. 多情种-要不要买菜</li>
			</ul>
		</div>
		
		<div class="main">
			<div class="tu">新歌榜</div>
			<ul class="main-main">
				<li>1. 动物世界-薛之谦</li>
				<li>2. 高尚-薛之谦</li>
				<li>3. 多情种-要不要买菜</li>
			</ul>
		</div>
		
		<div class="main">
			<div class="tu">新歌榜</div>
			<ul class="main-main">
				<li>1. 动物世界-薛之谦</li>
				<li>2. 高尚-薛之谦</li>
				<li>3. 多情种-要不要买菜</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'paihang',
		methods:{
			toPaihangbang(){
				this.$router.push({name:"paihangbang"})
			}
		}
	}
</script>

<style scoped="scoped">
p,ul,li{
	margin: 0;
	padding: 0;
}	
.main{
	height: 100px;
	display: flex;
	align-items: center;
}
.tu{
	height: 90px;
	width: 90px;
	background: #C8C9CC;
	color: #646566;
	text-align: center;
	line-height: 90px;
	margin-right: 20px;
}
li{
	padding: 3px 0;
}


	
</style>
