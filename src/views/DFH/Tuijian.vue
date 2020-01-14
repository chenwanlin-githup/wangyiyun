<template>
	<div class="zujian">
		<img class="tu" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2456127230,1591620370&fm=26&gp=0.jpg"/>
		
		<div class="nav">
			<div class="nav-t">
				<div class="nav-t-t">
					<van-icon name="more" class="aa"/>
				</div>
				<div class="nav-b">私人FM</div>
			</div>
			
			<div class="nav-t">
				<div class="nav-t-t">
					<van-icon name="more" class="aa"/>
				</div>
				<div class="nav-b">每日歌曲推荐</div>
			</div>
			
			<div class="nav-t">
				<div class="nav-t-t">
					<van-icon name="more" class="aa"/>
				</div>
				<div class="nav-b">云音乐热歌榜</div>
			</div>
		</div>
		
		<!-- 推荐歌单 -->
		<div class="tuijiangedan">推荐歌单></div>
		<van-grid :gutter="10" :column-num="3">
		  <van-grid-item
		    v-for="value in 6"
		    :key="value"
		    icon="photo-o"
		    text="文字"
		  />
		</van-grid>
		
		<!-- 独家放送 -->
		<div class="dujia">独家放送></div>
		<div class="dujia-main">
			<div class="dujia-t-l">
				<img class="tu1" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2619102948,2246976536&fm=26&gp=0.jpg" />
				<p class="zi1">短视频 骚的睁不开眼睛!欧美妖男编舞布兰妮最新热单</p>
			</div>
			<div class="dujia-t-r">
				<img class="tu2" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3900796492,1852539343&fm=26&gp=0.jpg" />
				<p class="zi2">短视频 骚的睁不开眼睛!欧美妖男编舞布兰妮最新热单</p>
			</div>
		</div>
		<div class="dujia-b">
			<img class="tu3" src="http://5b0988e595225.cdn.sohucs.com/images/20190815/2d811ee03a3e43ee99e172b0fa691c61.JPG" />
			<p class="zi3">短视频 暴露年龄!听过这些歌的你 可能已经不在年轻</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'tuijian'
	}
</script>

<style scoped="scoped">
.tu{
	width: 100%;
	height: 150px;
	display: block;
}

.nav{
	height: 100px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.nav-t{
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.nav-t-t{
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: #C8C9CC;
	display: flex;
	justify-content: center;
	align-items: center;
}

/* 推荐歌单 */
.tuijiangedan{
	line-height: 50px;
	height: 50px;
	padding-left: 20px;
}
/* 独家放送 */
.dujia{
	line-height: 50px;
	height: 50px;
	padding-left: 20px;
}
img{
	display: block;
}
.dujia-main{
	height: 150px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
p{
	margin: 0;
	padding: 0;
	font-size: 15px;
}
.dujia-t-l{
	height: 150px;
}
.dujia-t-r{
	height: 150px;
}
.tu1{
	width: 180px;
	height: 100px;
}
.tu2{
	width: 187px;
	height: 100px;
}
.tu3{
	width: 100%;
	height: 150px;
}



</style>
