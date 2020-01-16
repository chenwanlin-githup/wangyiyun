<template>
	<div class="zujian">
		<img class="tu" src="http://img3.imgtn.bdimg.com/it/u=1441935680,694897945&fm=26&gp=0.jpg" />
		
		<div class="nav">
			<div class="nav-lt">
				<van-icon name="send-gift" size="25"/>
				<p>电台分类</p>
			</div>
			<div class="nav-rt">
				<van-icon name="wap-nav" size="25"/>
				<P>电台排行</P>
			</div>
		</div>
		
		<!-- 每天听些好节目 -->
		<p style="padding:0 0 10px 20px;">每天听些好节目</p>
		
		<div class="main">
			<div class="main-lt">
				<img style="width: 100%;" src="http://img2.imgtn.bdimg.com/it/u=3491069444,2834042914&fm=26&gp=0.jpg" />
			</div>
			<div class="main-rt">
				<p>凉凉-丸子/神秘男水友</p>
				<p>丸子www</p>
			</div>
		</div>
		
		<div class="main">
			<div class="main-lt">
				<img style="width: 100%;" src="http://img3.imgtn.bdimg.com/it/u=1752841181,399464128&fm=26&gp=0.jpg" />
			</div>
			<div class="main-rt">
				<p>凉凉-丸子/神秘男水友</p>
				<p>丸子www</p>
			</div>
		</div>
		
		<div class="main">
			<div class="main-lt">
				<img style="width: 100%;" src="http://img4.imgtn.bdimg.com/it/u=567380022,2307493600&fm=15&gp=0.jpg"/>
			</div>
			<div class="main-rt">
				<p>凉凉-丸子/神秘男水友</p>
				<p>丸子www</p>
			</div>
		</div>
		
		<!-- 电台个性推荐> -->
		<p style="padding:0 0 10px 20px;">电台个性推荐></p>
		<van-grid :border="false" :column-num="3">
		  <van-grid-item>
		    <van-image src="http://img3.imgtn.bdimg.com/it/u=3657224390,1243000937&fm=26&gp=0.jpg" />
			<div>哪吒大人</div>
		  </van-grid-item>
		  <van-grid-item>
		    <van-image src="https://p1.music.126.net/XOKqiHGykghX2DovFaIoAQ==/109951163239625308.jpg?param=177y177" />
		  		<div>女友FM</div>
		  </van-grid-item>
		  <van-grid-item>
		    <van-image src="http://img0.imgtn.bdimg.com/it/u=263014477,481228463&fm=26&gp=0.jpg" />
		  		<div>谛听大人</div>
		  </van-grid-item>
		  <van-grid-item>
		    <van-image src="http://img1.imgtn.bdimg.com/it/u=3948478582,1012098103&fm=26&gp=0.jpg" />
		  		<div>人间集</div>
		  </van-grid-item>
		  <van-grid-item>
		    <van-image src="http://img4.imgtn.bdimg.com/it/u=1224323170,3087082366&fm=26&gp=0.jpg" />
		  		<div>小星牌MP3</div>
		  </van-grid-item>
		  <van-grid-item>
		    <van-image src="http://p1.music.126.net/QOT67VdrSzdg9YtayJdojQ==/109951164211083951.jpg?param=200y200" />
		  		<div>FM夜话</div>
		  </van-grid-item>
		</van-grid>
		
		<!-- 明星做主播> -->
		<p style="padding:0 0 10px 20px;">明星做主播></p>
		<van-grid :border="false" :column-num="3">
		  <van-grid-item>
		    <van-image src="http://img1.imgtn.bdimg.com/it/u=2863537863,1593168458&fm=26&gp=0.jpg" />
			<div>小白</div>
		  </van-grid-item>
		  <van-grid-item>
		    <van-image src="http://img.zcool.cn/community/016ba85e1c5db2a80121651868feb7.jpg@1280w_1l_2o_100sh.jpg" />
		  		<div>无限姐姐</div>
		  </van-grid-item>
		  <van-grid-item>
		    <van-image src="http://img1.imgtn.bdimg.com/it/u=2678922936,359304961&fm=26&gp=0.jpg" />
		  		<div>哥哥</div>
		  </van-grid-item>
		</van-grid>
		
		<!-- 热门分类 -->
		<p style="padding:0 0 10px 20px;">热门分类></p>
		<div class="fenlei">
			<div class="fenlei-lt">
				<div class="fenlei-lt-tt">
					<van-icon class="niubi" name="manager" size="20"/>
					<p>明星做主播</p>
				</div>
				<div class="fenlei-lt-main">
					<van-icon class="niubi" name="smile" size="20"/>
					<p>脱口秀</p>
				</div>
				<div class="fenlei-lt-bt">
					<van-icon class="niubi" name="play-circle" size="20"/>
					<p>音乐故事</p>
				</div>
			</div>
			<div class="fenlei-rt">
				<div class="fenlei-lt-tt">
					<van-icon class="niubi" name="manager" size="20"/>
					<p>明星做主播</p>
				</div>
				<div class="fenlei-lt-main">
					<van-icon class="niubi" name="smile" size="20"/>
					<p>脱口秀</p>
				</div>
				<div class="fenlei-lt-bt">
					<van-icon class="niubi" name="play-circle" size="20"/>
					<p>音乐故事</p>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'diantai'
	}
</script>

<style scoped="scoped">
p{
	margin: 0;
	padding: 0;
}
img{
	display: block;
}
.tu{
	height: 150px;
	width: 100%;
}

.nav{
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.nav-lt{
	width: 100px;
	height: 70px;
	display: flex;
	justify-content: space-around;
	align-items: center;	
}
.nav-rt{
	width: 100px;
	height: 70px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.main{
	height: 70px;
	display: flex;
	align-items: center;
	margin: 10px 0;
}
.main-lt{
	width: 70px;
	height: 70px;
	background: #888888;
	margin-right: 15px;
}

/* 热门分类 */
.fenlei{
	height: 150px;
	width: 100%;
	display: flex;
	border-bottom: 1px solid #DCDCDC;
}
.fenlei-lt{
	height: 150px;
	width: 50%;
	border-right: 1px solid #DCDCDC;
	display: flex;
	flex-direction: column;
	
}
.fenlei-rt{
	height: 150px;
	width: 50%;
}
.fenlei-lt-tt{
	border-top: 1px solid #DCDCDC;
	display: flex;
	align-items: center;
	height: 50px;
}
.fenlei-lt-main{
	border-top: 1px solid #DCDCDC;
	display: flex;
	align-items: center;
	height: 50px;
}
.fenlei-lt-bt{
	border-top: 1px solid #DCDCDC;
	display: flex;
	align-items: center;
	height: 50px;
}
.niubi{
	padding: 0 10px;
}


</style>
